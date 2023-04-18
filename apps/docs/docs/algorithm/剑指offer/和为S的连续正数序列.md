```ts
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) { // 滑动窗口
  var i = 1
  var j = 2
  var sum = 3
  var sequences = []
  while (i < Math.ceil(target / 2)) {
    if (sum < target) {
      sum += ++j
    } else if (sum > target) {
      sum -= i++
    } else {
      var sequence = []
      for (var start = i; start <= j; start++)
        sequence.push(start)
      sequences.push(sequence)
      sum -= i++
    }
  }

  return sequences
};
```
