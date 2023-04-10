- 99. Recover Binary Search Tree
- 中序遍历`[1,2,3,4,5,6,7]`
- 两个节点交换时`[1,6,3,4,5,2,7] x=6, y=2`
- 一个节点交换时`[1,2,3,5,4,6,7] x=5, y=4`
- `nums[i]>nums[i+1]`
- `y=nums[i+1], x=nums[i]`

```jsx
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    var inorders = []

    function dfs(root) {
        if (!root) return
        dfs(root.left)
        inorders.push(root.val)
        dfs(root.right)
    }
    dfs(root)

    function findTwoSwapped(nums) {
        var x = -1, y = -1
        for (var i = 0; i < nums.length - 1; i++) {
            if (nums[i + 1] < nums[i]) {
                y = nums[i + 1]
                if (x === -1) {
                    x = nums[i]
                } else {
                    break
                }
            }
        }

        return [x, y]
    }
    const [x, y] = findTwoSwapped(inorders)

    function recover(root, count, x, y) {
        if (!root) return
        if (count === 0) return
        if (root.val === x) {
            root.val = y
            count--
        } else if (root.val === y) {
            root.val = x
            count--
        }
        recover(root.left, count, x, y)
        recover(root.right, count, x, y)
    }
    recover(root, 2, x, y)
};
```