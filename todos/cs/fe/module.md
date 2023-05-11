## AMD CMD

- AMD - requireJS 
- CMD - seaJS(淘宝)

```javascript
// AMD
define(['package/lib'], function(lib){})
// CMD
define(function(require, define, module){})
```

## IIFE

```javascript
(function (root) {
    function func() {}

    root.APP.func = func
}(window))
```

## CommonJS

1. Pros NodeJS
2. Cons Browsers Synchronous

```javascript
// users.js

var users = ['Tyler', 'Sarah', 'Dan']

module.exports = {
    getUsers: function() {
        return users
    },
    sortUsers: function() {
        return users.sort()
    },
    firstUser: function() {
        return users[0]
    }
}
```

```javascript
var users = require('./users')

users.getUsers()
users.sortUsers()
users.firstUser()
```

## ES Modules

```javascript
// utils.js
function zero(){}
export function one(){}
export function two(){}
```

```javascript
import * as utils from './utils'
import { one } from './utils'

utils.one()
utils.two()
```