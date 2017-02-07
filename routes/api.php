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

Route::group(['middleware' => 'jwt.auth', 'cors'], function () {
    Route::post('auth/logout', 'Api\Auth\AuthController@logout');
    Route::get('auth/user', 'Api\Auth\AuthController@user');
    Route::put('user', 'Api\Users\UserController@update');

    Route::get('user/challenges/completed', 'Api\Users\UserChallengeController@completed');
    Route::get('user/challenges/in-progress', 'Api\Users\UserChallengeController@inProgress');
    Route::get('user/challenges/available', 'Api\Users\UserChallengeController@available');

    Route::put('/scoutings/{scoutingId}/touches', 'Api\Scoutings\ScoutingsTouchesController@update');
    Route::resource('/scoutings', 'Api\Scoutings\ScoutingsController');

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
});