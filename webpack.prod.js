const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

// this configuration is used to make build
module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public"),
      },
    devtool: 'source-map',
})