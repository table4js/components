const _ = require('underscore');
const packageJson = require('./package.json');
const publishPackageJson = require('./publish/package.json');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const [ dev, prod ] = require('./webpack.config.js');

publishPackageJson.name = "@abris-lab/abris-components-knockout";
publishPackageJson.version = packageJson.version;

dev.output.path = __dirname + '/dist/knockout';
prod.output.path = __dirname + '/dist/knockout';

prod.plugins.push(new GeneratePackageJsonPlugin(publishPackageJson));
prod.plugins.push(new CopyPlugin({
    patterns: [
      { from: "publish/doc-index.md", to: "README.md" }
    ],
  })
);

module.exports = [ dev, prod ];
