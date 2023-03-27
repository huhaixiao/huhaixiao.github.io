import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  cache: {
    type: "filesystem",
  },
};

export default config;
