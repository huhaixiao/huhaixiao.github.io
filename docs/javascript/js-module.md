- [https://betterprogramming.pub/what-are-cjs-amd-umd-esm-system-and-iife-3633a112db62](https://betterprogramming.pub/what-are-cjs-amd-umd-esm-system-and-iife-3633a112db62)

# Bundlers

- webpack
- rollup
- RequireJS
- snowpack
- Parcel
- [https://rollupjs.org/guide/en/#outputformat](https://rollupjs.org/guide/en/#outputformat)

# CommonJS(CJS)

- NodeJS
- CJS is synchronous and not natively recognized by browsers
- `module.exports =`
- `const foo = require('foo.js')`

```jsx
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Increase the current total value
 * @param {number} total The current total value
 * @param {number} value The new value to be added
 * @returns {number} The new total value
 */
const increase = (total, value) => total + value;

/**
 * Decrease the current total value
 * @param {number} total The current total value
 * @param {number} value The new value to be subtracted
 * @returns {number} The new total value
 */
const decrease = (total, value) => total - value;

var others = {
  a: 1,
  b: 2,
  c: () => 3,
};
const e = 5;

/**
 * This is the main file
 */

function multiply(total, value) {
  return total * value;
}

function power(total, value) {
  return total ** value;
}

let total = others.a;

total = increase(total, 10);
total = increase(total, 20);
total = decrease(total, 5);
total = multiply(total, e);

console.log(`Total is ${total}`);

exports.power = power;
```

# Asynchronous Module Definition (AMD)

- AMD was born out of CJS to support asynchronous module loading
- The main difference between AMD and CJS lies in its support for asynchronous module loading
- AMD is used by RequireJS, working on the browser side

> AMD provides some CJS interoperability. It allows the similar `exports` and `require()` interface in the code, although its own `define()` interface is more basal and preferred.
> 

```jsx
define(['exports'], function (exports) { 'use strict';

  /**
   * Increase the current total value
   * @param {number} total The current total value
   * @param {number} value The new value to be added
   * @returns {number} The new total value
   */
  const increase = (total, value) => total + value;

  /**
   * Decrease the current total value
   * @param {number} total The current total value
   * @param {number} value The new value to be subtracted
   * @returns {number} The new total value
   */
  const decrease = (total, value) => total - value;

  var others = {
    a: 1,
    b: 2,
    c: () => 3,
  };
  const e = 5;

  /**
   * This is the main file
   */
                                        
  function multiply(total, value) {
    return total * value;
  }

  function power(total, value) {
    return total ** value;
  }

  let total = others.a;

  total = increase(total, 10);
  total = increase(total, 20);
  total = decrease(total, 5);
  total = multiply(total, e);

  console.log(`Total is ${total}`);

  exports.power = power;

  Object.defineProperty(exports, '__esModule', { value: true });

});
```

# Universal Module Definition (UMD)

- Works as `amd`, `cjs`, and `iife` all in one.
- UMD is designed to work everywhere — on the server side and the browser side

```jsx
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.example = {}));
}(this, (function (exports) { 'use strict';

  /**
   * Increase the current total value
   * @param {number} total The current total value
   * @param {number} value The new value to be added
   * @returns {number} The new total value
   */
  const increase = (total, value) => total + value;

  /**
   * Decrease the current total value
   * @param {number} total The current total value
   * @param {number} value The new value to be subtracted
   * @returns {number} The new total value
   */
  const decrease = (total, value) => total - value;

  var others = {
    a: 1,
    b: 2,
    c: () => 3,
  };
  const e = 5;

  /**
   * This is the main file
   */
                             
  function multiply(total, value) {
    return total * value;
  }

  function power(total, value) {
    return total ** value;
  }

  let total = others.a;

  total = increase(total, 10);
  total = increase(total, 20);
  total = decrease(total, 5);
  total = multiply(total, e);

  console.log(`Total is ${total}`);

  exports.power = power;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
```

# ES2015 Module (ESM)

```jsx
/**
 * Increase the current total value
 * @param {number} total The current total value
 * @param {number} value The new value to be added
 * @returns {number} The new total value
 */
const increase = (total, value) => total + value;

/**
 * Decrease the current total value
 * @param {number} total The current total value
 * @param {number} value The new value to be subtracted
 * @returns {number} The new total value
 */
const decrease = (total, value) => total - value;

var others = {
  a: 1,
  b: 2,
  c: () => 3,
};
const e = 5;

/**
 * This is the main file
 */

function multiply(total, value) {
  return total * value;
}

function power(total, value) {
  return total ** value;
}

let total = others.a;

total = increase(total, 10);
total = increase(total, 20);
total = decrease(total, 5);
total = multiply(total, e);

console.log(`Total is ${total}`);

export { power };
```