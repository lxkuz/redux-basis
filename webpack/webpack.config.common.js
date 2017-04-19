import path from 'path'

const rootDir = path.resolve(__dirname, '..')

module.exports = {
  entry: {
    app: [
      'babel-polyfill'
    ]
  },
  output: {
    path: path.join(rootDir, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.css', '.styl'],
    modules: [
      path.join(rootDir, 'src'),
      'node_modules'
    ],
    alias: {
      src: path.join(rootDir, 'src'),
      components: path.join(rootDir, 'src/components'),
      helpers: path.join(rootDir, 'src/helpers'),
      reducers: path.join(rootDir, 'src/reducers'),
      actions: path.join(rootDir, 'src/actions'),
      constants: path.join(rootDir, 'src/constants'),
      styles: path.join(rootDir, 'src/styles'),
      lib: path.join(rootDir, 'src/lib'),
      vendor: path.join(rootDir, 'vendor/')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          `stylus-loader?import=${path.join(rootDir, 'src/styles/colors.styl')}`
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: 'file-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      },
      {
        test: /\.(html|ico)$/,
        use: 'file-loader?name=[name].[ext]'
      }
    ]
  }
}
