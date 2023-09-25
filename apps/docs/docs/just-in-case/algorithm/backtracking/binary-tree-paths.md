# Binary Tree Paths

- https://leetcode.cn/problems/binary-tree-paths/

> Given the root of a binary tree,
> return all root-to-leaf paths in any order.
> A leaf is a node with no children.

```ts
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string [] = []
  const path: number[] = []

  backtrack(root, path, result);

  return result
};

function backtrack(root: TreeNode | null, path: number[], result: string[]) {
    if(!root) {
      return;
    }
    if(!root.left && !root.right) {
        path.push(root.val);
        result.push(path.join('->'));
        path.pop();
    }
    if(root.left) {
      path.push(root.val);
      backtrack(root.left, path, result);
      path.pop();
    }
    if(root.right) {
      path.push(root.val)
      backtrack(root.right, path, result);
      path.pop();
    }
}
```
