# General

## 数据结构

- linear structure
  - Array
  - Linked List
  - Stack
  - Queue
- non linear structure
  - tree 是一种特殊的 graph
- graph theory
  - Vertices & Edges
  - \\( G = (V, E) \\)
  - ordered pair
    - \\( (a, b) \neq (b, a) \\)
  - unordered pair
    - \\( {a, b} = {b, a} \\)

## [队列](https://leetcode-cn.com/tag/queue/)

- 优先队列

1. [239. 滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)

## [滑动窗口](https://leetcode-cn.com/tag/sliding-window/) 

- [1052. 爱生气的书店老板](https://leetcode-cn.com/problems/grumpy-bookstore-owner/)

## 最长重复字符系列

- [424. 替换后的最长重复字符](https://leetcode-cn.com/problems/longest-repeating-character-replacement/)

## 数组
1. [54. 螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/)
2. [59. 螺旋矩阵 II](https://leetcode-cn.com/problems/spiral-matrix-ii/)
   1. 顺时针遍历数组, 考虑边界情况

## 广度优先

1. [107. 二叉树的层序遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)
2. [5. 最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)
3. [87. 扰乱字符串](https://leetcode-cn.com/problems/scramble-string/)
4. [189. 旋转数组](https://leetcode-cn.com/problems/rotate-array/)
5. [100. 相同的树](https://leetcode-cn.com/problems/same-tree/)
6.  [111. 二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)
   1. 广度优先遍历, 返回第一个叶节点的深度
7.  [112. 路径总和](https://leetcode-cn.com/problems/path-sum/)
8.  [501. 二叉搜索树中的众数](https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/)
9.  [572. 另一个树的子树](https://leetcode-cn.com/problems/subtree-of-another-tree/)
10. [671. 二叉树中第二小的节点](https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/)
11. [684. 冗余连接](https://leetcode-cn.com/problems/redundant-connection/)
12. [993. 二叉树的堂兄弟节点](https://leetcode-cn.com/problems/cousins-in-binary-tree/)
13. [105. 从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
14. [206. 反转链表-](https://leetcode-cn.com/problems/reverse-linked-list/)
15. [226. 翻转二叉树-](https://leetcode-cn.com/problems/invert-binary-tree/)
16. [704. 二分查找](https://leetcode-cn.com/problems/binary-search/)
    1.  `left + Math.floor((right - left) / 2)`
17. [997. 找到小镇的法官](https://leetcode-cn.com/problems/find-the-town-judge/)
18. [1237. 找出给定方程的正整数解](https://leetcode-cn.com/problems/find-positive-integer-solution-for-a-given-equation/)
19. [面试题 08.01. 三步问题](https://leetcode-cn.com/problems/three-steps-problem-lcci/)

## Glossary

- 动态规划

{% asset_img dp.png %}

- 树
  - 二叉树
  - 前序遍历、中序遍历、后序遍历
- 图
  - 数据结构：二维数组`edges`, `edge = [0, 1]`与`edge = [1, 0]`在无向图中是同一条边, 在有向图中是不同边
  - 有向图
  - 无向图
  - 入度、出度、度
  - 连通图
    - 无向图中, 从顶点i到顶点j有路径相连, 则称i和j是连通的
    - 有向图中, 连接i和j的边必须都是同向的


## Bitwise Operator

### Invert ~
```js
// 0000, 0的补码
// 1111, 所有位取反后的补码 -1
var a = ~0 // -1
```

### [Right shift (>>)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift)
```js

```

## 参考

- `left`, `right`
- `fast`, `slow`
- `peak`
- `increment`, `decrement`
- `sum`, `total`, `carry`
- `isXXX`
- `getXXX()`
- `#1` 明确代码块作用
- 提取方法
- recursion
- [github/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)

- 优先队列
- 单调队列


[树](https://leetcode-cn.com/tag/tree/)

## 排序

- 冒泡排序
- 插入排序
- 二分排序 merge
- 快速排序
- 桶排序

- 排序
  - 冒泡排序
  - 插入排序
  - 桶排序
- backtracking 回溯算法
- 单调栈
- 贪心算法

## 变量的命名

```javascript
var pre
var next

var fast
var slow

var head
var tail

var arr

var temp
```
