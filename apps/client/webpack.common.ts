import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
// import { GenerateSW } from "workbox-webpack-plugin";

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
    }),
    new BundleAnalyzerPlugin(),
    // new GenerateSW({
    //   skipWaiting: true,
    //   clientsClaim: true,
    //   maximumFileSizeToCacheInBytes: 7000000
    // })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  cache: {
    type: "filesystem",
  },
  optimization: {
    usedExports: true
  }
};

export default config;
