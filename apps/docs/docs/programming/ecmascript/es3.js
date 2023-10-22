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