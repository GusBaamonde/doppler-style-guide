const commonConfig = require("./webpack-common.config");
const path = require("path");

module.exports = function (env) {
  const config = commonConfig({ ...env, NODE_ENV: "production" });
  config.mode = "production";

  config.output = {
    filename: "static/[name].[contenthash].js",
    assetModuleFilename: "static/media/[hash][ext][query]",
    path: path.resolve(__dirname, "build"),
    publicPath: "auto",
    clean: true,
  };

  return config;
};
