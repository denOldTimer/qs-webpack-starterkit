const path = require("path");
const glob = require("glob-all");
const _MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _ESLintPlugin = require("eslint-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const _CopyPlugin = require("copy-webpack-plugin");
const _PurgeCSSPlugin = require("purgecss-webpack-plugin");
const _BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const PurgecssPlugin = new _PurgeCSSPlugin({
  paths: glob.sync(path.resolve(__dirname, "../src/**/*.html")),
});

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: "css/[name].css",
  chunkFilename: "[id].css",
});

const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, ".eslintrc"),
  context: path.resolve(__dirname, "../src/**/*"),
  files: "**/*.js",
});

/**
 * If getting an error during npm start or watch it's
 * most posable because the src/fonts or src/img folders are empty
 */
const CopyPlugin = new _CopyPlugin({
  patterns: [
    {
      from: path.resolve(__dirname, "../src/img/"),
      to: path.resolve(__dirname, "../../public/img/"),
    },
    {
      from: path.resolve(__dirname, "../src/fonts/"),
      to: path.resolve(__dirname, "../../public/fonts/"),
    },
  ],
});

const BrowserSyncPlugin = new _BrowserSyncPlugin(
  {
    host: "localhost",
    port: 9580,
    proxy: "http://127.0.0.1:9580",
    files: [
      {
        match: ["**/*.html", "**/*.scss", "**/*.js,"],
        fn: function (event) {
          if (event === "change") {
            const bs = require("browser-sync").get("bs-webpack-plugin");
            bs.reload();
          }
        },
      },
    ],
  },
  { reload: false }
);

module.exports = {
  CleanWebpackPlugin: new CleanWebpackPlugin(),
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  PurgecssPlugin: PurgecssPlugin,
  ESLintPlugin: ESLintPlugin,
  CopyPlugin: CopyPlugin,
  BrowserSyncPlugin: BrowserSyncPlugin,
};
