const _ = require('underscore');
const packageJson = require('./package.json');
const publishPackageJson = require('./publish/package.json');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const [ dev, prod ] = require('./webpack.config.js');

const libraryName = 'AbrisComponents';

publishPackageJson.name = "@abris-lab/abris-components-react";
publishPackageJson.version = packageJson.version;
publishPackageJson.dependencies = {
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}

const entry = {
  [packageJson.name]: './sources/react/index.ts',
};

const externals = {
  'react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react',
    umd: 'react'
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom',
    umd: 'react-dom'
  }
}

const output = {
  library: libraryName,
  libraryTarget: 'umd',
  umdNamedDefine: true,
  path: __dirname + '/dist/react',
  filename: '[name].js'
};

dev.entry = entry;
prod.entry = entry;

dev.externals = externals;
prod.externals = externals;

dev.output = _.extend({}, output);
prod.output = _.extend({}, output, {filename: '[name].rect.min.js'});

prod.plugins.push(new GeneratePackageJsonPlugin(publishPackageJson));
prod.plugins.push(new CopyPlugin({
    patterns: [
      { from: "publish/doc-index.md", to: "README.md" }
    ],
  })
);

module.exports = [ dev, prod ];
