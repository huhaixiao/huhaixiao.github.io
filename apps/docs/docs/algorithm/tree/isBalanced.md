```ts
/**
 * 实现一个函数，检查二叉树是否平衡。
 * 在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。
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
    function dfs(root) {
        if (!root) return 0
        var left = dfs(root.left)
        if (left === -1) return -1
        var right = dfs(root.right)
        if (right === -1) return -1

        if (Math.abs(left - right) <= 1) {
            return Math.max(left, right) + 1
        } else {
            return -1
        }
    }

    return dfs(root) !== -1
};
```
