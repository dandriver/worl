var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist/js'),
        compress: true,
        port: 9000
    }
};