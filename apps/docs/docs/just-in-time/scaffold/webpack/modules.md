# modules

- [Modules](https://webpack.js.org/concepts/modules/)

1. ES6
   1. static module
   2. code split
2. CommonJS
   1. dynamic module
   2. 修改exports的值会出bug
3. [`import()`](https://webpack.js.org/api/module-methods/#import-1)
4. 文件名称大写，引用小写，webpack会刷新失败，因为macOS case insensitive
- [What is a webpack Module](https://webpack.js.org/concepts/modules/#what-is-a-webpack-module)
  - An [ES2015 import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statement
  - A [CommonJS](https://www.commonjs.org/specs/modules/1.0/) `require()` statement
  - An AMD


```js
import('lodash')
.then( _ => {
// ...
})

// import
import MyModule from './my-module.js'
import { NamedExport } from './other-module.js'

// Named export
export const Count = 5

// Default export
export default {
  // Some data...
}

// Dynamic load modules
import('lodash').then(_ => {
  
})
```

## CommonJS
> NodeJS 标准

```javascript
const path = require('path')

module.exports = {
  getName: function() { return 'Sylar' }
}
```

## AMD
> requireJS 标准

```javascript
define(['jquery', 'my-module'], function($, myModule){
  return function doSomething() {

  }
})
```

## CMD
> SeaJS 标准, 淘宝的
