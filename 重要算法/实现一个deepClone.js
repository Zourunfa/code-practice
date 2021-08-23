function deepClone(obj) {

  if (typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Array) {
    var res = []
  } else {
    var res = {}
  }

  for (k in obj) {
    if (obj.hasOwnProperty(k)) {
      res[k] = deepClone(obj[k])
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

const bookCopy = deepClone(book)

console.log(bookCopy);