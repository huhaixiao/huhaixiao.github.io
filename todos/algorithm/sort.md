---
title: 排序
date: 2021-02-01 10:17:33
tags: algo
mathjax: true
---

# 基与比较的排序

## 选择

- 不稳定
- 时间复杂度 \\( O^2 \\)
- 空间复杂度 \\( 1 \\)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    selectionSort(nums)

    return nums
};

function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var min = i
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        swap(arr, i, min)
    }
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
```

## 插入

- 稳定
- 时间复杂度 \\( O^2 \\)
- 空间复杂度 \\( 1 \\)

```js
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var curr = arr[i]
        var j = i - 1

        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = curr
    }
}

```

## 堆排序

- 优先队列
- https://leetcode-cn.com/leetbook/detail/heap/
- 优先队列 `comparator`
- 堆是抽象
- 二叉堆是一种实现
- 堆 有两种类型：最大堆 和 最小堆
- 优先队列, 基与堆
- 完全二叉树
- 每一个节点的值都必须 **大于等于或者小于等于** 其孩子节点的值
- 可以在 \( O(logN) \) 的时间复杂度内向 堆 中插入元素
- 可以在 \( O(logN) \) 的时间复杂度内向 堆 中删除元素
- 可以在 \( O(1) \) 的时间复杂度内获取 堆 中的最大值或最小值
-  构建二叉堆
   -  所有非叶子节点依次"下沉"
   -  自低向上构建
-  根结点: 堆顶
-  二叉堆是顺序存储非链式存储
-  插入
   -  插入到完全二叉树的最后一个位置
   -  如果不符合堆性质则节点"上浮"
-  删除
   -  删除堆顶
   -  将完全二叉树的最后一个节点放在堆顶
   -  如果不符合性质则节点"下沉"

```js
class PriorityQueue {
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1
  }

  getRightChildIndex(parentIndex) {
    return this.getLeftChildIndex(parentIndex) + 1
  }

  shiftUp(childIndex) {
    const parentIndex = this.getParentIndex(childIndex)
    if (this.isSwap(this.data[parentIndex], this.data[childIndex])) {
      swap(this.data, parentIndex, childIndex)
      this.shiftUp(parentIndex)
    }
  }

  shiftDown(parentIndex) {
    const leftChildIndex = this.getLeftChildIndex(parentIndex)
    const rightChildIndex = this.getRightChildIndex(parentIndex)

    if (this.data[leftChildIndex] === undefined) return
    if (this.data[rightChildIndex] === undefined) {
      if (this.isSwap(this.data[parentIndex], this.data[leftChildIndex])) {
        swap(this.data, parentIndex, leftChildIndex)
      }
    } else {
      const priorityIndex = this.isSwap(this.data[leftChildIndex], this.data[rightChildIndex]) ? rightChildIndex : leftChildIndex
      if (this.isSwap(this.data[parentIndex], this.data[priorityIndex])) {
        swap(this.data, parentIndex, priorityIndex)
        this.shiftDown(priorityIndex)
      }
    }
  }

  isSwap(a, b) {
    // a - b <= 0 说明不用交换
    return this.comparator(a, b) > 0
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
    if (this.data.length !== 0) {
      this.data.unshift(this.data.pop())
      this.shiftDown(0)
    }
    return result
  }

  size() {
    return this.data.length
  }
}
```

## 快速排序
```js
// 经典快排
function quickSort(arr, start, end) {
    if (start >= end) return
    var mid = partition(arr, start, end)
    quickSort(arr, start, mid - 1)
    quickSort(arr, mid + 1, end)
}

function partition(arr, start, end) {
    var privot = arr[start]
    var left = start + 1
    var right = end

    while (left < right) {
        while (left < right && arr[left] < privot) left++
        if (left === right) break
        swap(arr, left, right)
        right--
    }

    if (arr[right] >= privot) {
        right--
    }

    swap(arr, start, right)

    return right
}

// 荷兰国旗启发下的快排
function quickSort(arr, start, end) {
    if (start >= end) return
    var result = partition(arr, start, end)
    quickSort(arr, start, result.left)
    quickSort(arr, result.right, end)
}

function partition(arr, start, end) {
    var left = start - 1
    var right = end + 1
    var index = start
    var current = arr[start]

    while (index < right) {
        if (arr[index] < current) {
            swap(arr, left + 1, index)
            left++
            index++
        } else if (arr[index] === current) {
            index++
        } else {
            swap(arr, index, right - 1)
            right--
        }
    }

    return {
        left,
        right
    }
}
```

## 归并排序
```js
function mergeSort(arr) {
  if (arr.length < 2) return arr
  var mid = Math.floor(arr.length / 2)
  var left = mergeSort(arr.slice(0, mid))
  var right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

function merge(arr1, arr2) {
  var result = []

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift())
    } else {
      result.push(arr2.shift())
    }
  }

  result = [...result, ...arr1, ...arr2]

  return result
}

```

## 希尔 TODO

# 非基于比较的排序

## 桶 TODO

有局限性

## 计数 TODO

有局限性

## 基数 TODO

有局限性

# Swap实现

```js
function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function swap(arr, i, j) {
  if(i === j) return
  arr[i] = arr[i] + arr[j]
  arr[j] = arr[i] - arr[j]
  arr[i] = arr[i] - arr[j]
}

function swap(arr, i, j) {
  if(i === j) return
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}
```
