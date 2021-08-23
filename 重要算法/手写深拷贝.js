function deepClone(obj) {

  if (typeof obj !== 'object') {
    return obj
  }
  let res

  // 数组和对象的限定
  if (Array.isArray(obj)) {
    res = []
  } else {
    res = {}
  }

  //一层层递归赋值
  for (let key in obj) {
    console.log(key);
    if (obj.hasOwnProperty(key)) {
      res[key] = obj[key]
    }
  }
  return res
}

let book = {
  name: "局外人",
  types: {
    t1: "中文版",
    t2: "英文版",
    a: {
      c: 2
    }
  }
}
5


let book_clone = deepClone(book)
console.log(book_clone === book);
console.log(book_clone);