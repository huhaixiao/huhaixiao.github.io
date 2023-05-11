// https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root) return []

  var result = []
  var currentLevel = [root]

  while(currentLevel.length) {
      result.unshift([])
      var nextLevel = []

      for(var i=0;i<currentLevel.length;i++) {
          result[0].push(currentLevel[i].val)
          if(currentLevel[i].left){
              nextLevel.push(currentLevel[i].left)
          }
          if(currentLevel[i].right){
              nextLevel.push(currentLevel[i].right)
          }
      }

      currentLevel = nextLevel
  }

  return result
};