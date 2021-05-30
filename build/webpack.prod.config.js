const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const path = require('path')

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../src/main.ts')
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'common_browser.js',
    library: 'define',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
})
