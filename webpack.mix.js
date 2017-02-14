const {mix} = require('laravel-mix');
var path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
var inProduction = mix.config.inProduction;

mix.webpackConfig({
    resolve: {
        alias: {
            base: path.resolve(__dirname, 'resources/assets/js')
        }
    },
    output: {
        filename: '[name].js',
        chunkFilename: 'js/[name].app.js',
        publicPath: '/'
    }
});

var rootJs = 'resources/assets/js/';
var rootCss = 'resources/assets/';
var pathJs = 'public/js';
var pathCss = 'public/css';

mix.less(rootCss + 'less/adminlte/AdminLte.less', pathCss)
    .less(rootCss + 'less/adminlte/skins/skin-blue.less', pathCss)
    .less(rootCss + 'less/adminlte/skins/skin-black.less', pathCss)
    .less(rootCss + 'less/vue-toastr/vue-toastr.less', pathCss)
    .sass(rootCss + 'sass/app.scss', pathCss)
    .js(rootJs + "dashboard/app.js", pathJs + '/app.js').sourceMaps()
    .extract(['vue', 'jquery', 'lodash',
        'bootstrap-sass', 'vue-resource', 'vee-validate',
        'vue-router', 'vuex', 'vue-i18n', 'vue-dragula',
        'vue-highcharts', 'highcharts',
        '@websanova/vue-auth', '@websanova/vue-auth/drivers/auth/bearer.js',
        '@websanova/vue-auth/drivers/http/vue-resource.1.x.js',
        '@websanova/vue-auth/drivers/router/vue-router.2.x.js'])
    .combine(['node_modules/p5/lib/p5.min.js',
        'node_modules/p5/lib/addons/p5.dom.js',
        'resources/assets/js/libs/p5js/addons/p5.collide.js'], 'public/vendor/p5js/p5.min.js')
    .combine(['node_modules/video.js/dist/video.js',
        'node_modules/videojs-youtube/dist/Youtube.js',
        'node_modules/videojs-abloop/videojs-abloop.js',
        'resources/assets/js/libs/videojs/libs/videojs-disable-progress.js'], 'public/vendor/videojs/video.min.js');