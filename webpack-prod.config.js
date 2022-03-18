const commonConfig = require("./webpack-common.config");
const path = require("path");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const mapFileManifest = (file) => {
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

module.exports = function (env) {
  const config = commonConfig({ ...env, NODE_ENV: "production" });
  config.mode = "production";
  config.entry = {
    main: "./src/index.js",
  };

  config.output = {
    filename: "static/[name].[contenthash].js",
    assetModuleFilename: "static/media/[hash][ext][query]",
    path: path.resolve(__dirname, "build"),
    publicPath: "",
    clean: true,
  };

  config.plugins.push(
    new WebpackManifestPlugin({
      fileName: "asset-manifest.json",
      generate: serializeManifest,
    })
  );

  return config;
};
