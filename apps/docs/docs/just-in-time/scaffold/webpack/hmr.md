# HMR

- https://webpack.js.org/concepts/hot-module-replacement/
- https://webpack.js.org/api/hot-module-replacement/

1. HMR 只会影响包含了 HMR 代码的 module
2. 如果一个 module 没有 HMR handler, 会冒泡上去
3. compiler产生新的manifest和chunk
4. server与client通过socket通信
5. 实时请求并对比区别执行accept方法

- `new webpack.HotModuleReplacementPlugin()`
- `devServer.hot = true`
- 样式HMR需要`style-loader`, `mini-css-extract-plugin`不可以
- React HRM
  - `react-hot-loader`被`react-refresh`取代
  - `@pmmmwh/react-refresh-webpack-plugin`
  - 配置babel的时候dev与prod的要区分

```js
if(module.hot) {
  module.hot.accept('./fn.js', function() {
    // ...
  })
}
```

```js title="webpack.dev.js"
module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    hotOnly: true // 如果HMR失败, 不刷新浏览器
  }
}
```
