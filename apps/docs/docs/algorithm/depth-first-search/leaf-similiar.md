- https://leetcode-cn.com/problems/leaf-similar-trees/

```ts
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  var leafs1 = []
  var leafs2 = []

  dfs(root1, leafs1)
  dfs(root2, leafs2)

  return leafs1.join() == leafs2.join()
};

function dfs(root, leafs) {
  if (!root) return
  if (!root.left && !root.right) {
    return leafs.push(root.val)
  }
  dfs(root.left, leafs)
  dfs(root.right, leafs)
}
```
