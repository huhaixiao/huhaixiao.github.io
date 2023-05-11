```js
class PriorityQueue {
  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  getLeftChildIndex(index) {
    return index * 2 + 1
  }

  getRightChildIndex(index) {
    return this.getLeftChildIndex(index) + 1
  }

  isSwap(pre, next) {
    if (pre < 0 || next >= this.data.length) return false
    return this.comparator(this.data[pre], this.data[next])
  }

  swap(i, j) {
    var temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  shiftUp(index) {
    const parentIndex = this.getParentIndex(index)
    if (this.isSwap(parentIndex, index)) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }

  shiftDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index)
    const rightChildIndex = this.getRightChildIndex(index)
    const priorityIndex = this.isSwap(leftChildIndex, rightChildIndex) ? rightChildIndex : leftChildIndex
    if (this.isSwap(index, priorityIndex)) {
      this.swap(index, priorityIndex)
      this.shiftDown(priorityIndex)
    }
  }

  constructor (comparator) {
    this.data = []
    this.comparator = comparator
  }

  add(item) {
    this.data.push(item)
    this.shiftUp(this.data.length - 1)
  }

  poll() {
    const result = this.data.shift()

    if (this.data.length > 1) {
      const tail = this.data.pop()
      this.data.unshift(tail)
      this.shiftDown(0)
    }

    return result
  }

  size() {
    return this.data.length
  }
}
```