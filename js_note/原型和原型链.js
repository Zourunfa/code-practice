/**
 * 每个实例对象都会有__proto__属性,其被称为隐式原型
 * 每一个构造函数都有prototype属性，被称为显示原型
 * 每一个实例对象的隐式原型__proto__属性指向自身构造函数的显式原型prototype
 * 每一个构造函数的prototype也是一个对象，它的__proto__属性又指向它上一级的构造函数（原型链）
 */


// ============ 实际例子演示 ============

// 1️⃣ 定义一个构造函数
function Person(name, age) {
  this.name = name
  this.age = age
}

// 在构造函数的原型上添加方法
Person.prototype.sayHello = function() {
  console.log(`你好，我是${this.name}，今年${this.age}岁`)
}

// 2️⃣ 创建实例对象
const person1 = new Person('张三', 25)
const person2 = new Person('李四', 30)

console.log('========== 验证第1条：每个实例对象都有 __proto__ 属性 ==========')
console.log('person1.__proto__:', person1.__proto__)
console.log('person2.__proto__:', person2.__proto__)

console.log('\n========== 验证第2条：每个构造函数都有 prototype 属性 ==========')
console.log('Person.prototype:', Person.prototype)

console.log('\n========== 验证第3条：实例的 __proto__ 指向构造函数的 prototype ==========')
console.log('person1.__proto__ === Person.prototype:', person1.__proto__ === Person.prototype) // true
console.log('person2.__proto__ === Person.prototype:', person2.__proto__ === Person.prototype) // true

console.log('\n========== 验证第4条：原型链 - prototype 也是对象，它的 __proto__ 指向上一级 ==========')
console.log('Person.prototype.__proto__ === Object.prototype:', Person.prototype.__proto__ === Object.prototype) // true
console.log('Object.prototype.__proto__:', Object.prototype.__proto__) // null (原型链的顶端)

// ============ 完整的原型链演示 ============
console.log('\n========== 完整原型链演示 ==========')

// 定义一个父类
function Animal(type) {
  this.type = type
}

Animal.prototype.eat = function() {
  console.log(`${this.type}正在吃东西`)
}

// 定义一个子类
function Dog(name) {
  Animal.call(this, '狗')
  this.name = name
}

// 让 Dog 继承 Animal
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = function() {
  console.log(`${this.name}在汪汪叫`)
}

// 创建实例
const myDog = new Dog('旺财')

console.log('\n原型链关系：')
console.log('myDog.__proto__ === Dog.prototype:', myDog.__proto__ === Dog.prototype) // true
console.log('Dog.prototype.__proto__ === Animal.prototype:', Dog.prototype.__proto__ === Animal.prototype) // true
console.log('Animal.prototype.__proto__ === Object.prototype:', Animal.prototype.__proto__ === Object.prototype) // true
console.log('Object.prototype.__proto__:', Object.prototype.__proto__) // null

console.log('\n原型链查找过程：')
myDog.bark()  // 在 Dog.prototype 上找到
myDog.eat()   // 在 Animal.prototype 上找到
console.log(myDog.toString()) // 在 Object.prototype 上找到

// ============ 可视化原型链 ============
console.log('\n========== 原型链可视化 ==========')
console.log(`
原型链结构：
myDog (实例对象)
  ↓ __proto__
Dog.prototype (对象)
  ↓ __proto__
Animal.prototype (对象)
  ↓ __proto__
Object.prototype (对象)
  ↓ __proto__
null (原型链终点)
`)

// ============ 属性查找机制 ============
console.log('\n========== 属性查找机制演示 ==========')

function Car(brand) {
  this.brand = brand
}

Car.prototype.color = '白色'
Car.prototype.getInfo = function() {
  return `这是一辆${this.color}的${this.brand}`
}

const car1 = new Car('宝马')
const car2 = new Car('奔驰')
car2.color = '黑色' // 在实例上添加 color 属性

console.log('car1.brand:', car1.brand) // '宝马' - 在实例自身找到
console.log('car1.color:', car1.color) // '白色' - 在原型上找到
console.log('car1.getInfo():', car1.getInfo()) // 在原型上找到方法

console.log('car2.brand:', car2.brand) // '奔驰' - 在实例自身找到
console.log('car2.color:', car2.color) // '黑色' - 在实例自身找到（优先级高于原型）
console.log('car2.getInfo():', car2.getInfo())

console.log('\ncar1.hasOwnProperty("brand"):', car1.hasOwnProperty('brand')) // true
console.log('car1.hasOwnProperty("color"):', car1.hasOwnProperty('color')) // false
console.log('car2.hasOwnProperty("color"):', car2.hasOwnProperty('color')) // true

// ============ 构造函数本身的原型链 ============
console.log('\n========== 构造函数本身也有原型链 ==========')
console.log('Person.__proto__ === Function.prototype:', Person.__proto__ === Function.prototype) // true
console.log('Function.prototype.__proto__ === Object.prototype:', Function.prototype.__proto__ === Object.prototype) // true

console.log('\n构造函数的原型链：')
console.log(`
Person (构造函数)
  ↓ __proto__
Function.prototype
  ↓ __proto__
Object.prototype
  ↓ __proto__
null
`)

// ============ 总结图示 ============
console.log('\n========== 完整关系图 ==========')
console.log(`
实例对象 person1
  ├─ name: '张三' (自身属性)
  ├─ age: 25 (自身属性)
  └─ __proto__ ──→ Person.prototype
                      ├─ sayHello: function (原型方法)
                      ├─ constructor: Person
                      └─ __proto__ ──→ Object.prototype
                                          ├─ toString: function
                                          ├─ hasOwnProperty: function
                                          └─ __proto__ ──→ null

构造函数 Person
  ├─ prototype ──→ Person.prototype (显式原型)
  └─ __proto__ ──→ Function.prototype (隐式原型)
`)
