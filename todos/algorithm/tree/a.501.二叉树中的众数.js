// https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  var cache = {}
  var max = 0

  function dfs(root) {
    if (!root) return
    dfs(root.left)
    if (!cache[root.val]) {
      cache[root.val] = 1
    } else {
      cache[root.val]++
    }
    max = Math.max(cache[root.val], max)
    dfs(root.right)
  }

  dfs(root)

  // 统计
  var ret = []

  for (var key in cache) {
    if (cache[key] === max) {
      ret.push(key)
    }
  }

  return ret
};