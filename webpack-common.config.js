const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotenvFlow = require("dotenv-flow-webpack");
const Dotenv = require("dotenv");

const rulesStyles = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    MiniCssExtractPlugin.loader,
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
  Dotenv.config({
    path: "./.env." + env.NODE_ENV ? env.NODE_ENV : "development",
  });
  return {
    plugins: [
      new MiniCssExtractPlugin({
        filename: "static/[name].[contenthash].css",
      }),
      new DotenvFlow({
        node_env: env.NODE_ENV ? env.NODE_ENV : "development",
      }),
    ],
    module: {
      rules: [rulesStyles],
    },
  };
};
