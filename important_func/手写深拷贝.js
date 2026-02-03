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
// function deepClone(obj, map = new Map()) {
//   if (typeof obj === 'object' || obj == null) {
//     return obj
//   }
//   let res

//   if (typeof obj === 'object') {
//     if (map.get(target)) {
//       return map.get(target)
//     }
//     map.set(target, cloneTarget)
//     res = Array.isArray(obj) ? [] : {}
//     for (const key in obj) {
//       res[key] = deepClone(obj[key])
//     }
//   }

//   return res
// }

// 为什么要这样做呢？，先来看看WeakMap的作用：

// WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。

// 什么是弱引用呢？

// 在计算机程序设计中，弱引用与强引用相对，是指不能确保其引用的对象不会被垃圾回收器回收的引用。 一个对象若只被弱引用所引用，则被认为是不可访问（或弱可访问）的，并因此可能在任何时刻被回收。

function deepClone(obj) {
  if (typeof obj !== 'object' && Array.isArray(obj)) {
    return obj
  }

  if (!deepClone.cached) {
    // 初始化
    deepClone.cached = new WeakMap()
  }
  // 是否处理过
  if (deepClone.cached.has(obj)) {
    return deepClone.cached.get(obj)
  }
  let tmp
  if (obj instanceof Map) {
    let tmp = new Map()
    deepClone.cached.set(obj, tmp)
    for (let [key, val] of obj) {
      tmp.set(deepClone(key), deepClone(val))
    }
  } else if (obj instanceof Set) {
    deepClone.cached.set(obj, tmp)
    for (let val of obj) {
      tmp.add(deepClone(val))
    }
  } else if (obj instanceof RegExp) {
    deepClone.cached.set(obj, tmp)
    tmp = new RegExp(obj)
  } else {
    // 数组和对象
    tmp = new obj.constructor()
    deepClone.cached.set(obj, tmp)
    for (let key in obj) {
      tmp[key] = deepClone(obj[key])
    }
  }
  // 下面代码不能写的原因是先存引用，在改变会报错
  //   deepClone.cached.set(obj, tmp)
  return tmp
}
