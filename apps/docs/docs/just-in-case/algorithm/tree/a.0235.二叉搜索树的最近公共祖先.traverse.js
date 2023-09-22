// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  var max = Math.max(p.val, q.val)
  var min = Math.min(p.val, q.val)
  while (root) {
    if (root.val < min) {
      root = root.right
    } else if (root.val > max) {
      root = root.left
    } else {
      return root
    }
  }
};