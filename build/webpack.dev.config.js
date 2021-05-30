const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../example/dep.ts')
  },
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '开发测试',
      template: path.resolve(__dirname, '../example/index.html'),
      filename: 'index.html',
      chunks: ['app']
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
})
