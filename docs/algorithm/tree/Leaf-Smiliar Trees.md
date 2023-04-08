- 872. Leaf-Similar Trees

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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const leafs1 = []
    const leafs2 = []

    function dfs(root, leafs) {
        if(!root) return
        if(!root.left && !root.right) {
            leafs.push(root.val)
        } else {
            dfs(root.left, leafs)
            dfs(root.right, leafs)
        }
    }

    dfs(root1, leafs1)
    dfs(root2, leafs2)

    return leafs1.join() === leafs2.join()
};
```