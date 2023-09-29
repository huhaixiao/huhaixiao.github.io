// https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/

/**
 * 
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。
如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

[["a","b","c","e"],
["s","f","c","s"],
["a","d","e","e"]]

但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 心得
 * 1. 边界判断的时候 i>=arr.length
 */
var exist = function (board, word) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (dfs(i, j, board, word, 0)) {
        return true
      }
    }
  }

  return false
};

function dfs(i, j, board, word, index) {
  if (i < 0 || j < 0) return false
  if (i >= board.length || j >= board[0].length) return false
  if (board[i][j] !== word.charAt(index)) return false
  if (index === word.length - 1) return true

  var temp = board[i][j]
  board[i][j] = '/'

  var result = dfs(i - 1, j, board, word, index + 1)
    || dfs(i + 1, j, board, word, index + 1)
    || dfs(i, j + 1, board, word, index + 1)
    || dfs(i, j - 1, board, word, index + 1)

  board[i][j] = temp

  return result
}