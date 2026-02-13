function a() {
  console.log('你好')
}

// 上面函数既是一个构造函数，也是一个普通函数
const res1 = new a() //被当作构造函数使用
const res2 = a() //被当作普通函数使用

function b() {
  // 可以通过new.target 属性判断是否被当作构造函数使用
  if (new.target) {
    console.log('你好，我是一个构造函数')
  } else {
    console.log('你好，我是一个普通函数')
  }
}

class C {
  constructor() {
    console.log('你好，我是一个构造函数')
  }
}

// 用类名创造的构造函数只能被new 不能使用C()执行

function myNew(constructor, ...args){
  // 创建一个空对象 并继承构造函数的原型
  const obj = Object.create(constructor.prototype);
  // 调用构造函数，将this绑定到创建的对象
  const result = constructor.apply(obj, args);
  // 判断构造函数的返回值类型 如果构造函数的返回是对象 则返回构造函数 如果不是 则返回新创建的对象
  return result instanceof Object ? result : obj;
}


// ============ 详细解释第三行代码 ============

/**
 * return result instanceof Object ? result : obj;
 * 
 * 这行代码的作用：判断构造函数的返回值类型，决定 new 操作最终返回什么
 */

console.log('\n========== 为什么需要这个判断？ ==========')

// 在 JavaScript 中，构造函数可以有显式的 return 语句
// new 操作符的行为会根据构造函数的返回值类型而不同

// 情况1：构造函数没有 return 或 return 基本类型
function Person1(name) {
  this.name = name
  // 没有 return，默认返回 this（即新创建的对象）
}

// 情况2：构造函数 return 基本类型（会被忽略）
function Person2(name) {
  this.name = name
  return 123  // 返回数字，会被忽略
}

// 情况3：构造函数 return 对象（会替代新创建的对象）
function Person3(name) {
  this.name = name
  return { age: 30 }  // 返回对象，会替代 this
}

const p1 = new Person1('张三')
const p2 = new Person2('李四')
const p3 = new Person3('王五')

console.log('p1:', p1)  // { name: '张三' } - 返回新创建的对象
console.log('p2:', p2)  // { name: '李四' } - 基本类型被忽略，返回新创建的对象
console.log('p3:', p3)  // { age: 30 } - 返回构造函数中的对象，name 丢失了！

console.log('\n========== 逐步拆解这行代码 ==========')

// return result instanceof Object ? result : obj;
// 
// 1. result: 构造函数执行后的返回值
// 2. instanceof Object: 判断 result 是否是对象类型
// 3. ? result : obj: 三元表达式
//    - 如果是对象，返回 result（构造函数的返回值）
//    - 如果不是对象，返回 obj（新创建的对象）

console.log('\n========== instanceof Object 判断什么？ ==========')

// instanceof Object 会判断是否是对象类型（包括数组、函数、普通对象等）
console.log('对象:', {} instanceof Object)           // true
console.log('数组:', [] instanceof Object)           // true
console.log('函数:', (function(){}) instanceof Object) // true
console.log('日期:', new Date() instanceof Object)   // true

console.log('\n基本类型:')
console.log('数字:', 123 instanceof Object)          // false
console.log('字符串:', "abc" instanceof Object)      // false
console.log('布尔:', true instanceof Object)         // false
console.log('null:', null instanceof Object)         // false
console.log('undefined:', undefined instanceof Object) // false

console.log('\n========== 完整示例：模拟 new 操作符 ==========')

function myNewDetailed(constructor, ...args) {
  console.log('\n--- 步骤1: 创建新对象并继承原型 ---')
  const obj = Object.create(constructor.prototype)
  console.log('创建的新对象 obj:', obj)
  
  console.log('\n--- 步骤2: 执行构造函数，绑定 this ---')
  const result = constructor.apply(obj, args)
  console.log('构造函数返回值 result:', result)
  console.log('result 的类型:', typeof result)
  console.log('result instanceof Object:', result instanceof Object)
  
  console.log('\n--- 步骤3: 判断返回值类型 ---')
  if (result instanceof Object) {
    console.log('✓ result 是对象，返回 result')
    return result
  } else {
    console.log('✗ result 不是对象（或没有返回值），返回新创建的 obj')
    return obj
  }
}

// 测试1：没有 return
console.log('\n========== 测试1：构造函数没有 return ==========')
function Dog(name) {
  this.name = name
  this.type = '狗'
}
const dog1 = myNewDetailed(Dog, '旺财')
console.log('最终结果:', dog1)

// 测试2：return 基本类型
console.log('\n========== 测试2：构造函数 return 基本类型 ==========')
function Cat(name) {
  this.name = name
  return '我是字符串'  // 基本类型会被忽略
}
const cat1 = myNewDetailed(Cat, '咪咪')
console.log('最终结果:', cat1)

// 测试3：return 对象
console.log('\n========== 测试3：构造函数 return 对象 ==========')
function Bird(name) {
  this.name = name
  return { species: '鹦鹉', canFly: true }  // 返回对象会替代 this
}
const bird1 = myNewDetailed(Bird, '小鸟')
console.log('最终结果:', bird1)

// 测试4：return null（特殊情况）
console.log('\n========== 测试4：构造函数 return null ==========')
function Fish(name) {
  this.name = name
  return null  // null 不是对象（instanceof 返回 false）
}
const fish1 = myNewDetailed(Fish, '小鱼')
console.log('最终结果:', fish1)

console.log('\n========== 总结 ==========')
console.log(`
return result instanceof Object ? result : obj;

这行代码的核心逻辑：
1. 如果构造函数返回了一个对象（数组、函数、普通对象等）
   → 使用构造函数的返回值，忽略新创建的对象

2. 如果构造函数没有返回值，或返回基本类型（数字、字符串、布尔、null、undefined）
   → 使用新创建的对象

这就是 new 操作符的标准行为！
`)

// ============ 实际应用场景 ============
console.log('\n========== 实际应用：单例模式 ==========')

function Singleton(name) {
  // 如果已经有实例，直接返回已有实例
  if (Singleton.instance) {
    return Singleton.instance  // 返回对象，会替代新创建的对象
  }
  
  this.name = name
  Singleton.instance = this
}

const s1 = new Singleton('第一个')
const s2 = new Singleton('第二个')

console.log('s1 === s2:', s1 === s2)  // true - 都是同一个实例
console.log('s1.name:', s1.name)      // '第一个'
console.log('s2.name:', s2.name)      // '第一个'
