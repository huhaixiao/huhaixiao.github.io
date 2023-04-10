- 110. Balanced Binary Tree

```tsx
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

function isBalanced(root: TreeNode | null): boolean | number {
    if (!root) return true

    let lr = isBalanced(root.left)
    if (lr === false) return false

    let rr = isBalanced(root.right)
    if (rr === false) return false

    if(lr === true) lr = 0
    if(rr === true) rr = 0

    if(Math.abs(lr - rr) > 1) return false

    return 1 + Math.max(lr, rr)
};
```