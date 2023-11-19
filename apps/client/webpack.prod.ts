import * as path from "path";
import * as webpack from "webpack";
import { merge } from "webpack-merge";
import CopyPlugin from "copy-webpack-plugin";
import Config from "./webpack.common";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = merge(Config, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.prod.ejs",
    }),
    new CopyPlugin({
      patterns: [
        // { from: "public", to: "" },
        { from: ".github", to: ".github" },
      ],
      options: {
        concurrency: 100,
      },
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[name].[chunkhash:8].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css/,
        // exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env"],
                ["@babel/preset-react"],
                ["@babel/preset-typescript"],
              ],
            },
          },
        ],
      },
    ],
  },
});

export default config;
