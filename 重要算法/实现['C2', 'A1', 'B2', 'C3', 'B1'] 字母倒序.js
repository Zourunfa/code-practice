const arr = ['C2', 'A1', 'B2', 'C3', 'B1']


function fn(arr) {

  arr.sort((a, b) => {
    return b[0].charCodeAt() - a[0].charCodeAt()
  })

  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
  })

  return arr
}

console.log(fn(arr));