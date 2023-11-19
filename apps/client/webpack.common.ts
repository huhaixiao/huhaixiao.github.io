import * as webpack from "webpack";

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  cache: {
    type: "filesystem",
  },
  optimization: {
    usedExports: true,
  },
};

export default config;
