# Plugins

- `html-webpack-plugin`
- `clean-webpack-plugin`
- `copy-webpack-plugin`
- `mini-css-extract-plugin`
- [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/)
  - copy静态资源用, `{ from: 'static', to: 'dist' }`
- [DefinePlugin](https://webpack.js.org/plugins/define-plugin/)
  - 定义编辑阶段的常量用

```js
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "source", to: "dest" },
        { from: "other", to: "public" },
      ],
    }),
    new webpack.DefinePlugin({
      PROD: true
    })
  ]
}
```

## [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)

- Since webpack v4, the CommonsChunkPlugin was removed in favor of optimization.splitChunks
- chunks (and modules imported inside them) were connected by a parent-child relationship in the internal webpack graph

```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all', // powerful
      name: '可以自定义chunk的名字'
    }
  }
}
```
