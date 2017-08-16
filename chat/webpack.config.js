var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var OptimizeJsPlugin = require('optimize-js-plugin');

var env = process.env.NODE_ENV || 'development';
var plugins = [
new HtmlWebpackPlugin({
        template: 'client/index.html',
        filename: 'index.html',
        inject: 'body',
    })
];

console.log('NODE_ENV:', env);

if (env === 'production') {
plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
}

module.exports = {
    entry: [
        'react-hot-loader/patch',
       // 'webpack-dev-server/client?http://localhost:8080',
       // 'webpack/hot/only-dev-server',
        './client/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public',
    },
    plugins: plugins,
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
};