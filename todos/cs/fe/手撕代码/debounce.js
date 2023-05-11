function debounce(fn, delay) {
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(fn.bind(this, ...arguments), delay)
  }
}