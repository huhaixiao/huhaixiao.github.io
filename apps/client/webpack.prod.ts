import * as path from "path";
import * as webpack from "webpack";
import { merge } from "webpack-merge";
import Config from "./webpack.common";

const config: webpack.Configuration = merge(Config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[name].[chunkhash:8].js",
  },
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
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ["@babel/preset-env"],
                ["@babel/preset-react"],
                ["@babel/preset-typescript"]
              ]
            }
          }
        ]
      }
    ],
  },
});

export default config;
