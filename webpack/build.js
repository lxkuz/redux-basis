require('babel-register')
require('babel-polyfill')

const config = require('./webpack.config.production')
module.exports = config
