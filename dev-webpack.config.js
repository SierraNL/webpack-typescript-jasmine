const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',

    entry: [
        './src/index.ts',
        './src/index.scss'
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app'),
    },

    devServer: {
        static: './app',
        open: false,
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
                test: /\.(woff2?|ttf|eot|svg)(\?.*)?$/,
                type: 'asset/inline',
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