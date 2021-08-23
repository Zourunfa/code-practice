function isEqual(obj1, obj2) {
  // 判断两个是不是对象
  if (typeof obj1 !== 'object' && typeof obj2 !== 'object'
    && obj1 !== null && obj2 !== null) {
    return obj1 === obj2
  }

  if (obj1 === obj2) {
    return true
  }
  // 先取出obj1和obj2的keys,比较个数
  let leng1 = Object.keys(obj1).length
  let leng2 = Object.keys(obj2).length
  // console.log(leng1);
  if (leng1 !== leng2) {
    return false
  }
  // 以obj1为基准和obj2递归比较
  for (let key in obj1) {
    const res = isEqual(obj1[key], obj2[key])
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
    // a: 41
  }

}

console.log(isEqual(obj1, obj2));


