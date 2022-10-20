const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

///

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    watchFiles: ["src/**/*.html", "src/**/*.scss", "src/**/*.js,"],
    host: "127.0.0.1",
    //contentBase: path.join(__dirname, "../../public"),
    //Enable Compression
    compress: false,
    //Enable hot reloading
    hot: true,
    port: 3000,
    open: true,
  },
});
