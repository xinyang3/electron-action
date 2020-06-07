'use strict'

process.env.BABEL_ENV = 'main'

const path = require('path')
const { dependencies } = require('../package.json')
const webpack = require('webpack')

const MinifyPlugin = require('babel-minify-webpack-plugin')
const config = require('./config')
let mainConfig = {
  mode: process.env.NODE_ENV,
  entry: {
    main: path.join(__dirname, '../src/main/index.js'),
  },
  externals: [...Object.keys(dependencies || {})],
  module: {
    rules: [
      // {
      //   test: /\.(js)$/,
      //   enforce: 'pre',
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'eslint-loader',
      //     options: {
      //       formatter: require('eslint-friendly-formatter')
      //     }
      //   }
      // },
      // {
      //   test: /\.js$/,
      //   use: 'babel-loader',
      //   include: /electron-dl/,
      // },
      {
        test: /\.js$/,
        use: 'babel-loader',
        // include: [/node_modules\/electron-dl/],
        // exclude:
        //   process.env.NODE_ENV !== 'production'
        //     ? /node_modules/
        //     : /node_modules\/(?!(electron-dl)).*/,
        exclude: /node_modules/,
        // exclude: [
        //   /node_modules\/(webpack|html-webpack-plugin)\//,
        //   /node_modules\/(?!(electron-dl)).*/,
        // ],
      },
      {
        test: /\.node$/,
        use: 'node-loader',
      },
    ],
  },
  node: {
    __dirname: process.env.NODE_ENV !== 'production',
    __filename: process.env.NODE_ENV !== 'production',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    chunkFilename: '[name].[hash].js',
    path: path.join(__dirname, '../dist/electron'),
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.AGORA_APPID': config.env.AGORA_APPID,
      'process.env.AGORA_LOG_PATH': config.env.AGORA_LOG_PATH,
    }),
  ],
  resolve: {
    alias: {
      root: path.join(__dirname, '..'),
      resource: path.join(__dirname, '../src/resource'),
      src: path.join(__dirname, '../src'),
    },
    extensions: ['.js', '.json', '.node'],
  },
  target: 'electron-main',
}

/**
 * Adjust mainConfig for development settings
 */
if (process.env.NODE_ENV !== 'production') {
  mainConfig.plugins.push(
    new webpack.DefinePlugin({
      __static: `"${path.join(__dirname, '../static').replace(/\\/g, '\\\\')}"`,
    })
  )
}

/**
 * Adjust mainConfig for production settings
 */
if (process.env.NODE_ENV === 'production') {
  mainConfig.plugins.push(
    new MinifyPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    })
  )
}

module.exports = mainConfig
