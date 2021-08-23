// const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]

// // 首先使用 reduce 展开一层
// arr.reduce((pre, cur) =>{
//   console.log(pre);
//   console.log(cur);
//   pre.concat(cur)
// } , []);



const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]


// 用reduce
// 首先使用 reduce 展开一层
// const arr1 = arr.reduce((pre, cur) => pre.concat(cur), []);


// function flat(arr){
//   return arr.reduce((pre,cur)=>{
//     return pre.concat(Array.isArray(cur)? flat(cur):cur)
//   },[])
// }

// console.log(flat(arr));
// const a = [1,2,3]
// console.log([].concat(a));

// 如果想要传入整数参数控制拉平层数
// reduce + 递归
// function flat(arr, num = 1) {
//   return num > 0
//     ? arr.reduce(
//         (pre, cur) =>
//           pre.concat(Array.isArray(cur) ? flat(cur, num - 1) : cur),
//         []
//       )
//     : arr.slice();
// }
// const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
// flat(arr, Infinity);
// // [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];



// 用栈
// function flat(arr){
//   const stack = [].concat(arr)
//   const  res = []

//   while(stack.length !==0){
//     let val = stack.pop()
//     if(Array.isArray(val)){
//       stack.push(...val)
//     }else{
//       res.unshift(val)
//     }
//   }

//   return res
// }

// console.log(flat(arr));



// const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]

function flat(arr) {
  // const newArr = [].concat(arr)
  // console.log(newArr);

  return arr.reduce((pres, cur) => {
    return pres.concat(Array.isArray(cur) ? flat(cur) : cur)
  }, [])

}

// function flat(arr) {
//   return arr.reduce((pres, cur) => {
//     return pres.concat(Array.isArray(cur) ? flat(cur) : cur)
//   }, [])
// }

console.log(flat(arr));