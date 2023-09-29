# Tree

- 线段树

## 二叉搜索树

- BST
- Binary Search Tree
- 二叉查找树
- Binary Sort Tree
- 二叉排序树

### 特点
一个空树，或具有以下性质的二叉树
1. 若左子树不空，则左子树上所有结点的值均小于它的根结点的值；
2. 若右子树不空，则右子树上所有结点的值均大于它的根结点的值；
3. 左、右子树也分别为二叉排序树；
4. 没有键值相等的结点。

- left degree right
- preorder dlr
- inorder ldr
- postorder lrd
- [https://leetcode-cn.com/tag/tree/](https://leetcode-cn.com/tag/tree/)

### 遍历
D - 根节点 Degree
L - 左子树 Left
R - 右子树 Right
1. 前序遍历(DLR) - 根左右
2. 中序遍历(LDR) - 左根右
3. 后序遍历(LRD) - 左右根
4. 逆前序遍历(DRL) - 根右左
5. 逆中序遍历(RDL) - 右根左
6. 逆后序遍历(RLD) - 右左根



> AKA 一个拥有`N个节点`和`N-1`条边的一个有向无环图

## 二叉树定义

- 根结点 Degree
- 左子树 Left
- 右子树 Right
- 叶子节点 左右子树同时为空

## 二叉树遍历
1. [前序遍历](https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xeywh5/) - 根左右DLR
2. [中序遍历](https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xecaj6/) - 左根右LDR
3. [后序遍历](https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xebrb2/) - 左右根LRD
4. 逆前序遍历 - 根右左DRL
5. 逆中序遍历 - 右根左RDL
6. 逆后序遍历 - 右左根RLD
7. [二叉树的层序遍历](https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xefh1i/)
8. 通过中序遍历可以得到一个递增的有序数列
9. 删除树中节点按照后序遍历删除

## 二叉搜索树定义

- 二叉搜索树 BST Binary Search Tree
- 二叉排序树 BST Binary Sort Tree
- 一颗空树或具有以下性质的二叉树
  - 若左子树不空，则左子树上所有结点的值均小于它的根结点的值
  - 若右子树不空，则右子树上所有结点的值均大于它的根结点的值
  - 左、右子树也分别为二叉搜索树
  - 没有键值相等的结点
- 通过中序遍历可以得到一个递增的有序数列

## 树

1. 主要作用：查找与维持相对顺序
2. 不同的二叉树
   1. 二叉搜索树
   2. 满二叉树：除最后一层外没有子节点
   3. 完全二叉树：节点在二叉树的位置与满二叉树相同, 每一层的结点数都达到了最大值
3. 自平衡
   1. 红黑树 TODO
   2. AVL树 TODO
   3. 树堆 TODO
4. 二叉树的遍历
   1. 深度优先
      1. 前序遍历
      2. 中序遍历
      3. 后序遍历
   2. 广度优先
      1. 层序遍历

## 红黑树

1. root与null为黑色
2. 父子节点不能同时为红
3. 从任意节点到null节点有相同数量的黑节点
   1. RBTree黑高相同
   2. 确保了不会有一条路径比另一条高出一般, 接近平衡
4. 插入与删除的时间复杂度是 \\( logN \\)
5. 左旋: 将当前节点变为R的L
6. 右旋: 将当前节点变为L的R
