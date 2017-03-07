var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: '#inline-source-map',

  entry: [
    './src/index.ts',
    './src/index.scss'
  ],

  output: {
    filename: 'bundle.js',
    path: __dirname + '/app'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],

  resolve: {
    extensions: ['.ts', '.js', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.ts$/, use: [{
          loader: 'ts-loader'
        }]
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: [{
          loader: 'url-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
      }
    ],
  }
};