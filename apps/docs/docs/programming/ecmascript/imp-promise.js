// https://www.promisejs.org/implementing/

var PENDING = 0
var FULFILLED = 1
var REJECTED = 2

function Promise(fn) {
  var state = PENDING
  var value = null
  var handlers = []

  function fulfill(result) {
    state = FULFILLED
    value = result
  }

  function reject(error) {
    state = REJECTED
    value = error
  }

  function resolve(result) {
    try {
      var then = getThen(result)
      if (then) {
        doResolve(then.bind(result), resolve, reject)
        return
      }
      fulfill(result)
    } catch (e) {
      reject(e)
    }
  }

  doResolve(fn, resolve, reject)
}

function getThen(value) {
  var t = typeof value
  if (value && (t === 'object' || t === 'function')) {
    var then = t.then
    if (typeof then === 'function') {
      return then
    }
  }

  return null
}

function doResolve(fn, onFulfilled, onRejected) {
  var done = false
  try {
    fn(function (value) {
      if (done) return
      done = true
      onFulfilled(value)
    }, function (reason) {
      if (done) return
      done = true
      onRejected(reason)
    })
  } catch (e) {
    if (done) return
    done = true
    onRejected(e)
  }
}