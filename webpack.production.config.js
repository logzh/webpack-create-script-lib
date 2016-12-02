var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');
var base = require('./webpack.base.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = merge(base, {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    //publicPath: 'http://cdn.xxxx.com/xxdemo/' // 静态资源地址
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
});

module.exports = config;
