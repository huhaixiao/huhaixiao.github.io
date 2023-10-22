# Promise

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [掘金参考](https://juejin.cn/post/6844904100593664007#heading-2)
- [makeCancelable](https://github.com/facebook/react/issues/5465#issuecomment-157888325)
- `Promsie` and `MutationObserver` both use the microtask queue to run their callback.
- [Using_promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

## Chaining

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);
```

```js
// bad
doSomething()
  .then((url) => {
    // I forgot to return this
    fetch(url);
  })
  .then((result) => {
    // result is undefined, because nothing is returned from
    // the previous handler.
    // There's no way to know the return value of the fetch()
    // call anymore, or whether it succeeded at all.
  });
```

```js
// bad
const listOfIngredients = [];

doSomething()
  .then((url) => {
    // I forgot to return this
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // Always [], because the fetch request hasn't completed yet.
  });
```

```js
// good
const listOfIngredients = [];

doSomething()
  .then((url) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      }),
  )
  .then(() => {
    console.log(listOfIngredients);
  });

// OR

doSomething()
  .then((url) => fetch(url))
  .then((res) => res.json())
  .then((data) => {
    listOfIngredients.push(data);
  })
  .then(() => {
    console.log(listOfIngredients);
  });
```

## Chaining after a catch

```js
new Promise((resolve, reject) => {
  console.log("Initial");

  resolve();
})
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });
// Initial
// Do that
// Do this, no matter what happened before
```

## Common Mistakes

```js
// Bad example! Spot 3 mistakes!

doSomething()
  .then(function (result) {
    // Forgot to return promise from inner chain + unnecessary nesting
    doSomethingElse(result).then((newResult) => doThirdThing(newResult));
  })
  .then(() => doFourthThing());
// Forgot to terminate chain with a catch!
```

## Implement _Promise

### `_Promise`

```tsx
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

```tsx
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

```tsx
_Promise.prototype.catch = function (cb) {
  return this.then(null, cb)
}
```

### `_Promise.prototype.finally`

```tsx
_Promise.prototype.finally = function (cb) {
  return this.then(cb, cb)
}
```

### `_Promise.resolve`

```tsx
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

```tsx
_Promise.reject = function (reason) {
  return new _Promise((resolve, reject) => {
    reject(reason)
  })
}
```

### `_Promise.all`

```tsx
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

```tsx
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

```tsx
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
