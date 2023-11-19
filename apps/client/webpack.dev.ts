import * as path from "path";
import * as webpack from "webpack";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { merge } from "webpack-merge";
import Config from "./webpack.common";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = merge(Config, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.dev.ejs",
    }),
    new ReactRefreshPlugin({
      overlay: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: 'postcss-loader'
          }
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
