/* 代理服务器 */
var express = require('express')
var app = express()
var proxyTable = require('../config/proxyTable')
var proxyMiddleware = require('http-proxy-middleware')

const assetsRoot = require('../config/index').build.assetsRoot
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})
app.use(express.static(assetsRoot))
let listenPort = process.argv.slice(2)[0] || 9999
app.listen(listenPort, function () {
  console.log(`proxyServer start, http://localhost:${listenPort}`)
})
