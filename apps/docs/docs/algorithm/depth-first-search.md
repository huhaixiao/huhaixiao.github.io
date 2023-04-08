# Depth First Search

## Number of Islands

```tsx
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  var result = 0

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j)
        result++
      }
    }
  }

  function dfs(grid, i, j) {
    if (i < 0 || i >= grid.length) return
    if (j < 0 || j >= grid[i].length) return
    if (grid[i][j] === '0') return
    grid[i][j] = '0'
    dfs(grid, i + 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i - 1, j)
    dfs(grid, i, j - 1)
  }

  return result
};
```
