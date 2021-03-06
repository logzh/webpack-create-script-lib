var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: {
    'tig': 'index.js'
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: "umd",
    library: "TIG",
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['', '.js'],
    root: path.resolve(__dirname, 'src/')
  },
  externals: {
    'jquery': 'jQuery',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'vue': 'Vue'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url?limit=1024&name=images/[hash].[ext]'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
      }, {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue'
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  plugins: []
};

module.exports = config;
