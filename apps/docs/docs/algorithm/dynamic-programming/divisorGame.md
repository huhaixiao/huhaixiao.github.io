```ts
/**
爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。
最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：
1. 选出任一 x，满足 0 < x < N 且 N % x == 0 。
2. 用 N - x 替换黑板上的数字 N 。
3. 如果玩家无法执行这些操作，就会输掉游戏。

A: 偶数必赢
 */

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  var dp = []
  dp[1] = false

  for (var i = 2; i <= N; i++) {
    dp[i] = false
    for (var j = 1; j <= Math.ceil(i / 2); j++) {
      if (i % j === 0 && dp[i - j] === false) {
        dp[i] = true
        break;
      }
    }
  }

  return dp[N]
};
```
