const _ = require('underscore');
const webpack = require('webpack');
const packageJson = require('./package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const libraryName = 'Table4JS';
const banner = [
  "table4js - JavaScript Table/Grid library v" + packageJson.version,
  "Copyright (c) 2018-2023 Research Laboratory Abris LTD - https://github.com/abris-platform/components",
  "License: MIT (http://www.opensource.org/licenses/mit-license.php)",
].join("\n");

const BASE_CFG = {
  target: 'web',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { sourceMap: true } }, { loader: 'sass-loader', options: { sourceMap: true } }],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(htm|html)$/,
        loader: 'raw-loader',
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
  entry: {
    table4: './sources/knockout/index.ts',
  }
};

const DEV_CFG = _.extend({}, BASE_CFG, {
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin(
      { filename: '[name].css' }
    )
  ],
  output: {
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/site/dist/standalone',
    filename: '[name].js'
  },
  devtool: 'inline-source-map'
});

const PROD_CFG = _.extend({}, BASE_CFG, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin(
      { filename: '[name].min.css' }
    ),
    //new webpack.optimize.UglifyJsPlugin()
  ],
  output: {
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/site/dist/standalone',
    filename: '[name].min.js'
  }
});

module.exports = [DEV_CFG, PROD_CFG];
