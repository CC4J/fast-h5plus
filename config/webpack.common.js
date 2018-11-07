const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const { pageSet } = require('./page.config');

// 遍历生成入口文件以及HtmlWebpackPlugin所需的参数
let entrySet = {};
let htmlpgSet = [];

for (var i = 0; i < pageSet.length; i++) {
  var item = pageSet[i];
  entrySet[item.filename] = path.resolve(__dirname, '../src/pages/'+ item.filename +'/'+ item.filename +'.js');
  htmlpgSet.push(
    new HtmlWebpackPlugin({
      title: item.title,
      filename: item.filename + '.html',
      template: path.resolve(__dirname, '../template.html'),
      chunks: ['runtime', 'vendor', item.filename]
    })
  );
}

const defaultConfig = {
  entry: entrySet,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'vue-style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 40,
              remPrecision: 8
            }
          },
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include:[path.resolve(__dirname, '../src')]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin('dist/*.*', {
        root: path.resolve(__dirname, '../'),
        verbose: true,
        dry: false
    })
  ].concat(htmlpgSet),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': path.resolve(__dirname, '../src/')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    },
    runtimeChunk: {
        name: 'runtime'
    }
  }
}

module.exports = defaultConfig;