const path = require('path');

module.exports = {
    devtool: '#inline-source-map',
    mode: 'development',

    entry: [
        './src/index.ts',
        './src/index.scss'
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app'),
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss']
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