const _ = require('underscore');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const [ dev, prod ] = require('./webpack.config.js');

const DEV_CFG = _.extend({}, dev, {
    plugins: [
      new HtmlWebpackPlugin({
        inject: 'head',
        template: './public/index.html',
        scriptLoading: "blocking"
      }),
      new MiniCssExtractPlugin(
          { filename: '[name].css' }
      )
    ],
  });

module.exports = [DEV_CFG];
