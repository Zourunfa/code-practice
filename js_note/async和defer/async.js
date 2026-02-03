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
  console.log(constr);
  console.log(arguments);
  // 将obj的原型指向构造函数的原型对象，这样obj就可以访问构造函数原型上的属性
  obj.__proto__ = constr.prototype
  // 执行构造函数
  constr.apply(obj, [...arguments].slice(1))
  return obj
}

// function New(){
//   var obj = {}
//   var Fn = [].shift.call(arguments)
//   Fn.prototype = obj.__proto__
//   obj.__proto__.Constructor = Fn


//   Fn.apply(obj,arguments)
//   return obj;

// }

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

console.log('son :', son)       // son : Parent { age: 18, name: 'lining', sayAge: [Function] }
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