// https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/

/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null

  var root = new TreeNode(preorder[0])
  var rootIndex = inorder.indexOf(preorder[0])
  var leftIn = inorder.slice(0, rootIndex)
  var rightIn = inorder.slice(rootIndex + 1)
  var leftPre = preorder.slice(1, rootIndex + 1)
  var rightPre = preorder.slice(rootIndex + 1)

  root.left = buildTree(leftPre, leftIn)
  root.right = buildTree(rightPre, rightIn)

  return root
};