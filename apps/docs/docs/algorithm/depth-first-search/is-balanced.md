- https://leetcode-cn.com/problems/check-balance-lcci/

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true
  return dfs(root)
};

function dfs(root) {
  if (!root) return 0
  var lr = dfs(root.left)
  if (lr === false) return false

  var rr = dfs(root.right)
  if (rr === false) return false

  if (Math.abs(lr - rr) > 1) return false

  return Math.max(lr, rr) + 1
}
```
