- 239. Sliding Window Maximum

```tsx
function maxSlidingWindow(nums: number[], k: number): number[] {
    const result = []
    const monotonicQueue = [0]

    for (let i = 1; i < k; i++) {
        while (monotonicQueue.length
            && nums[monotonicQueue[monotonicQueue.length - 1]] < nums[i]) {
            monotonicQueue.pop()
        }
        monotonicQueue.push(i)
    }
    result.push(nums[monotonicQueue[0]])

    for (let i = k; i < nums.length; i++) {
        while (monotonicQueue.length
            && nums[monotonicQueue[monotonicQueue.length - 1]] < nums[i]) {
            monotonicQueue.pop()
        }
        while (monotonicQueue[0] <= i - k) {
            monotonicQueue.shift()
        }
        monotonicQueue.push(i)

        result.push(nums[monotonicQueue[0]])
    }

    return result
};
```