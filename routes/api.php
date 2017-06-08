<?php

use Dingo\Api\Routing\Router;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {


    /** @var Router $api */
    $api->group(['middleware' => ['api.auth', 'user.active'], 'namespace' => 'App\Http\Controllers'], function ($api) {
        /** @var Router $api */
        $api->post('auth/logout', 'Api\Auth\AuthController@logout');
        $api->get('password/email', 'Api\Auth\ForgotPasswordController@sendResetLinkEmail');

        $api->get('auth/user', 'Api\Auth\AuthController@getUser');
        $api->post('user', 'Api\Users\UserController@update');
        $api->post('user/change-password', 'Api\Users\UserController@changePassword');

        $api->get('user/statistics/summary', 'Api\Users\UserStatisticsController@summary');
        $api->get('user/challenges/completed', 'Api\Users\UserChallengeController@completed');
        $api->get('user/challenges/in-progress', 'Api\Users\UserChallengeController@inProgress');
        $api->get('user/challenges/available', 'Api\Users\UserChallengeController@available');
        $api->get('user/challenges/suggested', 'Api\Users\UserChallengeController@suggested');
        $api->post('user/challenges/{challengeId}/accept', 'Api\Users\UserChallengeController@accept');

        $api->get('ranking', 'Api\Ranking\RankingController@index');

        $api->get('/scoutings/search', 'Api\Scoutings\ScoutingsController@search');
        $api->get('/scoutings/latest', 'Api\Scoutings\ScoutingsController@latest');
        $api->get('/scoutings/app', 'Api\Scoutings\ScoutingsController@app');
        $api->get('/scoutings/results', 'Api\Scoutings\ScoutingsController@results');
        $api->get('/scoutings/other-sources', 'Api\Scoutings\ScoutingsController@otherSources');
        $api->get('/scoutings/{scoutingId}/report', 'Api\Scoutings\ScoutingsReportsController@report');
        $api->put('/scoutings/{scoutingId}/touches', 'Api\Scoutings\ScoutingsTouchesController@update');
        $api->resource('/scoutings', 'Api\Scoutings\ScoutingsController');

        $api->get('/reports/latest', 'Api\Reports\ReportsController@latest');
        $api->get('/reports/{id}/summary', 'Api\Reports\ReportsDataController@summary');
        $api->get('/reports/{id}/parry', 'Api\Reports\ReportsDataController@parry');
        $api->get('/reports/{id}/combat-status', 'Api\Reports\ReportsDataController@combatStatus');
        $api->get('/reports/{id}/point-vs-time', 'Api\Reports\ReportsDataController@pointVsTime');
        $api->get('/reports/{id}/offensive-defensive', 'Api\Reports\ReportsDataController@offensiveDefensive');
        $api->get('/reports', 'Api\Reports\ReportsController@index');
        $api->get('/reports/{id}', 'Api\Reports\ReportsController@show');
        $api->post('/reports', 'Api\Reports\ReportsController@store');

        $api->post('/athletes/{id}', 'Api\Athletes\AthletesController@update');
        $api->resource('/athletes', 'Api\Athletes\AthletesController');

        $api->post('/championships/{id}', 'Api\Championships\ChampionshipsController@update');
        $api->get('/championships/{id}/events', ['uses' => 'Api\Championships\ChampionshipsController@events', 'as' => 'api.championships.events']);
        $api->get('/championships/datatable', ['uses' => 'Api\Championships\ChampionshipsController@datatable', 'as' => 'api.championships.datatable']);
        $api->resource('/championships', 'Api\Championships\ChampionshipsController');

        $api->get('/events/{id}/athletes', ['uses' => 'Api\Events\EventsController@athletes', 'as' => 'api.events.athletes']);
        $api->get('/events/types', ['uses' => 'Api\Events\EventsController@types', 'as' => 'api.events.types']);
        $api->get('/events/reaches', ['uses' => 'Api\Events\EventsController@reaches', 'as' => 'api.events.reaches']);
        $api->resource('/events', 'Api\Events\EventsController');

        $api->get('/sports/{id}/specialties', ['uses' => 'Api\Sports\SportsController@specialties', 'as' => 'api.sports.specialties']);
        $api->get('/sports', ['uses' => 'Api\Sports\SportsController@index', 'as' => 'api.sports']);
        $api->get('/categories', ['uses' => 'Api\Sports\CategoriesController@index', 'as' => 'api.categories']);

        $api->get('/genders', 'Api\General\GenderController@index');
        $api->get('/countries', 'Api\Countries\CountriesController@index');

        $api->get('/tags', 'Api\Tags\TagsController@index');

        //$api->get('invite', 'InviteController@invite')->name('invite');
        $api->post('user/invite/process', 'Api\Invites\InviteController@process');
    });

    $api->group(['middleware' => [], 'namespace' => 'App\Http\Controllers'], function ($api) {
        /** @var Router $api */
        $api->post('auth/login', 'Api\Auth\AuthController@login');
        $api->post('accept', 'Api\Invites\InviteController@accept');
        
        $api->post('password/email', 'Api\Auth\ForgotPasswordController@getResetToken');//agregadas para recuperar contrasena
        $api->post('password/reset/{token}', 'Api\Auth\ResetPasswordController@reset'); //agregadas para recuperar contrasena
    });

});