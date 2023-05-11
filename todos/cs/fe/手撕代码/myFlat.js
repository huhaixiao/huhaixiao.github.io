function myFlat(depth) {
  if (depth === 0) return this

  let result = []

  for (var i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      result = result.concat(myFlat.call(this[i], depth - 1))
    } else {
      result.push(this[i])
    }
  }

  return result
}

// Test
var data = [1,[[2],3], [4]]
myFlat.call(data, 2)