var path = require('path');

module.exports = {
    mode: 'development',

    resolve: {
        extensions: ['.ts', '.tsx']
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