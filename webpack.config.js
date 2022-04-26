var _ = require('underscore');
var webpack = require('webpack');
var packageJson = require('./package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var PascalCaseNamePlugin = require('./webpack-pascal-case-name');

var libraryName = 'Abris';
var banner = [
    "abris-components - JavaScript components library v" + packageJson.version,
    "Copyright (c) 2018-2021 Abris LTD - https://github.com/abris-platform/components",
    "License: MIT (http://www.opensource.org/licenses/mit-license.php)",
].join("\n");

var BASE_CFG = {
  target: 'web',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
      rules: [
          {
            test: /\.(css|scss)$/,
            use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { sourceMap: true } }, { loader: 'sass-loader', options: { sourceMap: true } }],
          },
          {
            test: /\.(ts|tsx)$/,
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                  //'declaration': true,
                  //'outDir': 'typings/'
              }
            }
          }
      ]
  },
  externals: {
    knockout: {
      root: "ko",
      commonjs2: "knockout",
      commonjs: "knockout",
      amd: "knockout"
    },
    'jquery': {
        root: 'jQuery',
        commonjs2: 'jquery',
        commonjs: 'jquery',
        amd: 'jquery'
    }
  },
  entry: {
    [packageJson.name]: './sources/index.ts',
  }
};

var DEV_CFG = _.extend({}, BASE_CFG, {
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin(
      { filename: '[name].css' }
    ),
    new HtmlWebpackPlugin({
      title: libraryName,
      filename: 'index.debug.html',
      inject: 'head',
      template: './public/index.html',
      scriptLoading: "blocking"
    }),
    new PascalCaseNamePlugin()
  ],
  output: {
    library: '[pc-name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  devtool: 'inline-source-map'
});

var PROD_CFG = _.extend({}, BASE_CFG, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin(
      { filename: '[name].min.css' }
    ),
    new HtmlWebpackPlugin({
      title: libraryName,
      filename: 'index.html',
      inject: 'head',
      template: './public/index.html',
      scriptLoading: "blocking"
    }),
    new webpack.BannerPlugin(banner),
    new PascalCaseNamePlugin(),
    //new webpack.optimize.UglifyJsPlugin()
  ],
  output: {
    library: '[pc-name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/dist',
    filename: '[name].min.js'
  }
});

module.exports = [DEV_CFG, PROD_CFG];
