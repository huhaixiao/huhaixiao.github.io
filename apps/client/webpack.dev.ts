import * as path from "path";
import * as webpack from "webpack";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { merge } from "webpack-merge";
import Config from "./webpack.common";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";

const config: webpack.Configuration = merge(Config, {
  mode: "development",
  plugins: [
    new ReactRefreshPlugin({
      overlay: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["react-refresh/babel"],
            presets: [
              ["@babel/preset-env"],
              ["@babel/preset-react"],
              ["@babel/preset-typescript"],
            ],
          },
        },
      },
    ],
  },
  devServer: {
    hot: true,
    port: 8000,
    open: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    proxy: {},
  },
});

export default config;
