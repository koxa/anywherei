var webpack = require('webpack');
var path = require('path');

module.exports = [{
    target: 'web',
    entry: {
        frontend: './front/index.js'
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['latest', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!raw-loader!sass-loader?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')
            }
        ]
    },
    devtool: 'eval-cheap-module-source-map'
}];