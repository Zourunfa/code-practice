// function flat(arr) {
//   let res = []
//   for (let i of arr) {
//     console.log(i);
//     if (Array.isArray(i)) {

//       res = res.concat(flat(i));

//     } else {
//       res.push(i)
//     }
//   }
//   return res
// }



const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];

console.log(flat(arr, 2));

// function flat(arr) {
//   let stack = [].concat(arr)
//   let res = []

//   while (stack.length !== 0) {
//     const i = stack.pop()
//     if (Array.isArray(i)) {
//       stack.push(...i)
//     } else {
//       res.unshift(i)
//     }

//   }
//   return res
// }



// function flat(arr) {
//   return arr.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
//   }, [])
// }


// 通过传入整数参数控制“拉平”层数

function flat(arr, num = 1) {
  if (num > 0) {
    return arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? flat(cur, num - 1) : cur)
    }, [])
  } else {
    return arr.slice()
  }
}