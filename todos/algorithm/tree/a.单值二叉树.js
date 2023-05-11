// https://leetcode-cn.com/problems/univalued-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) return true
  if (root.left && (root.left.val !== root.val)) return false
  if (root.right && (root.right.val !== root.val)) return false
  var lr = isUnivalTree(root.left)
  var rr = isUnivalTree(root.right)
  return lr && rr
};