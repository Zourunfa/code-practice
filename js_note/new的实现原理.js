/**
 * 步骤
 *
 * 1,创建一个新的对象
 * 2，将构造函数的作用域指向这个对象，改变this的指向
 * 3，执行构造函数中的代码
 * 4，返回这个新的对象
 *
 */

//  function New() {
//   // 创建一个新的对象
//   const obj = {}
//   // 获取第一个参数，arguments是类数组，不可直接调用shift方法
//   //此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
//   const Constructor = [].shift.call(arguments)
//   // 将obj的原型指向构造函数的原型对象，这样obj就可以访问构造函数原型上的属性
//   obj.__proto__ = Constructor.prototype
//   // 将构造函数的this指向obj，这样obj就可以访问到构造函数中的属性
//   Constructor.apply(obj, arguments);
//   // 返回 obj
//   return obj;
// }

function New() {
  // 创建一个新对象
  const obj = {}
  // 获取第一个参数即为构造函数
  const constr = [...arguments].shift()
  console.log(constr)
  console.log(arguments)
  // 将obj的原型指向构造函数的原型对象，这样obj就可以访问构造函数原型上的属性
  obj.__proto__ = constr.prototype
  // 执行构造函数
  constr.apply(obj, [...arguments].slice(1))
  return obj
}

function New() {
  // 创建一个新对象
  const obj = {}
  // 获取第一个参数即为构造函数
  const constr = [...arguments].shift()
  // 将obj的原型指向构造函数的原型对象，这样obj就可以访问构造函数原型上的属性
  obj.__proto__ = constr.prototype
  // 执行构造函数
  constr.apply(obj,[...arguments].slice(1))
  return obj
}

function Parent(age, name) {
  this.age = age
  this.name = name
  this.sayAge = function () {
    console.log('this.age :', this.age)
  }
}
Parent.prototype.sayName = function () {
  console.log('this.name :', this.name)
}

let son = new Parent(18, 'lining')
let newSon = New(Parent, 18, 'lining')

console.log('son :', son) // son : Parent { age: 18, name: 'lining', sayAge: [Function] }
console.log('newSon :', newSon)

// function New() {
//   const obj = {}

//   const fn = [].shift.call(arguments)

//   obj.__proto__ = fn.prototype
//   // obj.__proto__.constructor = fn

//   console.log(arguments);
//   fn.apply(obj, arguments)

//   return obj
// }

// new 最新完善
function myNew(constructor, ...args) {
  // 创建一个新对象
  const obj = {}
  // 将obj的原型指向构造函数的原型对象，这样obj就可以访问构造函数原型上的属性
  obj.__proto__ = constructor.prototype
  // 使用call方法调用构造函数，并将创建的空对想作为上下文，实际上执行了构造函数
  let result = constructor.call(obj, ...args)
  // 如果构造函数没有显式返回一个对象，则返回这个新创建的对象实例
  if (result && (typeof result === 'object' || typeof result === 'function')) {
    return result
  }
  return obj
}


function deepCloneComplete(obj, hash = new WeakMap()){
  // 处理null和undefined
  if(obj === null)
    return null
  if(obj === undefined)
    return undefined

  // 处理基本数据类型（number string boolean symbol bigint）
  if(typeof obj !== 'object')
    return obj
  // 处理date对象
  if(obj instanceof Date)
    return new Date(obj)
  // 处理 RegExp 对象
  if(obj instanceof RegExp)
    return new RegExp(obj)
  // 处理函数（函数一般不需要深拷贝 直接返回引用）
  if(typeof obj === 'function')
    return obj

  // 处理循环引用（使用WeakMap存储已经拷贝的对象）
  if(hash.has(obj))
    return hash.get(obj)

  // 处理Map
  if(obj instanceof Map){
    const result = new Map()
    hash.set(obj,result)
    obj.forEach((value,key)=>{
      result.set(key, deepCloneComplete(value,hash))
    })
    return result
  }

  if (obj instanceof Set){
    const result = new Set()
    hash.set(obj,result)
    obj.forEach(value =>{
      result.add(deepCloneComplete(value,hash))
    })
    return result
  }
  // 处理数组和普通对象
  const result = Array.isArray(obj) ? [] : {}
  // 将当前对象存入hash 用于处理循环引用
  hash.set(obj,result)

  Reflect.ownKeys(obj).forEach(key=>{
    result[key] = deepCloneComplete(obj[key],hash)
  })
  return result

}

function myNew(constructor,...args){
  const obj = {}
  obj.__proto__ = constructor.prototype
  let result = constructor.call(obj,...args)
  if(result && (typeof result === 'object' || typeof result === 'function')){
    return result 
  }
  return obj
}

function deepCloneSimple(obj , hash = new WeakMap){
  if(typeof obj === 'null' || typeof obj === 'undefined'){
    return obj
  }
  if(obj instanceof Date){
    return new Date(obj)
  }
  if( obj instanceof RegExp){
    return new RegExp(obj)
  }

  if(hash.has(obj)){
    return hash.get(obj)
  }
  let result
  if(obj instanceof Map){
    result = new Map()
    hash.set(obj, result)
    obj.forEach((value,key)=>{
      result.set(key, deepCloneComplete(value,hash))
    })
  }

  if(obj instanceof Set){
    result = new Set()
    hash.set(obj, result)
    obj.forEach((value,key)=>{
      result.add(deepCloneComplete(value,hash))
    })   
  }

  result = Array.isArray(obj) ? [] : {}
  
  Reflect.ownKeys(obj).forEach(key=>{
    result[key] = deepCloneComplete(obj[key],hash)
  })
  return result
}