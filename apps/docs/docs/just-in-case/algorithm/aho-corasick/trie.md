# Trie

- Tries (pronounced as "Try")
- prefix tree
- 单词查找树
- 字典树
- 基于哈希表的n叉树
- [208. Implement Trie (Prefix Tree)](https://leetcode.cn/problems/implement-trie-prefix-tree/)
- [1804. Implement Trie II (Prefix Tree)](https://leetcode.cn/problems/implement-trie-ii-prefix-tree/)

```ts
interface TrieTreeNode｛
  data: string;
  children: Record<string, TrieTreeNode>
  isEnd: boolean;
｝
```
