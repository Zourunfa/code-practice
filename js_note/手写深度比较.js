
function isObj(obj) {
  return typeof obj === 'object' && typeof obj !== null
}



function isEqual(obj1, obj2) {
  // 判断两个是不是对象
  if (!isObj(obj1) || !isObj(obj2)) {
    return obj1 === obj2
  }
  if (obj1 === obj2) {
    return true
  }

  // 先取出obj1和obj2的keys,比较个数
  let obj1Keys = Object.keys(obj1)
  let obj2Keys = Object.keys(obj2)

  if (obj1Keys.length !== obj2Keys.length)
    return false
  // 以obj1为基准和obj2递归比较
  for (let k in obj1) {
    const res = isEqual(obj1[k], obj2[k])
    if (!res) {
      return false
    }

  }
  return true

}

const obj1 = {
  a: 2,
  b: 'a',
  c: {
    e: 'f',
    f: 's'
  }
}

const obj2 = {
  a: 2,
  b: 'a',
  c: {
    e: 'f',
    f: 's',
    // a:41
  }

}

console.log(isEqual(obj1, obj2));