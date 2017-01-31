var path = require('path');
var webpack = require('webpack');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    resolve: {
        root: path.resolve('./'),
        alias: {
            vue: 'vue/dist/vue.js',
            node_modules: 'node_modules',
            public: 'public',
            base: 'resources/assets/js',
            jQuery: "jquery",
            jquery: path.join(__dirname, 'node_modules/jquery/src/jquery'),
            webworkify$: 'webworkify-webpack',
            datetimepicker: 'node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
        }
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    output: {
        path: path.resolve("./public/js"),
        filename: '[name].js',
        publicPath: "/js/"
    },
    cache: true,
    debug: true,
    devtool: 'eval-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'SOCKET_URL': JSON.stringify('http://sportech-dublin.app:6001')
            }
        }),
        /* // short-circuits all Vue.js warning code
         new webpack.DefinePlugin({
         'process.env': {
         NODE_ENV: '"production"'
         }
         }),
         // minify with dead-code elimination
         new webpack.optimize.UglifyJsPlugin({
         compress: {
         warnings: false
         }
         }),
         // optimize module ids by occurence count
         new webpack.optimize.OccurenceOrderPlugin()*/
    ],
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                exclude: path.resolve(__dirname, 'node_modules/')
            },
            {
                test: /\.html$/,
                loader: 'html?attrs=false'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader!vuestrap-theme-loader'
            }
        ]
    }
};