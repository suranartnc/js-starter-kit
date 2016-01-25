var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: path.join(__dirname, 'app.js'),

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: path.join(__dirname, 'src/js')
            }
        ]
    }
};