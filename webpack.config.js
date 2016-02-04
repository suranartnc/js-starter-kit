var path = require('path');
var webpack = require('webpack');

module.exports = {

    devtool: 'cheap-module-eval-source-map',

    entry: [
        'webpack-hot-middleware/client',
        path.resolve(__dirname, 'src/js/client.js')
    ],

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
                exclude: /node_modules/,
                query: {
                    "plugins": [
                        ["react-transform", {
                            "transforms": [
                                {
                                    "transform": "react-transform-hmr",
                                    "imports": ["react"],
                                    "locals": ["module"]
                                }, {
                                    "transform": "react-transform-catch-errors",
                                    "imports": ["react", "redbox-react"]
                                }
                            ]
                        }]
                    ]
                }
            }, { 
                test: /\.scss$/, 
                loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' 
            }, {
                test: /\.woff$/,
                loader: 'url?limit=100000'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: JSON.stringify(true),
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
};