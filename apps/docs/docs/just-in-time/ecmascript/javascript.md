---
title: JS
date: 2021-02-02 15:25:46
tags: fe
---

# [Asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

## [Timeouts and intervals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)

1. `setTimeout(fn, delay, arg1, arg2)`
2. `setInterval(fn, limit, arg1, arg2)`
3. `requestAnimationFrame(cb)`
   1. 在下次repaint前调用cb
   2. 在cb内条件调用下一个cb的`requestAnimationFrame(cb)`

```js
const timer1 = setTimeout(fn, delay, arg1, arg2)
clearTimeout(timer1)

const timer2 = setInterval(fn, limit, arg1, arg2)
clearTimeout(timer2)

requestAnimationFrame(callback)
```

## [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

- [掘金参考](https://juejin.cn/post/6844904100593664007#heading-2)
- [makeCancelable](https://github.com/facebook/react/issues/5465#issuecomment-157888325)
- `Promsie` and `MutationObserver` both use the microtask queue to run their callback.

### `_Promise`
```js
function _Promise(cb) {
  this.status = 'pending'
  this.data = null
  this.handler = {}

  const resolve = val => {
    if (this.status !== 'pending') return
    this.status = 'fulfilled'
    this.data = val
    queueMicrotask(() => {
      if (this.handler.onFulfilled) {
        this.handler.onFulfilled()
      }
    })
  }

  const reject = reason => {
    if (this.status !== 'pending') return
    this.status = 'rejected'
    this.data = reason
    queueMicrotask(() => {
      if (this.handler.onRejected) {
        this.handler.onRejected()
      }
    })
  }

  try {
    cb(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
```

### `_Promise.prototype.then`
```js
_Promise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw new Error(reason) }
  const self = this
  return new _Promise((resolve, reject) => {
    function handle(cb) {
      try {
        const ret = cb(self.data)
        if (ret instanceof _Promise) {
          ret.then(resolve, reject)
        } else {
          resolve(ret)
        }
      } catch (e) {
        reject(e)
      }
    }

    if (self.status === 'pending') {
      self.handler.onFulfilled = () => handle(onFulfilled)
      self.handler.onRejected = () => handle(onRejected)
    } else if (self.status === 'fulfilled') {
      queueMicrotask(() => {
        handle(onFulfilled)
      })
    } else if (self.status === 'rejected') {
      queueMicrotask(() => {
        handle(onRejected)
      })
    }
  })
}
```

### `_Promise.prototype.catch`
```js
_Promise.prototype.catch = function (cb) {
  return this.then(null, cb)
}
```

### `_Promise.prototype.finally`
```js
_Promise.prototype.finally = function (cb) {
  return this.then(cb, cb)
}
```

### `_Promise.resolve`

```js
_Promise.resolve = function (val) {
  return new _Promise((resolve, reject) => {
    if (val instanceof _Promise) {
      val.then(resolve, reject)
    } else {
      resolve(val)
    }
  })
}
```

### `_Promise.reject`

```js
_Promise.reject = function (reason) {
  return new _Promise((resolve, reject) => {
    reject(reason)
  })
}
```

### `_Promise.all`

```js
_Promise.all = function (promises) {
  const ret = []
  let total = 0

  return new _Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      _Promise
        .resolve(promise)
        .then(val => {
          ret[index] = val
          if (++total === promises.length) {
            resolve(ret)
          }
        })
        .catch(reject)
    })
  })
}
```

### `_Promise.race`

```js
_Promise.race = function (promises) {
  return new _Promise((resolve, reject) => {
    promises.forEach(promise => {
      _Promise
        .resolve(promise)
        .then(resolve)
        .catch(reject)
    })
  })
}
```

### `_Promise.any`

```js
_Promise.any = function (promises) {
  var ret = []
  var total = 0
  return new _Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      _Promise
        .resolve(promise)
        .then(resolve)
        .catch(reason => {
          total++
          ret[index] = reason
          if (total === promises.length) {
            reject(ret)
          }
        })
    })
  })
}
```

### `window.queueMicrotask`
```js
window.queueMicrotask = function (fn) {
  Promise.resolve()
    .then(fn)
    .catch(err => setTimeout(() => { throw new Error(err) }))
}
```

### [`makeCancelable`](https://github.com/facebook/react/issues/5465#issuecomment-157888325)
```js
const makeCancelable = (promise) => {
  let isCanceled = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => isCanceled ? reject({ isCanceled: true }) : resolve(val),
      error => isCanceled ? reject({ isCanceled: true }) : reject(error)
    );
  });
  return {
    promise: wrappedPromise,
    cancel() {
      isCanceled = true;
    },
  };
};
// Usage
const somePromise = new Promise(r => setTimeout(r, 1000));
const cancelable = makeCancelable(somePromise);
cancelable
  .promise
  .then(() => console.log('resolved'))
  .catch(({isCanceled, ...error}) => console.log('isCanceled', isCanceled));
cancelable.cancel();
```

### Scheduler
```js
class Scheduler {
  delayResolve(asyncFn) {
    return new Promise((resolve) => {
      this.executing++
      asyncFn().then(val => {
        resolve(val)
        this.executing--
        if (this.delay[0]) {
          this.delay.shift()()
        }
      })
    })
  }

  constructor (max) {
    this.max = max
    this.executing = 0
    this.delay = []
  }

  execute(asyncFn) {
    if (this.executing >= this.max) {
      return new Promise(resolve => {
        const delayPromise = new Promise((delayResolve) => {
          this.delay.push(delayResolve)
        })

        delayPromise.then(() => {
          this.delayResolve(asyncFn).then(resolve)
        })
      })
    }

    return this.delayResolve(asyncFn)
  }
}


const schedule = new Scheduler(3);//最多同一时间让它执行3个异步函数

const asyncFacotory = (n, time) => {
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n);
      }, time)
    })
  }
}

schedule.execute(asyncFacotory(1, 2000)).then((n) => { console.log(`异步任务:${n}`) });
schedule.execute(asyncFacotory(2, 2000)).then((n) => { console.log(`异步任务:${n}`) });
schedule.execute(asyncFacotory(3, 2000)).then((n) => { console.log(`异步任务:${n}`) });
schedule.execute(asyncFacotory(4, 2000)).then((n) => { console.log(`异步任务:${n}`) });
schedule.execute(asyncFacotory(5, 2000)).then((n) => { console.log(`异步任务:${n}`) });
schedule.execute(asyncFacotory(6, 2000)).then((n) => { console.log(`异步任务:${n}`) });
```

### 链式调用
```js

class Man {
  next() {
    if (this.queue[0]) {
      this.queue.shift()()
    }
  }

  constructor () {
    this.queue = []

    queueMicrotask(() => {
      this.next()
    })
  }

  eat() {
    this.queue.push(() => {
      console.log('eating')
      this.next()
    })

    return this
  }

  sleep() {
    this.queue.push(() => {
      console.log('sleep')
      setTimeout(() => {
        console.log('awake')
        this.next()
      }, 3000)
    })

    return this
  }

  sleepFirst() {
    this.queue.unshift(() => {
      console.log('sleepFirst')
      setTimeout(() => {
        console.log('sleep awake')
        this.next()
      }, 3000)
    })

    return this
  }
}

var man = new Man
man.eat().sleep().sleepFirst()
```

### `setupPromise`
```js
// 一个方法等待另一个方法执行完再执行
class A {
  constructor () {
    this.setupPromise = new Promise((resolve) => {
      // 将resolve方法暴露
      this.setupResolve = resolve
    })
    this.setup()
  }

  setup() {
    setTimeout(() => {
      this.setupResolve()
    }, 3000)
  }

  async display() {
    await this.setupPromise
    console.log('this is setup ready')
  }
}
```

## [async wait](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

1. Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.
2. Code after each await expression can be thought of as existing in a .then callback.
3. `return await promiseValue` vs. `return promiseValue`
   1. `return foo `immediately returns foo and never throws, even if foo is a Promise that rejects.
   2. `return await foo` will wait for foo to resolve or reject if it's a Promise, and throws before returning if it rejects.

```js
async function foo() {
   return 1
}
// ...is equivalent to:
function foo() {
   return Promise.resolve(1)
}

async function foo() {
   await 1
}
// ...is equivalent to:
function foo() {
   return Promise.resolve(1).then(() => undefined)
}

async function foo() {
   const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))
   const p2 = new Promise((_,reject) => setTimeout(() => reject('2'), 500))
   const results = [await p1, await p2] // Do not do this! Use Promise.all or Promise.allSettled instead.
}
foo().catch(() => {}) // Attempt to swallow all errors...
```

# [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

1. `get`
2. `set`
3. function 与 method区别
   1. A method is a function which is a property of an object.
   2. 方法有实例方法, 有静态方法
4. getter setter
5. rest parameters

```js
Function.prototype._bind = function (o, ...args) {
  o = isObject(o) ? o : window
  o.fn = this

  return function () {
    const result = o.fn(...args, ...arguments)
    delete o.fn

    return result
  }
}

function arrayDefaultParameter([item = 1, item2 = 2]) {}
function objectDefaultParameter({key1 = 1, key2 = 2}) {}
```

## API
```js
Function.prototype.arguments
Function.prototype.length
Function.prototype.apply(obj, [...args])
Function.prototype.bind(obj, ...args)
Function.prototype.call(obj, ...args)
```

## `arguments`

```js
const args = Array.prototype.slice.call(arguments)
const args = Array.from(arguments)
const args = [...args]
arguments.length // 参数的长度
```

## Arrow function

1. no `this` `super` `arguments`
2. 不建议用作方法
3. 没有`prototype`, `__proto__` 是 `native code`

## Default parameters

### Passing undefined vs. other falsy values
```js
function test(num = 1) {
  console.log(typeof num)
}

test()           // 'number' (num is set to 1)
test(undefined)  // 'number' (num is set to 1 too)
```

### Evaluated at call time
```js
function callSomething(thing = something()) {
  return thing
}

let numberOfTimesCalled = 0
function something() {
  numberOfTimesCalled += 1
  return numberOfTimesCalled
}

callSomething()  // 1
callSomething()  // 2
```

### Earlier parameters are available to later default parameters
```js
function greet(name, greeting, message = greeting + ' ' + name) {
  return [name, greeting, message]
}

greet('David', 'Hi')                     // ["David", "Hi", "Hi David"]
greet('David', 'Hi', 'Happy Birthday!')  // ["David", "Hi", "Happy Birthday!"]
```

### Scope Effects
```js
function f(a = go()) { // Throws a `ReferenceError` when `f` is invoked.
  function go() { return ':P' }
}

function f(a, b = () => console.log(a)) {
  var a = 1
  b() // Prints `undefined`, because default parameter values exist in their own scope
}
```

### Parameters without defaults after default parameters
```js
function f(x = 1, y) {
  return [x, y]
}

f()   // [1, undefined]
f(2)  // [2, undefined]
```

### Destructured parameter with default value assignment
```js
function fn({a = 'a', b = 'b' }, c){
  console.log(a, b, c)
}
fn({b: 'bb'}, 'c') // a bb c

function fn([a = 1, b = 2], c) {
  console.log(a, b, c)
}
fn([undefined, 22], 3) // 1 22
```

## getter

### lazy getters
```js
const obj = {
  get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById('bookmarked-notification-anchor');
},
}
```

## setter
```js

```

# WTF

- [http://javascript-puzzlers.herokuapp.com](http://javascript-puzzlers.herokuapp.com)

## [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

1. abstract equality `==`
2. strict equality `===`
3. SameValueZero `0` `-0`, `Map` `Set` `Array.prototype.includes`
4. SameValue `Object.is(a, b)`

## `typeof null`

```js
// This stands since the beginning of JavaScript
typeof null === 'object';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#errors
```

## [`Object.assign(target, source)`]

- [Properties on the prototype chain and non-enumerable properties cannot be copied](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#properties_on_the_prototype_chain_and_non-enumerable_properties_cannot_be_copied)
- [`completeAssign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#copying_accessors)

```js
Object.assign(target, source)
```

# [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

- [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  - [Array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring)
    - Basic variable assignment
    - Assignment separate from declaration
    - Default values
    - Swapping variables
      - XOR
    - Parsing an array returned from a function
    - Ignoring some returned values
    - Assigning the rest of an array to a variable
    - Unpacking values from a regular expression match
  - [Object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring)
    - Basic assignment
    - Assignment without declaration
    - Assigning to new variable names
    - Default values
    - Assigning to new variables names and providing default values
    - Unpacking fields from objects passed as a function parameter
    - Setting a function parameter's default value
    - Nested object and array destructuring
    - For of iteration and destructuring
    - Computed object property names and destructuring
    - Rest in Object Destructuring
    - Invalid JavaScript identifier as a property name
    - Combined Array and Object Destructuring
    - The prototype chain is looked up when the object is deconstructed



# [Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

## [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

1. 

- [TDZ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)
  - The TDZ and `typeof`

# [Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

1. 函数内可以拿到函数外的引用
2. 创建函数的时候就会创建闭包
3. 可以模拟私有变量
4. 循环内的闭包为常见bug

# Keyed collections

## [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

1. 键值对
2. 记住顺序
3. 可以用`for ... of`迭代
4. 可以通过维护两个数组来实现Map

```js
const myMap = new Map
myMap.get(myMap)
myMap.set(myMap, myMap)
myMap.has(myMap)
myMap.delete(myMap)
myMap.clear()
myMap.size
```

## [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

1. 不允许重复

```js
function removeDuplicates(arr) {
  return Array.from(new Set(arr))
}
const mySet = new Set
mySet.add(1)
mySet.delete(1)
mySet.has(1)
mySet.clear()
mySet.size
```

## [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

1. 弱引用
2. key只能为引用
3. 可存储临时数据用

```js
window.temp = {}
const wm = new WeakMap
wm.get(temp)
wm.set(temp, 'temp')
wm.delete(temp)
wm.has(temp)
delete window.temp // 之后wm就get不到了
```

## [WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

1. 弱引用
2. 只能存引用类型
3. 可检查循环引用

```js
const foo = {}
const ws = new Weakset
ws.add(foo)
ws.has(foo)
ws.delete(foo)
```

# Coding

- [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide#lodashfp)
- [https://github.com/getify/Functional-Light-JS](https://github.com/getify/Functional-Light-JS)
- https://juejin.cn/collection/6908638952870117389

## _new
```js
function _new(fn, ...args) {
  const obj = {}
  obj.__proto__ = fn.prototype
  var ret = fn.apply(obj, args)

  return ret instanceof Object ? ret : obj
}
```

## `_instanceof`
```js
function _instanceof(L, R) {
  var proto = L.__proto__
  var { prototype } = R

  while (proto) {
    if (proto === prototype) return true
    proto = proto.__proto__
  }

  return false
}
```

## Array.prototype._splice(start, deleteCount, ...items)
```js
Array.prototype._splice = function (start, deleteCount, ...items) {
  if (deleteCount + start > this.length) {
    deleteCount = this.length - start
  }

  const result = []

  // 拿到return value
  for (let i = start; i < start + deleteCount; i++) {
    result.push(this[i])
  }

  // 删除
  for (let i = start; i < start + deleteCount; i++) {
    this[i] = this[i + deleteCount]
  }
  this.length = this.length - deleteCount

  // 数组变长
  this.length += items.length
  for (let i = this.length - 1; i > this.length - 1 - items.length; i--) {
    this[i] = this[i - items.length]
  }

  // 加入新元素
  for (let i = start; i < start + items.length; i++) {
    this[i] = items[i - start]
  }

  return result
}

```

## _Map
```js
class _Map {
  constructor () {
    this.keys = []
    this.values = []
  }
  get(key) {
    const index = this.keys.indexOf(key)
    if (index === -1) return
    return this.values[index]
  }
  set(key, value) {
    const index = this.keys.indexOf(key)
    if (index === -1) {
      this.keys.push(key)
      this.values.push(value)
    } else {
      this.values[index] = value
    }
  }
  has(key) {
    return this.keys.indexOf(key) !== -1
  }
  delete(key) {
    const index = this.keys.indexOf(key)
    if (index === -1) return false
    this.keys.splice(index, 1)
    this.values.splice(index, 1)
    return true
  }
  clear() {
    this.keys.length = 0
    this.values.length = 0
  }
}
```

## Cache
```js
class Cache {
  constructor () {
    this.map = new Map
  }
  add(key, value) {
    this.map.
  }
  find(key) {
    if (key === null || typeof key !== 'object') return null
    return this.wm.get(key)
  }
}
```

## memoize
```js
function memoize(fn) {
  const cache = new Cache()
  return function(arg) {
    if(cache.get(arg)) {
      return cache.get(arg)
    }
    const result = fn.call(this, arg)
    cache.set(arg, result)
    return result
  }
}
```

## [curry](https://javascript.info/currying-partials)
```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2])
      }
    }
  }
}
```

## cloneDeep
```js
// 深克隆的时候检查循环引用
// Cache可以用WeakMap或数组实现
function deepClone(obj, cache = new WeakMap) {
  if (obj === null || typeof obj !== 'object') return obj

  if (cache.get(obj)) return cache.get(obj)

  if (isArray(obj)) {
    const result = []
    cache.set(obj, result)
    obj.forEach(item => {
      result.push(deepClone(item, cache))
    })
    return result
  }
  if (isObject(obj)) {
    const result = {}
    cache.set(obj, result)
    Object.keys(obj).map(key => {
      result[key] = deepClone(obj[key], cache)
    })
    return result
  }
  throw new Error('无法复制', obj)
}

```

## debounce

- `debounced.cancel()` 可以在 `componentWillUnmount()` 中使用

```js
function debounce(fn, delay) {
  var timer = null

  const debounced = function () {
    debounced.cancel()
    const bound = fn.bind(this, ...arguments)
    timer = setTimeout(bound, delay)
  }

  debounced.cancel = function () {
    clearTimeout(timer)
  }

  return debounced
}
```

## throttle
```js
function throttle(fn, limit) {
  var inThrottle = false

  return function () {
    if (!inThrottle) {
      inThrottle = true
      fn.apply(this, arguments)
      setTimeout(() => inThrottle = false, limit)
    }
  }
}
```

# Web API

## execCommand

- 过期

## Web Storage API

- `sessionStorage`
  - Stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
  - Data is never transferred to the server.
  - Storage limit is larger than a cookie (at most 5MB).
- `localStorage`
  - Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data.
  - Storage limit is the maximum amongst the three.

```js
Storage.key(n)
Storage.setItem(keyName, keyValue)
Storage.getItem(keyName)
Storage.removeItem(keyName)
Storage.clear()
```

## namespace

1. 因为html有很多版本, 可用的标签和属性不同, html元素的namespace需要被声明
2. svg有声明
3. mathml有声明

```js
var ns = 'http://www.w3.org/1998/Math/MathML'
ns = 'http://www.w3.org/1999/xhtml'
ns = 'http://www.w3.org/2000/svg'

var element = document.createElementNS(ns, qualifiedName);
$0.lookupNamespaceURI(null)
$0.isDefaultNamespace()
```

## Node
```js
$0.childNodes
$0.isConnected
$0.nextSibling
$0.previousSibling
$0.nodeName
$0.parentNode
$0.textContent
$0.appendChild($1)
$0.prependChild($1)
$0.inertBefore(newNode, referenceNode)
$0.cloneNode($1)
$0.contains($1)
$0.isSameNode($1)
$0.isEqualNode($1)
$0.removeChild(child)
$0.replaceChild(newChild, oldChild)
```
