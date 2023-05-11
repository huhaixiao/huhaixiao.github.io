// https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/

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
var getMinimumDifference = function (root) {
  var min = Infinity
  var pre = null

  function dfs(root) {
    if (!root) return
    dfs(root.left)
    if (pre) {
      min = Math.min(min, root.val - pre.val)
    }
    pre = root
    dfs(root.right)
  }

  dfs(root)

  return min
};