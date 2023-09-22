---
sidebar_position: 1
---

# Sort

- [912. 排序数组](https://leetcode.cn/problems/sort-an-array/)

```js
/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  bubbleSort(nums)
  return nums
};

function bubbleSort(nums) {
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1)
      }
    }
  }
}

function swap(nums, i, j) {
  if (i === j) return
  var temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
```
