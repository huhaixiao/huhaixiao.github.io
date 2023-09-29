# 工具

- idempotent - 幂等
- DRY
- [微前端](https://micro-frontends.org/)

# [Node.js](https://nodejs.org/api/)

## [Modules: CommonJS modules](https://nodejs.org/api/modules.html)

- keeps top-level variables scoped to the module rather than global.
- module scope: `require`, `module`, `exports`, `__filename`, `__dirname`

```js
// https://nodejs.org/api/modules.html#modules_the_module_wrapper
// module wrapper
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
// __filename, __dirname; module scope.
});

// hypothetical implementation of require()$$
function _require(str) {
  var module = { exports: {} }

    (function (module, exports) {
      // exports 默认为{}
      exports = {} // 不好使
      module.exports = exports = {} // 正确
    })(module, module.exports)

  return module.exports
}
```

## [path](https://nodejs.org/api/path.html)

- `path.join('path1', 'path2')` - join pathes togethor(过程量).
- `path.resolve(__dirname, '..')` - return an absolute path.

# [npm](https://www.npmjs.com/)

## package formats

- a) A folder described by a `package.json` file
- b) A gzipped tarball containing (a)
- c) A URL that resolves (b)
- d) A `<name>@<version>` that is published with (c)
- e) A `<name>@<tag>` that points to (d)
- f) A `<name>` that has a `latest` tag satisfying (e)
- g) A `git` url, when cloned, results in (a)

## `dependencies`

- `react`
- `react-dom`
- `recoil`
- `antd`
  - css需要单独引用或者babel配置
- `@ant-design/icons`

***

- `file-saver`
- `lottie-web`

## `devDependencies`

- `webpack`
- `webpack-cli`
- `webpack-dev-server`
- `webpack-merge`
- `html-webpack-plugin`
- `clean-webpack-plugin`
- `terser-webpack-plugin`
  - webpack v5 自带此插件
- `mini-css-extract-plugin`
  - plugin 与 loader 配合使用
- `style-loader`
- `css-loader`
- `sass-loader`
  - 依赖`sass`
- `babel-loader`
- `@babel/core`
- `@babel/cli`
- `@babel/preset-env`
- `@babel/preset-react`
- `@babel/preset-typescript`
- `@babel/preset-flow`

## [scoped](https://docs.npmjs.com/about-scopes)

- `@username/package-name`
- private packages scoped only

```
npm init --scope=@username
# 修改package.json的名字为@username/package-name

npm login
npm publich --access public
```

## semver

### incrementing semantic versions 

> x.y.z

1. z - Patch release - Backward compatible bug fixes
2. y - Minor release - Backward compatible new features
3. x - Major release - Changes that break backward compatibility

### specify update types your package can accept

- Patch releases: 1.0 or 1.0.x or ~1.0.4
- Minor releases: 1 or 1.x or ^1.0.4
- Major releases: * or x

## [docs](https://docs.npmjs.com/)

- `npm init -y` 创建默认的package.json
- `npm login` 本地登录npm账户
- `npm publish` 本地发包

## [yarn](https://yarnpkg.com/)

* ***yarn cache clean --all*** - remove both local and global caches for the current project.
* ***yarn install*** - install the project

# Chrome-devtools

- `⇧+⌘+p` - Run command

# [Charles](https://www.charlesproxy.com)

## Breakpoint Settings

`⇧+⌘+k`

## SSL Proxying Settings

# Coding

- https://blog.csdn.net/frontend_frank/article/details/103798108

## 设计模式

### 创建模式

#### 工厂方法模式
```js
function getProduct(params) {
  // ...
}
```

#### 单例模式
```ts
class Singleton {
  static getInstance() {
    return new Singleton('single')
  }
  private constructor(
    private name: string
  ) {
    this.name = name
  }
}
```

### 行为模式

#### 策略模式
```js
class Abs {
  constructor (imp) {
    this.imp = imp
  }
  setImp(imp) {
    this.imp = imp
  }
  action() {
    this.imp.action()
  }
}

const behavior = new Abs(new Imp)
behavior.setImp(new Imp2)
behavior.action()
```

# VSCode

- `⌘ + ,` 打开设置
- `⌘ + d` 下一个结果
- `⌘ + x` 剪切当前行
- `⌘ + ⌥ + [` 收起当前代码块
- `⌘ + ⌥ + ]` 打开当前代码块
- `⌘k + ⌘0` 收起全部代码块
- `⌘k + ⌘j` 打开全部代码块
- `⌘k + z` 切换zen模式
- `⌥ + ↑` 选中代码上移一行
- `⌥ + ↓` 选中代码下移一行
- `⇧ + ⌥ + ↑` 选中代码向上复制
- `⇧ + ⌥ + ↓` 选中代码向下复制

# Add-on

- [which-characters-need-to-be-escaped-in-html](https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-in-html)
- [javascript-asi](https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi)
- [XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting)
- [https://github.com/amandakelake/blog](https://github.com/amandakelake/blog)
