const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/app')
}

module.exports = {
  entry: path.join(paths.JS, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    })
  ],
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: [ 'babel-loader' ]
    }]
  }
}
