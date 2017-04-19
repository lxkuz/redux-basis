// @flow

require('babel-register')
require('babel-polyfill')
require('react-hot-loader/patch')
const path = require('path')
const webpack = require('webpack')
const express = require('express')

const config = require('../src/config')
const webpackConfig = require('./webpack.config.development.js')

const app = express()
const compiler = webpack(webpackConfig)

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}))

app.use(require('webpack-hot-middleware')(compiler))

// $FlowIgnore bug
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'src', 'index.html'))
})

const port = config.port || 5000
const host = config.host || 'localhost'

app.listen(port, host, (err) => {
  if (err) return console.error(err)
  console.info(`Listening at http://${host}:${port}/`)
})
