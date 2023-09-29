# Greedy

- 局部最优推出全局最优
- 贪心是常识, 符合人类的正常思维

## Jump Game II

- LeetCode 45

# 正向查找可到达的最大位置

```tsx
function jump(nums: number[]): number {
    var steps = 0
    var maxPosition = 0
    var jumpPosition = 0

    for (var i = 0; i < nums.length - 1; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i])
        if (i === jumpPosition) {
            jumpPosition = maxPosition
            steps++
        }
    }

    return steps
};
```

## Jump Game

- LeetCode 55

```tsx
function canJump(nums: number[]): boolean {
    if (nums.length === 1) return true
    var maxDistance = nums[0]
    for (var i = 1; i < nums.length; i++) {
        if (i <= maxDistance) {
            maxDistance = Math.max(maxDistance, nums[i] + i)
        } else {
            return false
        }
    }
    return true
};
```
