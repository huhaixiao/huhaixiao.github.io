# Utils

```ts
/**
 * 不借助其他变量交换两个数字
 * @param {number} x 
 * @param {number} y 
 */
function swapNumber(x, y) {
  x = x ^ y
  y = x ^ y
  x = x ^ y
}

/**
 * 
 * @param {function} fn 
 * @param {number} limit 
 */
function throttle(fn, limit) {
  var inThrottle = false

  return function() {
    if (!inThrottle) {
      inThrottle = true
      fn.apply(this, arguments)
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

function debounce(fn, delay) {
  var timer = null

  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, arguments), delay)
  }
}

function myReduce(fn, initial) {
  var result = initial || this[0]
  var start = initial === 'undefined' ? 0 : 1

  for(var i=start;i<this.length;i++) {
    result = fn(result, this[i], i, this)
  }

  return result
}

const PubSub = {
  id: 1,
  messages: {},
  subscribe(msg, func) {
    this.messages[msg] = this.messages[msg] || {}
    const token = this.id++
    this.messages[msg][token] = func

    return token
  },
  unsubscribe(token) {
    for (const msg in this.messages) {
      delete this.messages[msg][token]
    }
  },
  subscribeOnce(msg, func) {
    const self = this
    const token = this.subscribe(msg, function () {
      self.unsubscribe(token)
      func.apply(this, arguments)
    })
  },
  publish(msg, ...data) {
    if (!this.messages[msg]) return
    for (const message in this.messages) {
      for (const token in this.messages[message]) {
        this.messages[message][token](...data)
      }
    }
  }
}
```
