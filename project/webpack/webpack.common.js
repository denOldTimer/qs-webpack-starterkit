const path = require("path");
const webpack = require("webpack"); // to access built-in plugins
const loaders = require("./loaders");
const plugins = require("./plugins");

///

module.exports = {
  entry: [
    path.resolve(__dirname, "../src/index.html"),
    path.resolve(__dirname, "../src/js/main.js"),
    path.resolve(__dirname, "../src/scss/main.scss"),
  ],

  ///
  module: {
    rules: [
      loaders.SiteLoader,
      loaders.ImageLoader,
      loaders.FontLoader,
      loaders.JSLoader,
      loaders.CSSLoader,
      loaders.FontAwesomeLoader,
    ],
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../../public"),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.CleanWebpackPlugin,
    plugins.ESLintPlugin,
    plugins.MiniCssExtractPlugin,
    plugins.CopyPlugin,
    plugins.PurgecssPlugin,
    //plugins.BrowserSyncPlugin,
  ],
};
