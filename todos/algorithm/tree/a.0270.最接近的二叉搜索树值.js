// https://leetcode-cn.com/problems/closest-binary-search-tree-value/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  var pre = Infinity

  function dfs(root) {
    if (!root) return
    if (Math.abs(target - root.val) < Math.abs(target - pre)) {
      pre = root.val
    }
    dfs(root.left)
    dfs(root.right)
  }

  dfs(root)

  return pre
};