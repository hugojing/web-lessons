const path = require('path')
const { SRC_PATH, DIST_PATH, MODULE_PATH } = require('./utils')

module.exports = {
  entry: {
    main: path.resolve(SRC_PATH, 'main')
  },
  output: {
    path: DIST_PATH,
    filename: 'app.[hash:7].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': SRC_PATH,
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [ SRC_PATH ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        include: [ SRC_PATH ],
        query: {
          limit: 1024,
          name: 'img/[hash:7].[ext]'
        }
      }
    ]
  },
}
