// https://leetcode-cn.com/problems/sum-of-root-to-leaf-binary-numbers/

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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  var binaries = []

  function dfs(root, acc) {
    if (!root) return
    var nextAcc = acc + root.val
    if (!root.left && !root.right) binaries.push(nextAcc)
    dfs(root.left, nextAcc)
    dfs(root.right, nextAcc)
  }

  dfs(root, '')

  var res = 0
  for (var i = 0; i < binaries.length; i++) {
    res += binaryToDecimal(binaries[i])
  }

  return res
};

function binaryToDecimal(binary) {
  var res = 0, i = binary.length

  while (i) {
    i--
    res += binary[i] * Math.pow(2, binary.length - i - 1)
  }

  return res
}