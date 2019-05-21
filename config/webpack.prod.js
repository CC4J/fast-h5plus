const common = require('./webpack.common.js');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',  
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: {
    publicPath: './',  // 用于生产环境
  },
  performance: { // 关闭打包时的性能提示，vendor文件超过200k不会warning提示
    hints: false
  }
});