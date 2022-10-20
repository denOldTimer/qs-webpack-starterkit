const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// JS
const JSLoader = {
  test: /\.js$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  },
};

// CSS Development
const CSSLoaderDev = {
  test: /\.(s[ac]|c)ss$/i,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: "css-loader",
      options: { importLoaders: 2 },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, "postcss.config.js"),
        },
      },
    },
    {
      loader: "sass-loader",
    },
  ],
};

const SiteLoader = {
  test: /\.html$/,
  exclude: [path.resolve(__dirname, "./node_modules")],
  type: "asset/resource",
  generator: {
    filename: "[name].html",
  },
};

// Images
const ImageLoader = {
  test: /\.(png|jpeg|jpg|gif|svg)$/i,
  type: "asset/resource",
  exclude: [path.resolve(__dirname, "./node_modules"), [/fonts/]],
  generator: {
    filename: "img/[name][ext]",
  },
};

// Fonts
const FontLoader = {
  test: /\.(svg|eot|ttf|woff|woff2)$/i,
  type: "asset/resource",
  exclude: [path.resolve(__dirname, "./node_modules"), [/img/]],
  generator: {
    filename: "fonts/[name][ext]",
  },
};

// Font-awesome;
const FontAwesomeLoader = {
  test: /font-awesome\.config\.js/,
  use: [{ loader: "style-loader" }, { loader: "font-awesome-loader" }],
};

module.exports = {
  JSLoader: JSLoader,
  CSSLoader: CSSLoaderDev,
  SiteLoader: SiteLoader,
  ImageLoader: ImageLoader,
  FontLoader: FontLoader,
  FontAwesomeLoader: FontAwesomeLoader,
};
