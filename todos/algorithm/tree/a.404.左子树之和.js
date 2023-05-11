// https://leetcode-cn.com/problems/sum-of-left-leaves/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  var ret = 0

  function dfs(root, isLeft) {
    if (!root) return
    if (isLeft && !root.left && !root.right) return ret += root.val
    dfs(root.left, true)
    dfs(root.right, false)
  }

  dfs(root, false)

  return ret
};