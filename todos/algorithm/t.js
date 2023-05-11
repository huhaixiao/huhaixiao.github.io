function insertion(A) {
  for (var i = 1; i < A.length; i++) {
    var curr = A[i]
    var j = i - 1
    while (j >= 0 && A[j] > curr) {
      A[j + 1] = A[j]
      j--
    }
    A[j + 1] = curr
  }
}