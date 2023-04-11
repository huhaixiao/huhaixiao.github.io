- `webpack`
- `webpack-cli`
- `webpack-dev-server`
- `webpack-merge`
- `babel-loader`
- `@babel/core`
- `@babel/cli`
- `@babel/preset-env`
- `@babel/preset-react`
- `@babel/preset-typescript`
- `css-loader`
- `style-loader`
- `less-loader`
- `esbuild-loader`
- `html-webpack-plugin`
- `copy-webpack-plugin`
- `mini-css-extract-plugin`
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

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin()
  ],
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
  },
  devServer: {
    port: 9000
  }
}

```

# Plugins

- html-webpack-plugin
- clean-webpack-plugin
- mini-css-extract-plugin
- webpack.DefinePlugin
- `html-webpack-plugin`
- `clean-webpack-plugin`
- `copy-webpack-plugin`
- `mini-css-extract-plugin`
- [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/)
    - copy静态资源用, `{ from: 'static', to: 'dist' }`
- [DefinePlugin](https://webpack.js.org/plugins/define-plugin/)
    - 定义编辑阶段的常量用

## [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)

- Since webpack v4, the CommonsChunkPlugin was removed in favor of optimization.splitChunks
- chunks (and modules imported inside them) were connected by a parent-child relationship in the internal webpack graph

```jsx
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all', // powerful
      name: '可以自定义chunk的名字'
    }
  }
}
```

# devServer

```jsx
// npm i -D webpack-dev-server
// npx webpack server --progress
module.exports = {
  devServer: {
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

[https://webpack.js.org/configuration/dev-server/](https://webpack.js.org/configuration/dev-server/)

```bash
npm install --save-dev webpack-dev-server
```

```bash
npm i -D webpack-dev-server
npx webpack server --progress
```

```jsx
module.exports = {
  devServer: {
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
  }}
```

## webpack-dev-server

```bash
npm i -D webpack-dev-server
```

```jsx
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    open: false  
	}
}
```

```jsx
import './index'// HMR
if(module.hot){
  module.hot.accept('./index.js')
}
```

## [HMR](https://webpack.js.org/concepts/hot-module-replacement/)

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

```jsx
if(module.hot) {  
	module.hot.accept('./fn.js', function() {    
		// ...  
	})
}
```

> webpack.dev.js
> 

```jsx
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

# [Code Splitting](https://webpack.js.org/guides/code-splitting/)

1. Entry Points
    1. If there are any duplicated modules between entry chunks they will be included in both bundles.
    2. It isn’t as flexible and can’t be used to dynamically split code with the core application logic.
2. Prevent Duplication
    1. Entry dependencies
    2. SplitChunksPlugin
3. Dynamic Imports
4. [React Code Splitting](https://reactjs.org/docs/code-splitting.html)
    1. `import()`
    2. `React.lazy()`
    3. `<Suspense fallback={element} />`

# [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)

- [static-module-structure](https://exploringjs.com/es6/ch_modules.html#static-module-structure)
    - can determine imports and exports at compile time(statically)
    - You can only import and export at the top level(never nested inside a conditional statement)
    - CommonJS is not static
    - Benefit: dead code elimination during bundling
    - Benefit: compact bundling, no custom bundle format
    - Benefit: faster lookup of imports
    - Benefit: variable checking
    - Benefit: ready for macros
        - you can add new syntax to it via a library
    - Benefit: ready for types
        - types can only be imported from modules if they have a static structure.
    - Benefit: supporting other languages