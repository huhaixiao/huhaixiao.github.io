- https://leetcode-cn.com/problems/binary-tree-paths/

```ts
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
  var res = []

  if (!root) return res

  var initial = '' + root.val

  if (root.left || root.right) {
    dfs(root.left, initial, res)
    dfs(root.right, initial, res)
  } else {
    res = [initial]
  }

  return res
};

function dfs(root, acc, arr) {
  if (!root) return
  var next = acc + '->' + root.val
  if (!root.left && !root.right) {
    return arr.push(next)
  }
  dfs(root.left, next, arr)
  dfs(root.right, next, arr)
}
```
