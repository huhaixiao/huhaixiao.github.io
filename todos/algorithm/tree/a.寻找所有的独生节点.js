// https://leetcode-cn.com/problems/find-all-the-lonely-nodes/

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
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
  var res = []

  function dfs(root) {
    if (!root) return
    if (root.left && root.right) {
      dfs(root.left)
      dfs(root.right)
    } else if (!root.left && root.right) {
      res.push(root.right.val)
      dfs(root.right)
    } else if (root.left && !root.right) {
      res.push(root.left.val)
      dfs(root.left)
    }
  }

  dfs(root)

  return res
};