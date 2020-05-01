
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: 'source-map',
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devServer: {
      inline: true,
      contentBase: './public',
      port: 3000
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        loader: 'file-loader'
      },
      {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader'
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
  ]
  },
  plugins:[
      new HtmlWebPackPlugin({
          template: "./public/index.html",
          filename: "index.html"
      }),
  ]
  };
