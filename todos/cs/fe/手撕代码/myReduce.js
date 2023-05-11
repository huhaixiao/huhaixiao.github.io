function myReduce(fn, initial) {
  var result = initial || this[0]
  var start = initial === 'undefined' ? 0 : 1

  for(var i=start;i<this.length;i++) {
    result = fn(result, this[i], i, this)
  }

  return result
}