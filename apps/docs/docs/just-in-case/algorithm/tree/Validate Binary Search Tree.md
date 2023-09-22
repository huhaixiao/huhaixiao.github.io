- 98. Validate Binary Search Tree
- 中序遍历递增就是合法二叉树

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

function isValidBST(root: TreeNode | null): boolean {
    var result = true
    var pre = null

    function dfs(root) {
        if (!root) return
        if (!result) return
        dfs(root.left)
        if (pre && pre.val >= root.val) {
            result = false
        }
        pre = root
        dfs(root.right)
    }

    dfs(root)

    return result
};
```