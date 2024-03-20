// function deepClone(obj) {

//   if (typeof obj !== 'object') {
//     return obj
//   }
//   let res

//   // 数组和对象的限定
//   if (Array.isArray(obj)) {
//     res = []
//   } else {
//     res = {}
//   }

//   //一层层递归赋值
//   for (let key in obj) {
//     console.log(key);
//     if (obj.hasOwnProperty(key)) {
//       res[key] = obj[key]
//     }
//   }
//   return res
// }

// let book = {
//   name: "局外人",
//   types: {
//     t1: "中文版",
//     t2: "英文版",
//     a: {
//       c: 2
//     }
//   }
// }
// 5

// let book_clone = deepClone(book)
// console.log(book_clone === book);
// console.log(book_clone);

const oldObj = {
  name: 'af',
  age: 20,
  colors: [1, 1, 1, 1],
  friend: {
    name: 'csd',
  },
}
oldObj.oldObj = oldObj

/*
解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题。
这个存储空间，需要可以存储key-value形式的数据，且key可以是一个引用类型，我们可以选择Map这种数据结构：

*/
function deepClone(obj, map = new Map()) {
  if (typeof obj === 'object' || obj == null) {
    return obj
  }
  let res

  if (typeof obj === 'object') {
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)
    res = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
      res[key] = deepClone(obj[key])
    }
  }

  return res
}
