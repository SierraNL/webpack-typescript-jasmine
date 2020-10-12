var path = require('path');

module.exports = {
    mode: 'development',

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