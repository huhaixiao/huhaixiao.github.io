// https://leetcode-cn.com/problems/binary-tree-paths/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return []
  var ret = []

  function dfs(root, pre) {
    if (!root) return ''
    var next = pre + root.val
    if (!root.left && !root.right) ret.push(next)
    if (root.left) dfs(root.left, next + '->')
    if (root.right) dfs(root.right, next + '->')
  }

  dfs(root, '')

  return ret
};