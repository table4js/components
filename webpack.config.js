const _ = require('underscore');
const webpack = require('webpack');
const packageJson = require('./package.json');
const publishPackageJson = require('./publish/package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

publishPackageJson.version = packageJson.version;

const libraryName = 'AbrisComponents';
const banner = [
  "@abris-lab/components - JavaScript components library v" + packageJson.version,
  "Copyright (c) 2018-2021 Abris LTD - https://github.com/abris-platform/components",
  "License: MIT (http://www.opensource.org/licenses/mit-license.php)",
].join("\n");

const BASE_CFG = {
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
  // externals: {
  //   knockout: {
  //     root: "ko",
  //     commonjs2: "knockout",
  //     commonjs: "knockout",
  //     amd: "knockout"
  //   },
  // },
  entry: {
    [packageJson.name]: './sources/knockout/index.ts',
  }
};

const DEV_CFG = _.extend({}, BASE_CFG, {
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin(
      { filename: '[name].css' }
    ),
    new HtmlWebpackPlugin({
      title: libraryName,
      inject: 'head',
      template: './public/index.html',
      scriptLoading: "blocking"
    }),
    new webpack.BannerPlugin(banner)
  ],
  output: {
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/site/dist',
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
    // new HtmlWebpackPlugin({
    //   title: libraryName,
    //   filename: 'index.html',
    //   inject: 'head',
    //   template: './public/index.html',
    //   scriptLoading: "blocking"
    // }),
    new webpack.BannerPlugin(banner),
    //new webpack.optimize.UglifyJsPlugin()
    new GeneratePackageJsonPlugin(publishPackageJson),
    new CopyPlugin({
      patterns: [
        { from: "publish/doc-index.md", to: "README.md" }
      ],
    })
  ],
  output: {
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/site/dist',
    filename: '[name].min.js'
  }
});

module.exports = [DEV_CFG, PROD_CFG];
