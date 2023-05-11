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
var lowestCommonAncestor = function(root, p, q) {
  if(!root) return root
  var max = Math.max(p.val, q.val)
  var min = Math.min(p.val, q.val)
  if(root.val < min) return lowestCommonAncestor(root.right, p, q)
  if(root.val > max) return lowestCommonAncestor(root.left, p, q)
  return root
};