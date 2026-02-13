/**
 * 深拷贝就是在另一个地址空间完全复制当前的值 ，而浅拷贝就只是指向复杂数据类型的指针
 * 
 * 换句话说浅拷贝复制基本数据类型的会创建另一个地址空间复制，而对于引用类型的数据只能
 * 复制地址的指针
 * 
 * 
 * 
 */


// function deepClone(obj = {}){
//   if(typeof obj !== 'object' || obj == null){
//     return obj;
//   }

//   let result
//   if(obj instanceof Array){
//     result = []
//   }else{
//     result = {}
//   }

//   for(let key in obj){
//     // 保证key不是原型的属性,hasOwnProperty会忽略到原型链的上继承的属性
//     if(obj.hasOwnProperty(key)){
//       result[key] = deepClone(obj[key])
//     }
//   }

//   return result;
// }


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

console.log(book_clone);

let book_clone = deepClone(book)

function deepClone(obj) {
  if (typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Array) {
    var result = []
  } else {
    var result = {}
  }

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}


// ============ 完整的深拷贝实现（处理各种边界情况）============

/**
 * 深拷贝函数 - 完整版
 * 支持：对象、数组、Date、RegExp、Map、Set、循环引用等
 */
function deepCloneComplete(obj, hash = new WeakMap()) {
  // 1. 处理 null 和 undefined
  if (obj === null) return null
  if (obj === undefined) return undefined
  
  // 2. 处理基本数据类型（number, string, boolean, symbol, bigint）
  if (typeof obj !== 'object') return obj
  
  // 3. 处理 Date 对象
  if (obj instanceof Date) return new Date(obj)
  
  // 4. 处理 RegExp 对象
  if (obj instanceof RegExp) return new RegExp(obj)
  
  // 5. 处理函数（函数一般不需要深拷贝，直接返回引用）
  if (typeof obj === 'function') return obj
  
  // 6. 处理循环引用（使用 WeakMap 存储已拷贝的对象）
  if (hash.has(obj)) return hash.get(obj)
  
  // 7. 处理 Map
  if (obj instanceof Map) {
    const result = new Map()
    hash.set(obj, result)
    obj.forEach((value, key) => {
      result.set(key, deepCloneComplete(value, hash))
    })
    return result
  }
  
  // 8. 处理 Set
  if (obj instanceof Set) {
    const result = new Set()
    hash.set(obj, result)
    obj.forEach(value => {
      result.add(deepCloneComplete(value, hash))
    })
    return result
  }
  
  // 9. 处理数组和普通对象
  // 创建新对象，保持原型链
  const result = Array.isArray(obj) ? [] : {}
  
  // 将当前对象存入 hash，用于处理循环引用
  hash.set(obj, result)
  
  // 10. 递归拷贝所有属性（包括 Symbol 属性）
  // Object.keys 只能获取可枚举的字符串属性
  // Reflect.ownKeys 可以获取所有属性（包括 Symbol 和不可枚举属性）
  Reflect.ownKeys(obj).forEach(key => {
    result[key] = deepCloneComplete(obj[key], hash)
  })
  
  return result
}

// ============ 简化版深拷贝（适合面试）============

function deepCloneSimple(obj, hash = new WeakMap()) {
  // 处理 null 和基本类型
  if (obj === null || typeof obj !== 'object') return obj
  
  // 处理 Date 和 RegExp
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  
  // 处理循环引用
  if (hash.has(obj)) return hash.get(obj)
  
  // 创建新对象或数组
  const result = Array.isArray(obj) ? [] : {}
  hash.set(obj, result)
  
  // 递归拷贝所有属性
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCloneSimple(obj[key], hash)
    }
  }
  
  return result
}

// ============ 测试用例 ============

console.log('\n========== 测试1：基本对象和数组 ==========')
const obj1 = {
  name: '张三',
  age: 25,
  hobbies: ['读书', '游泳'],
  address: {
    city: '北京',
    district: '朝阳区'
  }
}

const cloned1 = deepCloneComplete(obj1)
console.log('原对象:', obj1)
console.log('克隆对象:', cloned1)
console.log('是否是同一个对象:', obj1 === cloned1) // false
console.log('嵌套对象是否是同一个:', obj1.address === cloned1.address) // false

// 修改克隆对象，不影响原对象
cloned1.name = '李四'
cloned1.hobbies.push('跑步')
cloned1.address.city = '上海'
console.log('\n修改克隆对象后：')
console.log('原对象:', obj1)
console.log('克隆对象:', cloned1)

console.log('\n========== 测试2：循环引用 ==========')
const obj2 = { name: '对象A' }
obj2.self = obj2  // 循环引用自己

const cloned2 = deepCloneComplete(obj2)
console.log('原对象有循环引用:', obj2.self === obj2) // true
console.log('克隆对象也有循环引用:', cloned2.self === cloned2) // true
console.log('但不是同一个对象:', obj2 !== cloned2) // true

console.log('\n========== 测试3：Date 和 RegExp ==========')
const obj3 = {
  date: new Date('2024-01-01'),
  regex: /hello/gi
}

const cloned3 = deepCloneComplete(obj3)
console.log('原对象:', obj3)
console.log('克隆对象:', cloned3)
console.log('Date 是否独立:', obj3.date !== cloned3.date) // true
console.log('Date 值是否相同:', obj3.date.getTime() === cloned3.date.getTime()) // true
console.log('RegExp 是否独立:', obj3.regex !== cloned3.regex) // true

console.log('\n========== 测试4：Map 和 Set ==========')
const obj4 = {
  map: new Map([['key1', 'value1'], ['key2', { nested: true }]]),
  set: new Set([1, 2, { a: 3 }])
}

const cloned4 = deepCloneComplete(obj4)
console.log('原对象:', obj4)
console.log('克隆对象:', cloned4)
console.log('Map 是否独立:', obj4.map !== cloned4.map) // true
console.log('Set 是否独立:', obj4.set !== cloned4.set) // true

console.log('\n========== 测试5：Symbol 属性 ==========')
const sym = Symbol('test')
const obj5 = {
  [sym]: 'symbol value',
  normal: 'normal value'
}

const cloned5 = deepCloneComplete(obj5)
console.log('原对象:', obj5)
console.log('克隆对象:', cloned5)
console.log('Symbol 属性是否被拷贝:', cloned5[sym] === 'symbol value') // true

console.log('\n========== 测试6：null 和 undefined ==========')
const obj6 = {
  a: null,
  b: undefined,
  c: 0,
  d: false,
  e: ''
}

const cloned6 = deepCloneComplete(obj6)
console.log('原对象:', obj6)
console.log('克隆对象:', cloned6)

console.log('\n========== 测试7：复杂嵌套 ==========')
const obj7 = {
  level1: {
    level2: {
      level3: {
        level4: {
          value: '深层嵌套'
        }
      }
    }
  },
  array: [1, [2, [3, [4, [5]]]]]
}

const cloned7 = deepCloneComplete(obj7)
console.log('原对象:', JSON.stringify(obj7, null, 2))
console.log('克隆对象:', JSON.stringify(cloned7, null, 2))
console.log('深层对象是否独立:', obj7.level1.level2.level3.level4 !== cloned7.level1.level2.level3.level4)

console.log('\n========== 其他深拷贝方法对比 ==========')

// 方法1：JSON.parse(JSON.stringify()) - 简单但有限制
console.log('\n1. JSON 方法（有限制）：')
const jsonObj = { a: 1, b: { c: 2 } }
const jsonClone = JSON.parse(JSON.stringify(jsonObj))
console.log('适用场景：简单对象，没有函数、Date、RegExp、循环引用等')
console.log('原对象:', jsonObj)
console.log('克隆对象:', jsonClone)

// 方法2：structuredClone（浏览器和 Node.js 17+ 支持）
console.log('\n2. structuredClone（现代方法）：')
if (typeof structuredClone !== 'undefined') {
  const modernObj = { a: 1, b: { c: 2 }, date: new Date() }
  const modernClone = structuredClone(modernObj)
  console.log('原对象:', modernObj)
  console.log('克隆对象:', modernClone)
} else {
  console.log('当前环境不支持 structuredClone')
}

// 方法3：lodash 的 cloneDeep
console.log('\n3. lodash.cloneDeep（第三方库）：')
console.log('需要安装：npm install lodash')
console.log('使用：const _ = require("lodash"); _.cloneDeep(obj)')

console.log('\n========== 总结 ==========')
console.log(`
深拷贝的关键点：
1. ✅ 递归拷贝所有嵌套对象和数组
2. ✅ 处理循环引用（使用 WeakMap）
3. ✅ 处理特殊对象（Date、RegExp、Map、Set）
4. ✅ 拷贝 Symbol 属性
5. ✅ 正确处理 null 和 undefined

常见方法对比：
- JSON.parse(JSON.stringify())：简单但有限制
- structuredClone()：现代浏览器推荐
- 手写递归：面试常考，灵活可控
- lodash.cloneDeep：生产环境推荐
`)
