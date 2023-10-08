# Algorithm

1. [54. 螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/)
2. [1052. 爱生气的书店老板](https://leetcode-cn.com/problems/grumpy-bookstore-owner/)
3. [424. 替换后的最长重复字符](https://leetcode-cn.com/problems/longest-repeating-character-replacement/)
4. [59. 螺旋矩阵 II](https://leetcode-cn.com/problems/spiral-matrix-ii/)
   1. 顺时针遍历数组, 考虑边界情况
5. [107. 二叉树的层序遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)
6. [5. 最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)
7. [87. 扰乱字符串](https://leetcode-cn.com/problems/scramble-string/)
8. [189. 旋转数组](https://leetcode-cn.com/problems/rotate-array/)
9. [100. 相同的树](https://leetcode-cn.com/problems/same-tree/)
10. [111. 二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)
   1. 广度优先遍历, 返回第一个叶节点的深度
11. [112. 路径总和](https://leetcode-cn.com/problems/path-sum/)
12. [501. 二叉搜索树中的众数](https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/)
13. [572. 另一个树的子树](https://leetcode-cn.com/problems/subtree-of-another-tree/)
14. [671. 二叉树中第二小的节点](https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/)
15. [684. 冗余连接](https://leetcode-cn.com/problems/redundant-connection/)
16. [993. 二叉树的堂兄弟节点](https://leetcode-cn.com/problems/cousins-in-binary-tree/)
17. [105. 从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
18. [206. 反转链表-](https://leetcode-cn.com/problems/reverse-linked-list/)
19. [226. 翻转二叉树-](https://leetcode-cn.com/problems/invert-binary-tree/)
20. [704. 二分查找](https://leetcode-cn.com/problems/binary-search/)
    1.  `left + Math.floor((right - left) / 2)`
21. [997. 找到小镇的法官](https://leetcode-cn.com/problems/find-the-town-judge/)
22. [1237. 找出给定方程的正整数解](https://leetcode-cn.com/problems/find-positive-integer-solution-for-a-given-equation/)
23. [面试题 08.01. 三步问题](https://leetcode-cn.com/problems/three-steps-problem-lcci/)

- [github/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)
- 优先队列
- 单调队列
- backtracking 回溯算法
- 单调栈
- 贪心算法

## 变量的命名

```javascript
var left,
    right,
    pre,
    next,
    fast,
    slow,
    head,
    tail,
    arr,
    temp
    result,
    peak,
    increment,
    decrement,
    sum,
    total,
    carry,
    isXXX,
    getXXX
```

## 算法复杂度分析


### 时间复杂度分析

- https://leetcode-cn.com/leetbook/detail/journey-of-algorithm/

1. 渐进时间复杂度
   1. 若存在函数 $ f(n) $
   2. 当 $ n $ 趋于无穷大的时候, $ frac{T(n)}{f(n)} $的极限值为不等于零的常数
   3. 则称$ f(n) $ 是 $ T(n) $ 的同数量级函数。$ T(n) = O(f(n)) $ 
   4. $ O $ 为算法的渐进时间复杂度, 简称为时间复杂度
2. 常见时间复杂度
$$
O(1) < O(log_2n) < O(n) < O(n^2) 
$$
3. 分析各种排序算法的时间复杂度
   1. 冒泡
   2. 选择
   3. 插入
   4. 希尔
   5. 堆
   6. 快速
   7. 融合
   8. 桶
   9. 计数

