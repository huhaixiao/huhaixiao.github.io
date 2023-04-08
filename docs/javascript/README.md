# Decorator

```js
function annotation(target) {
    return target
  }
  
  function memoize() {
    return function (target, key, descriptor) {
      return descriptor
    }
  }
  
  function throttle(limit) {
    let inThrottle = false
    return function (target, key, descriptor) {
      const fn = descriptor.value
      descriptor.value = function () {
        return fn.apply(this, arguments)
      }
      return descriptor
    }
  }
  
  function readonly(target, key, descriptor) {
    descriptor.writable = false
    return descriptor
  }
  
  @annotation
  class User {
    @readonly
    displayName = 'User'
  
    @throttle(3000)
    talk() {
      console.log(this.displayName)
    }
  
    @memoize()
    upper(str) {
      console.log(str, '...user.upper.inner')
      return str.toUpperCase()
    }
  }
  
  var user = new User
  
  console.log(Object.getPrototypeOf(user).displayName)
  
  for (var i = 0; i < 10; i++) {
    user.talk()
  }
  
  console.log(user.upper('a'), '...upper')
  console.log(user.upper('a'), '...upper')
```