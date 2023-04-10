- 643. Maximum Average Subarray I

```tsx
function findMaxAverage(nums: number[], k: number): number {
    let sum = 0

    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }

    let maxSum = sum
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i]
        maxSum = Math.max(maxSum, sum)
    }

    return maxSum / k
};
```