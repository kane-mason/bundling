const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.mjs',
  devtool: 'source-map',
  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, 'release')
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  module : {
    rules:[
      {
        test: /\.mjs$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ],
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true
      })
    ]
  }
};