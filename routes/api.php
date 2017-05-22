<?php

use Illuminate\Support\Facades\Route;
use Tymon\JWTAuth\Facades\JWTAuth;

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
Route::post('auth/login', 'Api\Auth\AuthController@login');
//Route::post('user/create', 'Api\Users\UserController@create');
Route::post('accept', 'Api\Invites\InviteController@accept');

Route::group(['middleware' => 'jwt.auth', 'cors'], function () {
    Route::post('auth/logout', 'Api\Auth\AuthController@logout');
    Route::get('password/email', 'Api\Auth\ForgotPasswordController@sendResetLinkEmail');

    Route::get('auth/user', 'Api\Auth\AuthController@user');
    Route::put('user', 'Api\Users\UserController@update');

    Route::get('user/statistics/summary', 'Api\Users\UserStatisticsController@summary');
    Route::get('user/challenges/completed', 'Api\Users\UserChallengeController@completed');
    Route::get('user/challenges/in-progress', 'Api\Users\UserChallengeController@inProgress');
    Route::get('user/challenges/available', 'Api\Users\UserChallengeController@available');
    Route::get('user/challenges/suggested', 'Api\Users\UserChallengeController@suggested');
    Route::post('user/challenges/{challengeId}/accept', 'Api\Users\UserChallengeController@accept');

    Route::get('ranking', 'Api\Ranking\RankingController@index');

    Route::get('/scoutings/latest', 'Api\Scoutings\ScoutingsController@latest');
    Route::get('/scoutings/app', 'Api\Scoutings\ScoutingsController@app');
    Route::get('/scoutings/results', 'Api\Scoutings\ScoutingsController@results');
    Route::get('/scoutings/other-sources', 'Api\Scoutings\ScoutingsController@otherSources');
    Route::get('/scoutings/{scoutingId}/report', 'Api\Scoutings\ScoutingsReportsController@report');
    Route::put('/scoutings/{scoutingId}/touches', 'Api\Scoutings\ScoutingsTouchesController@update');
    Route::resource('/scoutings', 'Api\Scoutings\ScoutingsController');

    Route::get('/reports/latest', 'Api\Reports\ReportsController@latest');
    Route::get('/reports/{id}/summary', 'Api\Reports\ReportsDataController@summary');
    Route::get('/reports/{id}/parry', 'Api\Reports\ReportsDataController@parry');
    Route::get('/reports/{id}/combat-status', 'Api\Reports\ReportsDataController@combatStatus');
    Route::get('/reports/{id}/point-vs-time', 'Api\Reports\ReportsDataController@pointVsTime');
    Route::get('/reports/{id}/offensive-defensive', 'Api\Reports\ReportsDataController@offensiveDefensive');
    Route::get('/reports', 'Api\Reports\ReportsController@index');
    Route::get('/reports/{id}', 'Api\Reports\ReportsController@show');
    Route::post('/reports', 'Api\Reports\ReportsController@store');

    Route::resource('/athletes', 'Api\Athletes\AthletesController');

    Route::get('/championships/{id}/events', ['uses' => 'Api\Championships\ChampionshipsController@events', 'as' => 'api.championships.events']);
    Route::get('/championships/datatable', ['uses' => 'Api\Championships\ChampionshipsController@datatable', 'as' => 'api.championships.datatable']);
    Route::resource('/championships', 'Api\Championships\ChampionshipsController');

    Route::get('/events/{id}/athletes', ['uses' => 'Api\Events\EventsController@athletes', 'as' => 'api.events.athletes']);
    Route::get('/events/types', ['uses' => 'Api\Events\EventsController@types', 'as' => 'api.events.types']);
    Route::get('/events/reaches', ['uses' => 'Api\Events\EventsController@reaches', 'as' => 'api.events.reaches']);
    Route::resource('/events', 'Api\Events\EventsController');

    Route::get('/sports/{id}/specialties', ['uses' => 'Api\Sports\SportsController@specialties', 'as' => 'api.sports.specialties']);
    Route::get('/sports', ['uses' => 'Api\Sports\SportsController@index', 'as' => 'api.sports']);
    Route::get('/categories', ['uses' => 'Api\Sports\CategoriesController@index', 'as' => 'api.categories']);

    Route::get('/genders', 'Api\General\GenderController@index');
    Route::get('/countries', 'Api\Countries\CountriesController@index');

    Route::get('/tags', 'Api\Tags\TagsController@index');

    //Route::get('invite', 'InviteController@invite')->name('invite');
    Route::post('user/invite/process', 'Api\Invites\InviteController@process');
});