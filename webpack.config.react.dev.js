const HtmlWebpackPlugin = require('html-webpack-plugin');

const [ dev, prod ] = require('./webpack.config.react.js');

dev.plugins.push(new HtmlWebpackPlugin({
  inject: 'head',
  template: './public/index.react.html',
  scriptLoading: "blocking"
}));

module.exports = [dev];
