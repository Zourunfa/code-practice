
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

function deepCloneComplete(obj, hash = new WeekMap()){
  if (obj === null) 
    return null 
  if (obj === undefined)
    return undefined
  // 处理基本的数据类型(number string  boolean symbol bigint)
  if (typeof obj !== 'object')
    return obj
  // 处理Date对象
  if (obj instanceof Date)
    return new Date(obj)
  // 处理RegExp 
  if (obj instanceof RegExp)
    return new RegExp(obj)
  if (typeof obj == 'function'){
    return obj
  }
  // 处理循环引用(使用WeakMap 存储已拷贝的对象)
  if (hash.has(obj))
    return hash.get(obj)

  //处理Map
  if (obj instanceof Map){
    const result = new Map()
    has.set(obj, result)
    obj.forEach((value, key)=>{
      result.set(key, deepCloneComplete(value, hash))
    })
    return result
  }
 
  //处理set
  if(obj instanceof Set){
    const result = new Set()
    hash.set(obj, result)
    obj.forEach(value =>{
      result.add(deepCloneComplete(value,hash))
    })
  }

  // 处理数组和普通对象
  const result = Array.isArray(obj) ? [] : {}
  hash.set(obj, result)

  // 递归拷贝所有属性（包括SyBol属性）
  // Object.keys 只能获取可枚举的字符串属性
  // Reflect.ownKeys 可以获取所有属性 包括Symbol和不可枚举的属性
  Reflect.ownKeys(obj).forEach(key=>{
    result[key] = deepCloneComplete(obj[key], hash)
  })
}