const commonConfig = require("./webpack-common.config");
const path = require("path");
var mode = process.env.NODE_ENV || "development";
module.exports = function (env) {
  const config = commonConfig(env);
  config.output = {
    filename: "index.js",
    assetModuleFilename: "static/media/[hash][ext][query]",
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
    clean: true,
  };
  config.mode = mode;
  config.devtool = mode === "development" ? "inline-source-map" : false;
  config.devServer = {
    historyApiFallback: true,
    static: "./dist",
    port: 3500,
    headers: { "Access-Control-Allow-Origin": "*" },
  };
  config.watchOptions = {
    ignored: [path.resolve(__dirname, "src"), "./node_modules"],
  };
  return config;
};
