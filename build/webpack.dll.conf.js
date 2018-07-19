const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('../config');
const dllCfg = require('../config/dll');
const utils = require('./utils');

process.env.NODE_ENV = 'production'

// 修改module配置
let moduleCfg = require('./webpack.base.conf').module;
let rules = moduleCfg.rules.concat()
// 清楚url-loader处理配置项
rules = rules.filter(function (item) {
  return item.loader !== 'url-loader'
})
rules.push.apply(rules, utils.styleLoaders({
  sourceMap: config.build.productionSourceMap,
  extract: true
}).concat([{
  test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 2000,
    name: 'fonts/[name].[hash:7].[ext]',
    publicPath: '/public/'
  }
}, {
  test: /\.(png|jpe?g|gif)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 2000,
    name: 'images/[name].[hash:7].[ext]',
    publicPath: '/public/'
  }
}]))
moduleCfg = Object.assign({}, moduleCfg, {
  rules: rules
})

let  webpackConfig = {
  entry: {
    'common': dllCfg.vendors
  },
  output: {
    path: dllCfg.outputRoot,
    filename: 'js/[name].[chunkhash].js',
    library: '[name]_[chunkhash]'
  },
  resolve: require('./webpack.base.conf').resolve,
  module: moduleCfg,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/prod.env')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      },
      sourceMap: false
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.DllPlugin({
      path: dllCfg.manifestPath,
      name: '[name]_[chunkhash]',
      context: __dirname
    }),
    new AssetsPlugin({
      filename: dllCfg.dllConfigPath.match(/(.+\/)([^/]+)$/)[2],
      path: dllCfg.dllConfigPath.match(/(.+\/)([^/]+)$/)[1]
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: dllCfg.staticRoot,
        ignore: ['.*']
      }
    ])
  ],
};

// gzip
// var CompressionWebpackPlugin = require('compression-webpack-plugin')
//
// webpackConfig.plugins.push(
//   new CompressionWebpackPlugin({
//     asset: '[path].gz[query]',
//     algorithm: 'gzip',
//     test: new RegExp(
//       '\\.(' +
//       config.build.productionGzipExtensions.join('|') +
//       ')$'
//     ),
//     threshold: 10240,
//     minRatio: 0.8
//   })
// )

// bundle-analyzer
if (process.env.npm_config_report) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
