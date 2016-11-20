var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var base = require('./webpack.base.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = merge(base, {
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './example/public')
  },
  devtool: '#source-map',
  plugins: [
    new ExtractTextPlugin('css/[name].css')
  ]
});

module.exports = config;
