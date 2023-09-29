function throttle(fn, limit) {
  let isInThrottle
  return function () {
    if (isInThrottle) return
    isInThrottle = true
    fn.apply(this, arguments)
    setTimeout(() => isInThrottle = false, limit)
  }
}