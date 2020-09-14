const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.join(__dirname, '../', 'index.js'),
  output: {
    path: path.join(__dirname, "../", "core/")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  }
};

module.exports = config;