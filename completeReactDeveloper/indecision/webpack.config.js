const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '/src/app.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html')
    })
  ],
  mode: 'development',
  module: {
    rules: [{
      test: [/\.js$/, /\.jsx$/],
      exclude: /node_modules/,
      use: [ 'babel-loader' ]
    }, {
      test: [/\.css$/, /\.scss$/],
      use: [ 'style-loader', 'css-loader', 'sass-loader' ]
    }
    ] },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: 'cheap-module-eval-source-map'
}
