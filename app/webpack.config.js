const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const resolve = require("path").resolve;

module.exports = {
  entry: "./ts/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader"
    }, {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader"
    }, {
      test: /\.(pdf|jpg|png|gif|svg|ico)$/,
      loader: "url-loader"
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        API_URL: JSON.stringify(process.env.API_URL)
      }
    }),
    new HTMLWebpackPlugin({
      hash: true,
      filename: "index.html",
      template: resolve(__dirname, "./ts", "index.tpl.html")
    })
  ],
  devServer: {
    port: 3000
  }
}