var webpack = require("webpack");
var path = require('path')

module.exports = {
    entry: path.resolve(__dirname + "/src/index.js"),
    output: {
        path: path.resolve(__dirname + "/dist/assets"),
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: __dirname + '/dist',
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["latest", "react", "stage-0"]
                    }
                }
            }
        ]
    }
}