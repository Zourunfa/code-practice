const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];

console.log(flat(arr, 2));

function flat(arr) {
  let stack = [].concat(arr)
  let res = []

  while (stack.length !== 0) {
    const i = stack.pop()
    if (Array.isArray(i)) {
      stack.push(...i)
    } else {
      res.unshift(i)
    }
  }
  return res
}

// function flat(arr) {
//   return arr.reduce((pres, cur) => {
//     return pres.concat(Array.isArray(cur) ? flat(cur) : cur)
//   }, [])
// }