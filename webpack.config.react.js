const packageJson = require('./package.json');
const publishPackageJson = require('./publish/package.json');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');

const [ dev, prod ] = require('./webpack.config.js');

publishPackageJson.name = "table4react";
publishPackageJson.version = packageJson.version;
publishPackageJson.dependencies = {
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}

const entry = {
  table4: './sources/react/index.ts',
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

dev.entry = entry;
prod.entry = entry;

dev.externals = externals;
prod.externals = externals;

dev.output.path = __dirname + '/site/dist/react';
prod.output.path = __dirname + '/site/dist/react';

prod.plugins.push(new GeneratePackageJsonPlugin(publishPackageJson));

module.exports = [ dev, prod ];
