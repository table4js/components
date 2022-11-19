const packageJson = require('./package.json');
const publishPackageJson = require('./publish/package.json');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const [ dev, prod ] = require('./webpack.config.js');

publishPackageJson.name = "table4ko";
publishPackageJson.version = packageJson.version;
publishPackageJson.dependencies = {
  "knockout": "^3.5.0"
}

const externals = {
  knockout: {
    root: "ko",
    commonjs2: "knockout",
    commonjs: "knockout",
    amd: "knockout"
  },
}

dev.externals = externals;
prod.externals = externals;

dev.output.path = __dirname + '/site/dist/knockout';
prod.output.path = __dirname + '/site/dist/knockout';

prod.plugins.push(new GeneratePackageJsonPlugin(publishPackageJson));
prod.plugins.push(new CopyPlugin({
  patterns: [
    { from: "publish/knockout.md", to: "README.md" }
  ],
}));


module.exports = [ dev, prod ];
