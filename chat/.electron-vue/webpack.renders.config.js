'use strict'

process.env.BABEL_ENV = 'renders'

const path = require('path')
const { dependencies } = require('../package.json')
const webpack = require('webpack')

const MinifyPlugin = require("babel-minify-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const sysConfig = require('../config-sys')
const { env, reflects, getEntries } = require('./config')

webpack.NodeTargetPlugin

/**
 * List of node_modules to include in webpack bundle
 *
 * Required for specific packages like Vue UI libraries
 * that provide pure *.vue files that need compiling
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/webpack-configurations.html#white-listing-externals
 */
let whiteListedModules = ['vue']

let rendersConfig = {
  devtool: '#cheap-module-eval-source-map',
  entry: getEntries(),
  externals: [
    ...Object.keys(dependencies || {}).filter(d => !whiteListedModules.includes(d))
  ],
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   enforce: 'pre',
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'eslint-loader',
      //     options: {
      //       formatter: require('eslint-friendly-formatter')
      //     }
      //   }
      // },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
      {
        test: /\.html$/,
        use: 'vue-html-loader',
        exclude: /index\.html/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.node$/,
        use: 'node-loader'
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            extractCSS: process.env.NODE_ENV === 'production',
            loaders: {
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1',
              scss: 'vue-style-loader!css-loader!sass-loader',
              less: 'vue-style-loader!css-loader!less-loader'
            }
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'imgs/[name]--[folder].[ext]'
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name]--[folder].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'fonts/[name]--[folder].[ext]'
          }
        }
      }
    ]
  },
  node: {
    __dirname: process.env.NODE_ENV !== 'production',
    __filename: process.env.NODE_ENV !== 'production'
  },
  plugins: [
    new VueLoaderPlugin(),

    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV === 'development' ? '[name].css' : '[name].[hash].css',
      chunkFilename: process.env.NODE_ENV === 'development' ? '[id].css' : '[id].[hash].css',
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   templateParameters (compilation, assets, options) {
    //     return {
    //       compilation: compilation,
    //       webpack: compilation.getStats().toJson(),
    //       webpackConfig: compilation.options,
    //       htmlWebpackPlugin: {
    //         files: assets,
    //         options: Object.assign({}, options, sysConfig)
    //       },
    //       process,
    //     };
    //   },
    //   template: path.resolve(__dirname, '../src/index.ejs'),
    //   minify: {
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true,
    //     removeComments: true
    //   },
    //   nodeModules: process.env.NODE_ENV !== 'production'
    //     ? path.resolve(__dirname, '../node_modules')
    //     : false
    // }),
    new webpack.DefinePlugin({
      'process.env.AGORA_APPID': env.AGORA_APPID,
      'process.env.AGORA_LOG_PATH': env.AGORA_LOG_PATH
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    chunkFilename: '[name].[hash].js',
    path: path.join(__dirname, '../dist/electron/pages')
  },
  resolve: {
    alias: {
      'root': path.join(__dirname, '../'),
      'pages': path.join(__dirname, '../src/pages'),
      // 'render': path.join(__dirname, '../src/renderer'),
      'resource': path.join(__dirname, '../src/resource'),
      'static': path.resolve(__dirname, '../static'),
      'main': path.join(__dirname, '../src/main'),
      // '@': path.join(__dirname, '../src/renderer'),
      'src': path.join(__dirname, '../src'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue', '.json', '.css', '.node']
  },
  target: 'electron-renderer',
  optimization: {
    splitChunks: { // 该选项将用于配置 SplitChunksPlugin 插件
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  }
}

/** 
 *  添加HtmlWebpackPlugin模板文件
 */
reflects.forEach(config => {
  rendersConfig.plugins.push(
    new HtmlWebpackPlugin({
      filename: config.name,
      template: config.entry,
      templateParameters (compilation, assets, options) {
        return {
          compilation: compilation,
          webpack: compilation.getStats().toJson(),
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            files: assets,
            options: options
          },
          process,
        };
      },
      base: process.env.NODE_ENV !== 'production' ? '/' : '../',
      chunks: ['manifest', 'vendor', config.key], // 指定生成的模板文件引入的入口文件
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      nodeModules: process.env.NODE_ENV !== 'production'
        ? path.resolve(__dirname, '../node_modules')
        : false
    }),
  )
})

/**
 * Adjust rendersConfig for development settings
 */
if (process.env.NODE_ENV !== 'production') {
  rendersConfig.plugins.push(
    new webpack.DefinePlugin({
      '__static': `"${path.join(__dirname, '../static').replace(/\\/g, '\\\\')}"`,

    })
  )
}

/**
 * Adjust rendersConfig for production settings
 */
if (process.env.NODE_ENV === 'production') {
  rendersConfig.devtool = ''

  rendersConfig.plugins.push(
    new MinifyPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  )
}

module.exports = rendersConfig
