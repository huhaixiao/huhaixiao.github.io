# modules

[https://webpack.js.org/concepts/modules/](https://webpack.js.org/concepts/modules/)

- [What is a webpack Module](https://webpack.js.org/concepts/modules/#what-is-a-webpack-module)
    - An [ES2015 import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statement
    - A [CommonJS](https://www.commonjs.org/specs/modules/1.0/) `require()` statement
    - An AMD
1. ES6
    1. static module
    2. code split
2. CommonJS
    1. dynamic module
    2. 修改exports的值会出bug

## `[import()](https://webpack.js.org/api/module-methods/#import-1)`

```
import('lodash').then( _ => {// ...})
```

## ES6

> Recommended
> 

```
// importimport MyModule from './my-module.js'import { NamedExport } from './other-module.js'// Named exportexport const Count = 5// Default exportexport default {  // Some data...}// Dynamic load modulesimport('lodash').then(_ => {})
```

## CommonJS

> NodeJS 标准
> 

```
const path = require('path')module.exports = {  getName: function() { return 'Sylar' }}
```

## AMD

> requireJS 标准
> 

```
define(['jquery', 'my-module'], function($, myModule){  return function doSomething() {  }})
```

## CMD

> SeaJS 标准, 淘宝的
>
