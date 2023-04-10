- ES7 Decorator
[tc39/proposal-decorators](https://github.com/tc39/proposal-decorators)

[JavaScript Decorators: What They Are and When to Use Them - SitePoint](https://www.sitepoint.com/javascript-decorators-what-they-are/)

[@babel/plugin-proposal-class-properties · Babel](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)

[@babel/plugin-proposal-decorators · Babel](https://babeljs.io/docs/en/babel-plugin-proposal-decorators)

- Class properties are not on the prototype
- Classes
- Class fields
- Class methods
- Class accessors

```jsx
import { throttle } from 'lodash'

function readonly(target, property, descriptor) {
  descriptor.writable = false
  return descriptor
}

function throttleDecorator(limit) {
  return function(target, property, descriptor) {
    const fn = descriptor.value
    descriptor.value = throttle(fn, limit).bind(this)
    return descriptor
  }
}

function memoize() {
  const cache = new Map()

  return function (target, key, descriptor) {
    const fn = descriptor.value
    descriptor.value = function (...args) {
      const cacheKey = args[0]
      if (cache.has(cacheKey)) {
        return cache.get(cacheKey)
      }
      const result = fn.apply(this, args)
      cache.set(cacheKey, result)

      return result
    }
    return descriptor
  }
}

function annotation(target) {
  // target is wrapped class
}

@annotation
class User {
  @readonly
  displayName = 'User'

  @throttleDecorator(3000)
  talk() {
    console.log(this.displayName)
  }

  @memoize()
  pureFn() {

  }
}
```

```jsx
function readonly(target, property, descriptor) {
  descriptor.writable = false
  return descriptor
}

function nonenumerable(target, property, descriptor) {
  descriptor.enumerable = false
  return descriptor
}

const memoize = (function () {
  const cache = new Map

  return function (target, property, descriptor) {
    const fn = descriptor.value

    descriptor.value = function (...args) {
      console.log({ args0: args[0] }, 'memoize.params')
      if (!cache.has(args[0])) {
        cache.set(args[0], fn.apply(this, args))
      }
      return cache.get(args[0])
    }

    return descriptor
  }
}())

const throttleDecorator = function (limit) {
  return function (target, property, descriptor) {
    const fn = descriptor.value
    descriptor.value = throttle(fn, limit)
    return descriptor
  }
}

const annotation = function (target) {
  target.annotationed = true
  return class extends target {
    constructor (name, age) {
      super(name, age)
      this.wtf = 'annotationed..'
    }
  }
}

@annotation
class User {
  @readonly
  gender = 'male'

  constructor (name, age) {
    this.name = name
    this.age = age
  }

  @throttleDecorator(10000)
  talk() {
    console.log('talking: 123' + this.name)
  }

  @nonenumerable
  get displayName() {
    return 'User'
  }

  @memoize
  add(a) {
    console.log(a, '...computing')
    return a * 2
  }
}
```