# Hash Table

- [Hash Table Problems](https://leetcode-cn.com/tag/hash-table/problemset/)

## Contains Duplicate II

- LeetCode 219

```tsx
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const cache = new Set

    for (let i = 0; i < nums.length; i++) {
        if (cache.has(nums[i])) return true
        cache.add(nums[i])
        if (cache.size > k) {
            cache.delete(nums[i - k])
        }
    }

    return false
};
```

## 散列表

1. 写操作
2. 读操作
3. hash冲突的写操作与读操作
