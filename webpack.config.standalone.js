const packageJson = require('./package.json');
const publishPackageJson = require('./publish/package.json');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const [ dev, prod ] = require('./webpack.config.js');

publishPackageJson.name = "table4js";
publishPackageJson.version = packageJson.version;

prod.plugins.push(new GeneratePackageJsonPlugin(publishPackageJson));
prod.plugins.push(new CopyPlugin({
    patterns: [
      { from: "publish/standalone.md", to: "README.md" }
    ],
  }));
  
module.exports = [ dev, prod ];
