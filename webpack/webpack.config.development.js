import path from 'path'
const webpack = require('webpack')
const common = require('./webpack.config.common')

const rootDir = path.resolve(__dirname, '..')

module.exports = {
  ...common,
  entry: {
    app: [
      ...common.entry.app,
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      './src/index.js',
      './src/index.html'
    ]
  },
  devtool: 'eval',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],
  module: {
    rules: [
      ...common.module.rules,
      {
        test: /\.jsx?$/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
        include: [
          path.join(rootDir, 'src'),
          path.join(rootDir, 'vendor'),
          path.join(rootDir, 'webpack')
        ]
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 4000,
    // historyApiFallback: true,
    hot: true
  }
}
