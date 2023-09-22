# TODO

一般分为
1. 线性动规
2. 区域动规
3. 树形动规
4. 背包动规

## Basic

- MinAbsSum
- Easy
- Knapsack Problem
- 区间dp
- 状态压缩
- 状态转移方程
1. 63.不同路径 II
2. 64.最小路径和
3. 338.比特位计数
4. [139. 单词拆分](https://leetcode-cn.com/problems/word-break/)
5. 300. 最长递增子序列
6. [790. 多米诺和托米诺平铺](https://leetcode-cn.com/problems/domino-and-tromino-tiling/)
7. [801. 使序列递增的最小交换次数](https://leetcode-cn.com/problems/minimum-swaps-to-make-sequences-increasing/)
8. 1641
9. [1240. 铺瓷砖](https://leetcode-cn.com/problems/tiling-a-rectangle-with-the-fewest-squares/)
10. 337. 打家劫舍 III
11. 978. 最长湍流子数组
12. 面试题 17.16. 按摩师
- 斐波那契数
- 一些硬币，如果用最少获得27分
- 一个字符串拿一些出来，能拼成“动态规划”的可能性有多少
- [freeCodeCamp.org](http://freecodecamp.org) DynamicProgramming
- [Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges](https://www.youtube.com/watch?v=oBt53YbR9Kk&ab_channel=freeCodeCamp.org)

### canSum

```jsx
function canSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true
  if (targetSum < 0) return false

  for (const num of numbers) {
    const remainder = targetSum - num
    if (canSum(remainder, numbers, memo)) {
      memo[targetSum] = true
      return true
    }
  }

  memo[targetSum] = false
  return false
}
```

### howSum

```jsx
function howSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (const num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, numbers, memo)
    if (remainderResult !== null) {
      memo[targetSum] = [num, ...remainderResult]
      return memo[targetSum]
    }
  }

  memo[targetSum] = null
  return null
}

console.log(howSum(12000, [21, 7, 5, 2]))
```

### bestSum

```jsx
function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for (const num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = bestSum(remainder, numbers, memo)
    if (remainderCombination !== null) {
      const combination = [num, ...remainderCombination]

      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination
      }
    }
  }

  return memo[targetSum] = shortestCombination
}

console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(8, [2, 3, 5]))
console.log(bestSum(8, [1, 4, 5]))
console.log(bestSum(100, [1, 2, 5, 25]))
```

### canConstruct

```jsx
function canConstruct(target, wordBank, memo) {
	if (target in memo) return memo[target]
  if (target === '') return true

  for (const word of wordBank) {
    if (target.startsWith(word) && canConstruct(target.substring(word.length), wordBank)) {
			memo[target] = true
      return true
    }
  }

	memo[target] = false
  return false
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
```

### countConstruct

```jsx

```

[力扣 动态规划精讲](https://leetcode-cn.com/leetbook/detail/dynamic-programming-1-plus/)
[力扣 动态规划精讲2](https://leetcode-cn.com/leetbook/detail/dynamic-programming-2-plus/)

- 与分治算法和贪心算法的区别？

### 线性动态规划

- 状态的推导是按照问题规模$i$ 从小打大依次推过去
- 较大规模的问题的解依赖较小规模的问题的解
- 状态定义$dp[n]=[0..n]$上问题的解
- 状态转移$dp[n]=f(dp[n-1],...,dp[0])$
- 解决单串、双串、矩阵问题
- 70.爬楼梯
- 300.最长递增子序列
- 790.多米诺和托米诺平铺
- 801.使序列递增的最小交换次数

## Climbing Stairs

- LeetCode 70
- 先爬一个台阶还剩下$x-1$阶台阶,爬法是$f(x-1)$
- 先爬两个台阶还剩下$x-2$阶台阶,爬法是$f(x-2)$

$x$阶台阶的时候 - $f(x)=f(x-1)+f(x-2)$

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = {};
    dp[1] = 1;
    dp[2] = 2;
    for(let i=3;i<=n;i++){
        /**
        爬上当前n阶的次数 = 先爬一个台阶再爬剩余n-1阶台阶的次数 + 先爬两个台阶再爬剩下n-2个台阶的次数
         */
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
};
```

## Edit Distance

- LeetCode 72
- $dp(i,j)$表示`word1[i]`到`word2[j]`
- word1 insert - word2 delete - $dp(i,j-1)$
- word1 delete - $dp(i-1,j)$
- word1 replace - $dp(i-1,j-1)$

$dp(i,j)=\begin{cases}
dp(i-1,j-1)&w1[i]=w2[j]\\
1+min(dp(i,j-1),dp(i-1,j),dp(i-1,j-1))&w1[i]\neq w2[j]
\end{cases}$

# Dynamic programming

```tsx
function minDistance(word1: string, word2: string): number {
    var dp = Array.from({ length: word1.length + 1 }, () => Array.from({ length: word2.length + 1 }, () => 0))

    for (var i = 1; i < dp[0].length; i++) {
        dp[0][i] = i
    }

    for (var i = 1; i < dp.length; i++) {
        dp[i][0] = i
    }

    for (var i = 1; i <= word1.length; i++) {
        for (var j = 1; j <= word2.length; j++) {
            var insertChar = dp[i][j - 1]
            var deleteChar = dp[i - 1][j]
            var replaceChar = dp[i - 1][j - 1]

            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(
                    Math.min(insertChar, deleteChar),
                    replaceChar
                ) + 1
            }
        }
    }

    return dp[word1.length][word2.length]
};
```

# 递归

```tsx
function minDistance(word1: string, word2: string, memo?: any): number {
    if (word1 === word2) return 0
    if (!memo) {
        memo = Array.from({ length: word1.length + 1 }, () => Array.from({ length: word2.length + 1 }, () => -1))
    }
    if (memo[word1.length][word2.length] !== -1) {
        return memo[word1.length][word2.length]
    }
    if (word1.length === 0 || word2.length === 0) {
        return Math.max(word1.length, word2.length)
    }
    if (word1[word1.length - 1] === word2[word2.length - 1]) {
        memo[word1.length - 1][word2.length - 1] = minDistance(
            word1.substring(0, word1.length - 1),
            word2.substring(0, word2.length - 1), memo)
        return memo[word1.length - 1][word2.length - 1]
    }
    memo[word1.length][word2.length - 1] = minDistance(
        word1,
        word2.substring(0, word2.length - 1), memo)
    memo[word1.length - 1][word2.length] = minDistance(
        word1.substring(0, word1.length - 1),
        word2, memo)
    memo[word1.length - 1][word2.length - 1] = minDistance(
        word1.substring(0, word1.length - 1),
        word2.substring(0, word2.length - 1), memo)

    return 1 + Math.min(
        memo[word1.length - 1][word2.length],
        Math.min(
            memo[word1.length][word2.length - 1],
            memo[word1.length - 1][word2.length - 1]
        ))
};
```

## House Robber III

- [198. House Robber](https://leetcode-cn.com/problems/house-robber/)
- [213. House Robber II](https://leetcode-cn.com/problems/house-robber-ii/)
- [337. House Robber III](https://leetcode-cn.com/problems/house-robber-iii/)

$selectDp(root)$ - 选择node时的最大值

$unselectDp(root)$ - 不选择node时的最大值

$selectDp(root)=root.val+unselectDp(l)+unselectDp(r)$

$lr=max(selectDp(root.left),unselectDp(root.right))$

$rr=max(selectDp(root.right),unselectDp(root.right))$

$unselectDp(root)=lr+rr$

$max(selectDp(root),unselectDp(root))$

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

function rob(root: TreeNode | null, select: Map<TreeNode, number> = new Map, unSelect: Map<TreeNode, number> = new Map): number {
    if (!root) {
        select.set(root, 0)
        unSelect.set(root, 0)
        return 0
    }
    if (!root.left && !root.right) {
        select.set(root, root.val)
        unSelect.set(root, 0)
        return root.val
    }

    rob(root.left, select, unSelect)
    rob(root.right, select, unSelect)

    select.set(root, root.val +unSelect.get(root.left) + unSelect.get(root.right))

    const lr = Math.max(select.get(root.left), unSelect.get(root.left))
    const rr = Math.max(select.get(root.right), unSelect.get(root.right))
    unSelect.set(root, lr + rr)

    return Math.max(select.get(root), unSelect.get(root))
};
```

## Longest Common Subsequence

- LeetCode 1143

$dp(i,j)\begin{cases}
dp(i-1,j-1)&t1(i-1)=t2(j-1)\\
max(dp(i-1,j),dp(i,j-1))&t1(i-1)\neq t2(j-1)
\end{cases}$

```tsx
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    var dp = Array.from({ length: text1.length + 1 }, () => Array.from({ length: text2.length + 1 }, () => 0))

    for (var i = 1; i <= text1.length; i++) {
        for (var j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }

    return dp[text1.length][text2.length]
};
```

## Longest Palindromic Substring

- LeetCode 5
- $P(i,j)$ 表示字符串`s`区间$[i,j]$是否为回文字串
- $P(i,j) = \begin{cases}
   true &\text{如果子串 Si​…Sj​ 是回文串} b \\
   false &\text{其他情况} d
\end{cases}$
- $P(i,j)=P(i+1,j-1)\land(S_i==S_j)$
- $\begin{cases}
   P(i,i)=true\\
   P(i,i+1)=(S_i==S_\text{i+1})
\end{cases}$

```jsx
function longestPalindrome(s: string): string {
    var startIndex = 0
    var endIndex = 0
    var dp = Array.from({ length: s.length }, () => Array.from({ length: s.length }, () => false))

    // subStringLength === 1
    for (var i = 0; i <= s.length - 1; i++) {
        dp[i][i] = true
    }

    // subStringLength === 2
    for (var i = 0; i <= s.length - 2; i++) {
        dp[i][i + 1] = s[i] === s[i + 1]

        if (dp[i][i + 1]) {
            startIndex = i
            endIndex = i + 1
        }
    }

    for (var subStringLength = 3; subStringLength <= s.length; subStringLength++) {
        for (var i = 0; i <= s.length - subStringLength; i++) {
            var j = i + subStringLength - 1
            dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]

            if (dp[i][j] && j - i > endIndex - startIndex) {
                startIndex = i
                endIndex = j
            }
        }
    }

    return s.substring(startIndex, endIndex + 1)
};
```

## Longest Valid Parentheses

- LeetCode 32
- 一维dp，初始值为0
- 下标为"("的一定不合法，值为0

```tsx
function longestValidParentheses(s: string): number {
    let result = 0
    const dp = Array.from({ length: s.length }, () => 0)
    dp[-1] = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            continue
        } else if (s[i - 1] === '(') {
            dp[i] = 2 + dp[i - 2]
        } else if (s[i - dp[i - 1] - 1] === '(') {
            dp[i] = 2 + dp[i - 1] + dp[i - dp[i - 1] - 2]
        }
        result = Math.max(result, dp[i])
    }

    return result
};
```

## Maximal Rectangle

- LeetCode 85
- $dp(i,j)$表示当前坐标的最长边长

```tsx
function maximalRectangle(matrix: string[][]): number {
    var dp = Array.from({ length: matrix.length }, () => [])
    for (var i = 0; i < matrix.length; i++) {
        dp[i][0] = parseInt(matrix[i][0])
        for (var j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] !== '' + 0) {
                dp[i][j] = 1 + dp[i][j - 1]
            } else {
                dp[i][j] = 0
            }
        }
    }

    var result = 0
    for (var i = 0; i < dp.length; i++) {
        for (var j = 0; j < dp[i].length; j++) {
            var max = 0
            var min = Infinity
            for (var v = i; v >= 0; v--) {
                min = Math.min(min, dp[v][j])
                if(min === 0) {
                    break
                }
                max = Math.max(max, min * (i - v + 1))
            }
            result = Math.max(result, max)
        }
    }

    return result
};
```

## Maximun Subarray

- LeetCode 53
- $dp(i)$为以$i$结尾的数组最大和

```tsx
function maxSubArray(nums: number[]): number {
    const dp = Array.from({ length: nums.length }, () => 0)
    let result = dp[0] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : dp[i])
        result = Math.max(result, dp[i])
    }

    return result
};
```

## Perfect Squares

- LeetCode 279
- $f[i]=1+\min_{j=1}^{\lfloor\sqrt{i}\rfloor}{f[i-j^2]}$

```tsx
function numSquares(n: number): number {
    const dp = Array.from({ length: n + 1 }, () => 0)

    for (let i = 1; i <= n; i++) {
        let min = Infinity
        for (let j = 1; j * j <= i; j++) {
            min = Math.min(min, dp[i - j * j])
        }
        dp[i] = min + 1
    }

    return dp[n]
};
```

## Regular Expression Matching

- LeetCode 10
- $dp(0,0)=true$空字符串匹配空字符串
- $i$表示字符串$s$中的第$i$个字符(不是`index`)
- $j$表示匹配$p$中的第$j$个字符(不是`index`)
- 初始值的确认

# $p\neq *$状态转移方程

$dp(i,j)=\begin{cases}
dp(i-1,j-1)&s(i)=p(i)\\ 
false&s(i)\neq p(i)
\end{cases}$

# $p=*$状态转移方程

$dp(i,j)=\begin{cases} 
dp(i,j-2)&p(i-1)p(i)匹配''\\
dp(i,j-2)&s(i)\neq p(j-1)\\
dp(i-1,j)&s(i)=p(j-1)
\end{cases}$

```tsx
function isMatch(s: string, p: string): boolean {
    var dp = Array.from({ length: s.length + 1 }, () => Array.from({ length: p.length + 1 }, () => false))
    dp[0][0] = true

    for (var i = 1; i <= p.length; i++) {
        if (p[i - 1] === '*') {
            dp[0][i] = dp[0][i - 2]
        } else {
            dp[0][i] = false
        }
    }

    for (var i = 1; i <= s.length; i++) {
        for (var j = 1; j <= p.length; j++) {
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2]
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j]
                }
            } else {
                if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                    dp[i][j] = dp[i - 1][j - 1]
                } else {
                    dp[i][j] = false
                }
            }
        }
    }

    return dp[s.length][p.length]
};
```

## Trapping Rain Water


- LeetCode 42
- $当前bar的雨水量=min(左边最高bar,右边最高bar)-当前bar的高度$

```tsx
function trap(height: number[]): number {
    var leftMax = Array.from({ length: height.length }, () => 0)
    var rightMax = Array.from({ length: height.length }, () => 0)
    leftMax[0] = height[0]
    rightMax[rightMax.length - 1] = height[height.length - 1]

    for (var i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }

    for (var i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }

    var result = 0
    for (var i = 1; i < height.length - 1; i++) {
        result += Math.min(leftMax[i], rightMax[i]) - height[i]
    }

    return result
};
```

## Unique Binary Search Trees

- $1$为根节点时，左子树节点个数为$0$，右子树节点个数为$n-1$
- $2$为根结点时，左子树的节点个数为1，右子树的节点个数为$n-2$

$f(n)=f(0)*f(n-1)+f(1)*f(n-2)...+f(n-1)*f(0)$

```tsx
function numTrees(n: number): number {
    const dp = Array.from({ length: n + 1 }, () => 0)
    dp[0] = dp[1] = 1

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - 1 - j]
        }
    }

    return dp[n]
};
```

## Unique Paths

- LeetCode 62
- $f(i,j)=f(i+1,j)+f(i,j+1)$

```tsx
function uniquePaths(m: number, n: number): number {
    const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => 1))

    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            dp[i][j] = dp[i + 1][j] + dp[i][j + 1]
        }
    }

    return dp[0][0]
};
```
