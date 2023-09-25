# Backtrack

## Combination Sum

- [Combination Sum](https://leetcode.cn/problems/combination-sum/)

```tsx
function combinationSum(candidates: number[], target: number): number[][] {
    const result = []
    backtrack(candidates, target, 0, 0, [], result)
    return result
};

function backtrack(candidates: number[], target: number, sum: number, depth: number, path: number[], result: number[][]) {
    if (sum === target) {
        result.push(path.slice(0))
        return
    }
    if (sum > target) return
    for (let i = depth; i < candidates.length; i++) {
        sum += candidates[i]
        path.push(candidates[i])
        backtrack(candidates, target, sum, i, path, result)
        sum -= candidates[i]
        path.pop()
    }
}
```
## Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

- 只要左括号比右括号少，且左右括号相等，那么始终是合法的
- 数括号的时候, 左括号肯定不小于右括号
- [20. Valid Parentheses](https://leetcode-cn.com/problems/valid-parentheses/)

```tsx
function generateParenthesis(n: number): string[] {
    const result = []
    const path = []
    backtrack(n, n, path, result)
    return result
};

function backtrack(left: number, right: number, path: string[], result: string[]) {
    if (left === 0 && right === 0) {
        return result.push(path.slice(0).join(''))
    }
    if (left > right) return
    if (left > 0) {
        path.push('(')
        backtrack(left - 1, right, path, result)
        path.pop()
    }
    if (right > 0) {
        path.push(')')
        backtrack(left, right - 1, path, result)
        path.pop()
    }
}
```

## Letter Combinations of a Phone Number

- [Letter Combinations of a Phone Number](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)

```tsx
const phone = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}

function letterCombinations(digits: string): string[] {
    const result = []
    if (digits === '') return result
    const path = []

    backtrack(digits, path, result)

    return result
};

function backtrack(digits: string, path: string[], result: string[]) {
    const depth = path.length
    if (depth === digits.length) {
        return result.push(path.slice(0).join(''))
    }
    const char = phone[digits[depth]]
    for (let i = 0; i < char.length; i++) {
        path.push(char[i])
        backtrack(digits, path, result)
        path.pop()
    }
}
```

## 51. N-Queens

- [51. N-Queens](https://cleetcode-cn.com/problems/n-queens/)
- [52. N-Queens II](https://leetcode-cn.com/problems/n-queens-ii/)
- [面试题 08.12. 八皇后](https://leetcode-cn.com/problems/eight-queens-lcci/)
- 
- 研究的是如何将 `n` 个皇后放置在 `n×n` 的棋盘上
- 必然每行有一个`Queen`
- `path[i] //Queen在i行的列下标`

```tsx
function solveNQueens(n: number): string[][] {
    const result: string[][] = []
    const depth: number = 0
    const path: Array<number> = [] // 同时也是 visitedColumns
    const visitedDiagonals1: Array<number> = []
    const visitedDiagonals2: Array<number> = []

    backtrack(result, depth, path, visitedDiagonals1, visitedDiagonals2, n)

    return result
};

function backtrack(result: string[][], depth: number, path: Array<number>, visitedDiagonals1: Array<number>, visitedDiagonals2: Array<number>, n: number) {
    if (depth === n) {
        result.push(generateQueens(path))
        return
    }
    // depth -> row, i -> col
    for (let i = 0; i < n; i++) {
        if (path.includes(i) || visitedDiagonals1.includes(i - depth) || visitedDiagonals2.includes(i + depth)) {
            continue
        }
        path.push(i)
        visitedDiagonals1.push(i - depth)
        visitedDiagonals2.push(i + depth)

        backtrack(result, depth + 1, path, visitedDiagonals1, visitedDiagonals2, n)

        path.pop()
        visitedDiagonals1.pop()
        visitedDiagonals2.pop()
    }
}

function generateQueens(path: Array<number>): string[] {
    const result = []

    for (let i = 0; i < path.length; i++) {
        let str = ''
        for (let j = 0; j < path.length; j++) {
            str += path[i] === j ? 'Q' : '.'
        }
        result.push(str)
    }

    return result
}
```

# TLE

```tsx
function solveNQueens(n: number): string[][] {
    const result: string[][] = []
    const path: string[][] = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'))
    const depth: number = 0
    const visitedRow: Set<number> = new Set
    const visitedCol: Set<number> = new Set
    const diagonal1: Set<number> = new Set
    const diagonal2: Set<number> = new Set

    backtrack(result, path, depth, visitedRow, visitedCol, diagonal1, diagonal2, n)

    return result
};

function backtrack(result: string[][], path: string[][], depth: number,  visitedRow: Set<number>, visitedCol: Set<number>, diagonal1: Set<number>, diagonal2: Set<number>, n: number) {
    if (depth === n) {
        result.push(cope(path))
        return
    }
    for (let i = depth; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if(visitedRow.has(i)) continue
            if(visitedCol.has(j)) continue
            if (diagonal1.has(i - j)) continue
            if (diagonal2.has(i + j)) continue

            path[i][j] = 'Q'
            visitedRow.add(i)
            visitedCol.add(j)
            diagonal1.add(i - j)
            diagonal2.add(i + j)

            backtrack(result, path, depth + 1, visitedRow, visitedCol, diagonal1, diagonal2, n)

            path[i][j] = '.'
            visitedRow.delete(i)
            visitedCol.delete(j)
            diagonal1.delete(i - j)
            diagonal2.delete(i + j)
        }
    }

}

function cope(path: string[][]): string[] {
    return path.map(p => p.join(''))
}
```

## Permutations II

```jsx
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    var result = []
    if (nums.length === 0) return result
    var path = []
    var isUsed = Array.from({ length: nums.length }, () => false)
    dfs(nums, path, isUsed, result)
    return result
};

function dfs(nums, path, isUsed, result) {
    if (path.length === nums.length) {
        return result.push(path.slice(0))
    }
    var cache = {}
    for (var i = 0; i < nums.length; i++) {
        if (isUsed[i] || cache[nums[i]]) {
            continue
        }
        cache[nums[i]] = true
        path.push(nums[i])
        isUsed[i] = true
        dfs(nums, path, isUsed, result)
        path.pop()
        isUsed[i] = false
    }
}
```

## Permutations

```tsx
function permute(nums: number[]): number[][] {
    const result = []
    if (nums.length === 0) return result
    const path = []
    const isUsed = Array.from({ length: nums.length }, () => false)

    dfs(nums, path, isUsed, result)

    return result
};

function dfs(nums: number[], path: number[], isUsed: boolean[], result: number[][]): void {
    if (path.length === nums.length) {
        result.push(path.slice(0))
        return
    }

    for (let i = 0; i < nums.length; i++) {
        if (isUsed[nums[i]]) {
            continue
        }
        path.push(nums[i])
        isUsed[nums[i]] = true
        dfs(nums, path, isUsed, result)
        path.pop()
        isUsed[nums[i]] = false
    }
}
```

## Unique Binary Search Trees II

# clever backtrack

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

function generateTrees(n: number): Array<TreeNode | null> {
    return generateTree(1, n)
};

function generateTree(start, end) {
    var result = []
    if (start > end) {
        result.push(null) // 不能忘记push null
        return result
    }

    for (var i = start; i <= end; i++) {
        var leftTrees = generateTree(start, i - 1)
        var rightTrees = generateTree(i + 1, end)

        for (var x = 0; x < leftTrees.length; x++) {
            for (var y = 0; y < rightTrees.length; y++) {
                var tree = new TreeNode(i)
                tree.left = leftTrees[x]
                tree.right = rightTrees[y]

                result.push(tree)
            }
        }
    }

    return result
}
```

# stupid backtrack

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

function generateTrees(n: number): Array<TreeNode | null> {
    var result = []
    var dummy = new TreeNode(0)
    var depth = 0
    var isUsed = Array.from({ length: n }, () => false)
    var cache = {}

    backtrack(n, dummy, depth, isUsed, cache, result)

    return result
};

function backtrack(n, dummy, depth, isUsed, cache, result) {
    if (depth === n) {
        var key = logBST(dummy)
        if (cache[key]) return
        cache[key] = true
        
        var copy = copyBST(dummy)
        return result.push(copy.right)
    }
    for (var i = 1; i <= n; i++) {
        if (isUsed[i]) {
            continue
        }
        isUsed[i] = true
        insertBST(dummy, i)
        backtrack(n, dummy, depth + 1, isUsed, cache, result)
        removeBST(dummy, i)
        isUsed[i] = false
    }
}

function copyBST(root: TreeNode) {
    if (!root) return root
    const copy = new TreeNode(root.val)
    copy.left = copyBST(root.left)
    copy.right = copyBST(root.right)

    return copy
}

function insertBST(root: TreeNode, val) {
    if (!root) return
    if (!root.left && !root.right) {
        var node = new TreeNode(val)
        if (val < root.val) {
            root.left = node
        } else {
            root.right = node
        }
        return
    }
    if (root.left && root.right) {
        if (val < root.val) {
            insertBST(root.left, val)
        } else {
            insertBST(root.right, val)
        }
        return
    }
    if (!root.left && val < root.val) {
        return root.left = new TreeNode(val)
    }
    if (!root.right && val > root.val) {
        return root.right = new TreeNode(val)
    }
    insertBST(root.left || root.right, val)
}

function removeBST(root: TreeNode, val) {
    if (!root) return
    if (root.val === val) return
    var lr = root.left
    var rr = root.right
    if (!lr && !rr) return
    if (lr && lr.val === val) {
        return root.left = null
    }
    if (rr && rr.val === val) {
        return root.right = null
    }
    if (val < root.val) {
        removeBST(lr, val)
    } else {
        removeBST(rr, val)
    }
}

function logBST(root: TreeNode) {
    var result = []
    if (!root) return ''
    var currentLevel = [root]
    var nextLevel = []

    while (currentLevel.length !== 0) {
        for (var i = 0; i < currentLevel.length; i++) {
            var current = currentLevel[i]
            if (current.left) {
                nextLevel.push(current.left)
            }
            if (current.right) {
                nextLevel.push(current.right)
            }
            result.push(current.val)
        }
        currentLevel = nextLevel
        nextLevel = []
    }

    return result.join('-')
}
```
