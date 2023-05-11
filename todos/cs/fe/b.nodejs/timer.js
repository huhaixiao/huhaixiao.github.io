var fn = (function () {
  var i = 0
  var ret = function () {
    console.log(i++, arguments.callee, ret.caller)
  }

  return ret
})()

process.nextTick(fn) // first
setImmediate(fn) // second
setTimeout(fn, 0) // third

fn.call({})