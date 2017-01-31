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
        chunkFilename: inProduction ? 'js/build/[name].app.js' : 'js/[name].app.js',
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
        '@websanova/vue-auth', '@websanova/vue-auth/drivers/auth/bearer.js',
        '@websanova/vue-auth/drivers/http/vue-resource.1.x.js',
        '@websanova/vue-auth/drivers/router/vue-router.2.x.js'])
    .copy('node_modules/p5/lib/p5.min.js', pathJs + '/p5js/p5.min.js')
    .copy('node_modules/p5/lib/addons/p5.dom.js', pathJs + '/p5js/addons/p5.dom.js')
    .combine([rootJs + 'vendor/adminLte.js'], 'public/vendor/adminLte/adminLte.js')
    .copy('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js', 'public/vendor/bootstrap/bootstrap.min.js')
    .copy('node_modules/videojs-externals/dist/videojs-externals.min.js', 'public/vendor/videojs/libs/videojs-externals.min.js')
    .copy('node_modules/projectorjs/dist/js/projector.min.js', 'public/vendor/videojs/libs/projectorjs/projector.min.js')
    .copy('node_modules/projectorjs/dist/css/projectorjs.min.css', 'public/vendor/videojs/libs/projectorjs/projectorjs.min.css')
