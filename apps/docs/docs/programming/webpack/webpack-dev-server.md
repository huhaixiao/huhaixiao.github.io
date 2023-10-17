# Webpack Dev Server

- https://webpack.js.org/configuration/dev-server/

```shell
npm i -D webpack-dev-server
npx webpack server --progress
```

```js title="webpack.dev.js"
module.exports = {
  devServer: {
    port: 9000,
    open: false，
    // 127.0.0.1 可以访问
    // 本机ip可以访问
    // 其他设备通过ip可以访问
    // 其他设备配置host可以访问
    host: '0.0.0.0',
    // 静态资源文件夹
    contentBase: path.resolve(__dirname, 'public'),
    // 打包后的资源路径
    publicPath: '/',
    // 代理
    proxy: {
      '/api': 'http://localhost:3000',
    },
    // 解决用本地host域名访问报错Invalid Host header 
    disableHostCheck: true,
  }
}
```
