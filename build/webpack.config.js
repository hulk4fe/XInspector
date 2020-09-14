const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const merge = require('webpack-merge');
const base = require("./webpack.base");

const config = merge(base, {
  mode: 'production',
  output: {
    filename: `xinspector.js`,
    library: 'XInspector',
    libraryTarget: 'umd',
    path: path.join(__dirname, "../", "core/")
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        terserOptions: {
          compress: {
            // drop_console: true,
            drop_debugger: true,
            dead_code: true
          }
        }
      })
    ]
  }
});

module.exports = config;