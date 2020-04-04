const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "demo/src/index.html"),
    filename: "./index.html"
});
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: path.join(__dirname, "demo/src/index.js"),
    output: {
        path: path.join(__dirname, "demo/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: [
                  // fallback to style-loader in development
                  // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        }
    },
    // externals: {
    //     react: {
    //         commonjs: "react",
    //         commonjs2: "react",
    //         amd: "React",
    //         root: "React"
    //     },
    //     "react-dom": {
    //         commonjs: "react-dom",
    //         commonjs2: "react-dom",
    //         amd: "ReactDOM",
    //         root: "ReactDOM"
    //     }
    // },
    devServer: {
        port: 3001
    }
};