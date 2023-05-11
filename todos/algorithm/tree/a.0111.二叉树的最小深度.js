// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

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
var minDepth = function (root) {
  if (!root) return 0

  var currentLevel = [root]
  var depth = 1

  while (currentLevel) {
    var nextLevel = []

    for (var i = 0; i < currentLevel.length; i++) {
      var current = currentLevel[i]
      var isHasLeft = current.left
      var isHasRight = current.right
      if (!isHasLeft && !isHasRight) {
        return depth
      }
      if (isHasLeft) nextLevel.push(current.left)
      if (isHasRight) nextLevel.push(current.right)
    }

    currentLevel = nextLevel
    depth++
  }
};