/**
 * Created by dengchongjing on 2017/3/30.
 */
var webpack = require('webpack')
var config = require('../config')
var baseWebpackConfig = require('./webpack.base.config')
// 合并webpack配置插件
var merge = require('webpack-merge')
// 生成html文件插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 错误提示格式化
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// 拷贝资源插件
var CopyWebpackPlugin = require('copy-webpack-plugin')
// 提取样式插件，将css放到index.html的body上面
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// 打包共有的css文件
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// 清除目录插件
var rm = require('rimraf')
var path = require('path')
var utils = require('./utils')

// 读取配置的环境变量 默认是开发环境
var env = process.env.NODE_ENV || 'development'

// 开发环境配置
var devwebackConfig = merge(baseWebpackConfig, {
  entry:{
    // 'dev-client': './build/dev-client'
    'app': ['./build/dev-client', './src/main.js']
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: true })
  },
  // 开发环境 source map 配置
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    // 设置页面中全局变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"'+env+'"'
      }
    }),
    // 热更新插件
    new webpack.HotModuleReplacementPlugin(),
    // 页面中的报错不会阻塞，但是会在编译结束后报错
    new webpack.NoEmitOnErrorsPlugin(),
    // 生成html
    new HtmlWebpackPlugin({
      // 生成的html文件名
      filename: 'index.html',
      // 用于生成html的模版
      template: 'index.html',
      // 所有js资源会放到body底部
      inject: true
    }),
    // 错误提示格式化输出
    new FriendlyErrorsPlugin()
  ]
})



// 生产环境配置
var prodwebackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      // 是否开启 cssSourceMap
      sourceMap: true,
      extract: true
    })
  },
  // 生产环境 source map 配置
  devtool: '#source-map',
  // 输出文件目录和文件打hash
  output: {
    path: path.resolve(__dirname, '../dist'),
    // 生产文件
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    // 按需加载文件
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
    publicPath: config.build.assetsPublicPath
  },
  plugins : [
    // 设置页面中全局变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"'+env+'"'
      }
    }),
    // 压缩js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // 提取样式，将css放到index.html的body上面
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // 打包共有的css文件
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // 生成html
    new HtmlWebpackPlugin({
      // 生成的html文件名和路径
      filename: 'index.html', // config.build.index
      // 用于生成html的模版
      template: 'index.html',
      // 所有js资源会放到body底部
      inject: true,
      // 压缩设置
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // 提取公共js,没有指定输出文件名的文件输出的静态文件名
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // npm资源和src/lib下的文件打包为公共文件
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          ((module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0) || (module.resource.indexOf(path.join(__dirname, '../src/lib')) === 0))
        )
      }
    }),
    // 没有指定输出文件名的文件输出的静态文件名,处理manifest
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new CopyWebpackPlugin([
      {
        from: './config/fis-config.js',
        to: './'
      }
    ])
  ]
})


  var webpackConfig

  if(env != 'development'){ // 如果是生产环境

    // 清除产出目录
    rm(config.build.assetsRoot, err => {
      if (err) throw err
    })

    webpackConfig = prodwebackConfig

    // 判断是否启动资源分析
    if (process.env.npm_config_report) {
      var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      webpackConfig.plugins.push(new BundleAnalyzerPlugin())
    }

  }else{
    webpackConfig = devwebackConfig
  }



module.exports = webpackConfig