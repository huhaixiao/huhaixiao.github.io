function flat() {
  const arr = [1, [2, [3, [4, 5]]], 6];

  arr.flat();
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      fn.apply(this, ...args)
    } else {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2])
      }
    }
  }
}

function loadScript(src) {
  return new Promise(resolve => {
    const scriptElement = document.createElement('script')
    scriptElement.src = src
    scriptElement.onload = resolve
    document.head.appendChild(scriptElement)
  })
}

const loadStyle = function (href) {
  return new Promise(resolve => {
    const linkElement = document.createElement('link')
    linkElement.rel = 'stylesheet'
    linkElement.href = href
    linkElement.onload = resolve
    document.head.appendChild(linkElement)
  })
}
