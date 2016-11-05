const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname)
const SRC_PATH = path.resolve(ROOT_PATH, 'src')
const DIST_PATH = path.resolve(ROOT_PATH, 'dist')
const MODULE_PATH = path.resolve(ROOT_PATH, 'node_modules')

const config = {
    entry: {
        'main': path.resolve(SRC_PATH, 'main')
    },
    output: {
        path: DIST_PATH,
        filename: 'scripts.js',
        publicPath: './'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: [SRC_PATH]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.mp3$/,
                loader: 'url?limit=1024&name=[hash].[ext]'
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            'src'
        ],
        alias: {
            'modernizr': path.resolve(ROOT_PATH, 'modernizr.js')
        }
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            title: 'Modernizr 实战',
            template: path.resolve(SRC_PATH, 'index.html')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}

module.exports = config
