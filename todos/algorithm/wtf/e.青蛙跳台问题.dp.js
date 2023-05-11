// https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/

/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 解：在所有跳法中，青蛙的最后一步只有两种情况： 跳上 1 级或 2 级台阶。
 * 当为 1 级台阶： 剩 n-1 个台阶，此情况共有 f(n-1) 种跳法；
 * 当为 2 级台阶： 剩 n-2 个台阶，此情况共有 f(n-2) 种跳法。
 * @param {number} n
 * @return {number}
 * 心得
 * 剩下一阶台阶的情况有f(n-1)种
 * 剩下两阶台阶的情况有f(n-2)种
 */
var numWays = function (n) {
  var dp = {
    0: 1,
    1: 1,
    2: 2
  }

  for (var i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
};