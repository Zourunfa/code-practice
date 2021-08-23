
function disorder(arr) {
  let len = arr.length
  let res = []
  let remember = new Set()
  // console.log(remember.size);
  while (remember.size < len) {

    let randomNum = Math.floor(len * Math.random())
    if (!remember.has(randomNum)) {
      res.push(arr[randomNum])
      remember.add(randomNum)
    }
  }
  return res


}

console.log(disorder([1, 2, 3, 4, 5, 6, 7, 8, 9]));