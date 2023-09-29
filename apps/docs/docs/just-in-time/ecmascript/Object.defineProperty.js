// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

const descriptor = {
  configurable: false,
  enumerable: false
}

const dataDescriptor = Object.assign(descriptor, {
  value: undefined,
  writable: false
})

let bValue = 'bValue'
const accessDescriptor = Object.assign(descriptor, {
  get function() {
    return bValue
  },
  set function(newValue) {
    bValue = newValue
  }
})