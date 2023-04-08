# `_new`

```tsx
function _new(fn, ...params) {
  const obj = {}
  Object.setPrototypeOf(obj, fn.prototype)
  const result = fn.apply(obj, ...params)

  return result instanceof Object ? result : obj
}
```

# `_instanceof`

```tsx
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

# `deepClone`

```tsx
function deepClone(obj, cache = new WeakMap) {
  if(typeof obj === 'string') return obj
  if(typeof obj === 'number') return obj
  if(typeof obj === 'boolean') return obj
  if(obj === null || obj === undefined) return obj
  if(cache.has(obj)) return cache.get(obj)

  if(Array.isArray(obj)) {
    const cloned = obj.map(item => deepClone(item))
    cache.set(obj, cloned)
    return cloned
  }
  if(obj.constructor === Object) {
    const cloned = {}
    cache.set(obj, cloned)
    for(const key in obj) {
      cloned[key] = deepClone(obj[key])
    }

    return cloned
  }

  console.warn('can not copy', obj)
}
```

# `curry`

```tsx
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

# `debounce`

```tsx
function debounce(fn, delay) {
  let timer = null

  function debounced() {
    debounced.cancel()
    timer = setTimeout(fn.bind(this, arguments), delay)
  }

  debounced.cancel = () => {
    clearTimeout(timer)
  }

  return debounced
}
```

# `throttle`

```tsx
function throttle(fn, limit) {
  let inThrottle = false
  let timer = null

  function throttled() {
    if (!inThrottle) {
      inThrottle = true
      fn.apply(this, arguments)
      timer = setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }

  throttled.cancel = function () {
    inThrottle = false
    clearTimeout(timer)
  }

  return throttled
}
```