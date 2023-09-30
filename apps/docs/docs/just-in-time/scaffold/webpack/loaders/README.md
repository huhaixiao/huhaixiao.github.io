# Loaders

- [loader](https://webpack.js.org/loaders/)
- `esbuild-loader`
- loaders
  - Webpack only understands `javascript` and `JSON` files.
  - `module.rules`
  - `test` property identifies which file or files should be transformed.
  - `use` property indicates which loaders should be used to do the transforming.
  - Can be chained. Executed in reverse order. Javascript expected by the last loader.
  - Loaders can be configured with an `options` object.
  - Plugins can give loaders more features.
- `url-loader`
    - 返回一个dataURL
    - webpack v5+ 废弃
- `file-loader`
    - 返回一个url
    - webpack v5+ 废弃
- Webpack only understands `javascript` and `JSON` files.
- `module.rules`
- `test` property identifies which file or files should be transformed. 
- `use` property indicates which loaders should be used to do the transforming.
- Can be chained. Executed in reverse order. Javascript expected by the last loader.
- Loaders can be configured with an `options` object.
- Plugins can give loaders more features.

```js title="webpack.config.js"
module.exports = {
  module: {
    rules: [
      {
        test: /.(t|j)sx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg/i,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /.(jpe?g)$/,
        type: 'asset'
      }，
      {
        test: /\.css$/i,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            esModule: false
          }
        }],
      },
      {
        test: /\.less/i,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            // 不知道有什么用，true的话，less中的url会解析错误，可能是个bug
            esModule: false
          }
        }, {
          loader: 'less-loader',
          options: {
            lessOptions: {
              strictMath: true,
            },
          },
        },]
      },
    ]
  }
}
```
