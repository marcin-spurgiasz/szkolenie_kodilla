
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }  
        ]
    }
};