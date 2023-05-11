// https://leetcode-cn.com/problems/balanced-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true
  var lr = helper(root.left)
  if (lr === false) return false

  var rr = helper(root.right)
  if (rr === false) return false

  return Math.abs(lr - rr) <= 1
};

function helper(root) {
  if (!root) return 0

  var lr = helper(root.left)
  if (lr === false) return false

  var rr = helper(root.right)
  if (rr === false) return false

  if (Math.abs(lr - rr) > 1) return false

  return Math.max(lr, rr) + 1
}