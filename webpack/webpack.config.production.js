import path from 'path'
const webpack = require('webpack')
const common = require('./webpack.config.common')

const rootDir = path.resolve(__dirname, '..')

export default {
  ...common,
  entry: {
    app: [
      ...common.entry.app,
      './src/index.js',
      './src/index.html'
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],
  module: {
    rules: [
      ...common.module.rules,
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: [
          path.join(rootDir, 'src'),
          path.join(rootDir, 'vendor')
        ]
      }
    ]
  }
}
