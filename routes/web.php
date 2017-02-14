<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

Route::group(['prefix' => LaravelLocalization::setLocale(), 'middleware' => ['localeSessionRedirect', 'localizationRedirect']], function () {

    Route::get('/', function () {
        $source = [
            'techOrder' => ['youtube'],
            'sources'   => [
                [
                    'type' => "video/youtube",
                    'src'  => 'https://www.youtube.com/watch?v=OBprK4dXxTk'
                ]
            ]
        ];
        $locale = LaravelLocalization::getCurrentLocale();
        \JavaScript::put([
            'source' => $source,
            'locale' => $locale,

        ]);
        return view('dashboard');
    });

    Route::get('/test', 'Api\Reports\ReportsController@test');
});
