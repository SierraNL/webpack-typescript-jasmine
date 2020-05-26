var path = require('path');

module.exports = {
  devtool: '#inline-source-map',

  entry: [
    './test/index.spec.ts',
  ],

  output: {
    filename: 'app/bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.ts$/, use: [{
          loader: 'ts-loader'
        }]
      }]
  }
};