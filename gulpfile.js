const elixir = require('laravel-elixir');

var path = require('path');
require('laravel-elixir-webpack-ex');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    var inProduction = elixir.config.production;
    var webpackConfig = './webpack.config.js';
    var pathJs = 'public/js';
    var pathCss = 'public/css';
    if (inProduction) {
        webpackConfig = './webpack.config.production.js';
        pathJs = 'public/js/build';
        pathCss = 'public/css/build';
    }
    mix.less('adminlte/AdminLte.less', pathCss);
    mix.less('adminlte/skins/skin-blue.less', pathCss);
    mix.less('adminlte/skins/skin-black.less', pathCss);
    mix.sass('app.scss');
    mix.webpack('/v2/app.js', require(webpackConfig), pathJs);
    mix.copy('node_modules/p5/lib/p5.min.js', pathJs + '/p5js/p5.min.js')
    mix.copy('node_modules/p5/lib/addons/p5.dom.js', pathJs + '/p5js/addons/p5.dom.js')
});
