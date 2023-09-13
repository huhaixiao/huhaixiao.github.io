# Asynchronous

- [Asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

## [Timeouts and intervals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)

- `requestAnimationFrame(cb)`
    - 在下次repaint前调用cb
    - 在cb内条件调用下一个cb的`requestAnimationFrame(cb)`

```tsx
const timer1 = setTimeout(fn, delay, arg1, arg2)
clearTimeout(timer1)

const timer2 = setInterval(fn, limit, arg1, arg2)
clearTimeout(timer2)

requestAnimationFrame(callback)
```


## `window._queueMicrotask`

```tsx
window._queueMicrotask = function (fn) {
  Promise.resolve()
    .then(fn)
    .catch(err => setTimeout(() => { throw new Error(err) }))
}
```

## `makeCancelable`

```tsx
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

## Scheduler

```tsx
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

## 链式调用

```tsx
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

## setupPromise

```tsx
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

# [async wait](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

- Async functions always return a promise.
    - If the return value of an async function is not explicitly a promise,
    - it will be implicitly wrapped in a promise.
- Code after each `await` expression can be thought of as existing in a `.then` callback.
- `return await promiseValue` vs. `return promiseValue`
    - `return foo`immediately returns foo and never throws, even if foo is a Promise that rejects.
    - `return await foo` will wait for foo to resolve or reject if it's a Promise, and throws before returning if it rejects.

```tsx
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
