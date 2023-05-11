function myConcat(data) {
  const result = this.slice()

  if (Array.isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      result.push(data[i])
    }
  } else {
    result.push(data)
  }

  return result
}

