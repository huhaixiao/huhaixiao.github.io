// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/

/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，
 * 它每次可以向左、右、上、下移动一格（不能移动到方格外），
 * 也不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
 * 但它不能进入方格 [35, 38]，因为3+5+3+8=19。
 * 请问该机器人能够到达多少个格子？
 * 
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 心得
 * 1. 需要二维数组的时候要主动创建二维数组
 */
var movingCount = function (m, n, k) {
  var arr = []

  for (var i = 0; i < m; i++) {
    arr[i] = []
    for (var j = 0; j < n; j++) {
      arr[i][j] = false
    }
  }

  return dfs(0, 0, k, arr, m, n)
};

function dfs(i, j, k, arr, m, n) {
  if (i < 0 || j < 0) return 0
  if (i >= m || j >= n) return 0

  var iSum = digitalSum(i)
  var jSum = digitalSum(j)
  if (iSum + jSum > k) return 0

  if (arr[i][j]) return 0
  arr[i][j] = true

  return 1
    + dfs(i - 1, j, k, arr, m, n)
    + dfs(i + 1, j, k, arr, m, n)
    + dfs(i, j - 1, k, arr, m, n)
    + dfs(i, j + 1, k, arr, m, n)
}

function digitalSum(num) {
  var result = 0

  while (num) {
    result += num % 10
    num = parseInt(num / 10)
  }

  return result
}