const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  PUB: path.resolve(__dirname, 'public'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src')
}

module.exports = {
  entry: path.join(paths.SRC, 'app.js'),
  output: {
    path: paths.PUB,
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    })
  ],
  mode: 'development',
  module: {
    rules: [{
      test: [/\.js$/, /\.jsx$/],
      exclude: /node_modules/,
      use: [ 'babel-loader' ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
