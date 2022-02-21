const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const DotenvFlow = require("dotenv-flow-webpack");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const Dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

const mapFileManifest = (file) => {
  if (process.env.NODE_ENV === "development") {
    return file;
  }
  file.path = `${process.env.PUBLIC_URL}/${file.path}`;
  return file;
};

const serializeManifest = (seed, files, entries) => {
  files = files.map(mapFileManifest);
  const filesSerialized = {};
  for (const file of files) {
    filesSerialized[file.name] = file.path;
  }

  return {
    files: filesSerialized,
    entrypoints: entries.main,
  };
};

const generateHtmlPlugins = (templateDir) => {
  const directory = fs.readdirSync(path.resolve(__dirname, templateDir));
  return directory
    .filter((item) => /.html$/.test(item))
    .map((item) => {
      const parts = item.split(".");
      const [name, extension] = parts;
      return new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: path.resolve(
          __dirname,
          `${templateDir}/${name}.${extension}`
        ),
      });
    });
};

const rulesStyles = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    // Creates `style` nodes from JS strings
    "css-loader",
    {
      loader: "sass-loader",
      options: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, "./src/assets/scss")],
        },
      },
    },
  ],
};

module.exports = function (env) {
  Dotenv.config({ path: "./.env." + env.NODE_ENV });
  const config = {
    entry: {
      main: "./src/index.js",
    },
    mode: env.NODE_ENV === "production" ? env.NODE_ENV : "development",
    output: {
      filename:
        env.NODE_ENV === "production"
          ? "static/[name].[contenthash].js"
          : "index.js",
      assetModuleFilename: "static/media/[hash][ext][query]",
      path: path.resolve(__dirname, "build"),
      publicPath: "",
      clean: true,
    },
    plugins: [
      ...generateHtmlPlugins("./src/doc/templates"),
      new MiniCssExtractPlugin({
        filename: "static/[name].[contenthash].css",
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
      new DotenvFlow({
        node_env: env.NODE_ENV ? env.NODE_ENV : "development",
      }),
      new WebpackManifestPlugin({
        fileName: "asset-manifest.json",
        generate: serializeManifest,
      }),
    ],
    module: {
      rules: [rulesStyles /*, rulesBabel*/],
    },
  };
  if (env.NODE_ENV === "development") {
    config.mode = "development";
    config.devtool = "inline-source-map";
    config.devServer = {
      historyApiFallback: true,
      static: "./build",
      port: 3500,
    };
    config.watchOptions = {
      ignored: [path.resolve(__dirname, "src"), "./node_modules"],
    };
  }
  return config;
};
