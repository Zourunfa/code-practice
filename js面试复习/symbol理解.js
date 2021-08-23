let sy = Symbol()
console.log(typeof sy); //symbol

// 两个Symbol()对象永远不相等
let sy1 = Symbol()
console.log(sy === sy1); //false

// Symbol对象是不能够压入属性的
sy.name = 'mySy'
console.log(sy.name); //undefined

console.log(sy.toString()); //Symbol()
// console.log(sy.description);

// // 使用Symbol.for定义系统会帮你记录
// let a = Symbol.for('hdcms')
// let b = Symbol.for('hdcms')
// console.log(a); //Symbol(hdcms)
// console.log(a.description); //hdcms
// console.log(a === b);
// //true 事实证明用Symbol.for定义的相同描述的两个对象是相等的
// // 不会重复创建

// let c = Symbol('qwe')
// console.log(Symbol.keyFor(a)); //hdcms
// console.log(Symbol.keyFor(c)); //undefined



// Symbol的使用


// 使用Symbol解决字符串耦合问题
let grade = {
  '张明': { js: 100, css: 89 },
  '张明': { js: 59, css: 23 }
}
console.log(grade); //{张明: {…}} 只会有一个，前面的会被覆盖

// 用symbol

let user1 = {
  name: '张明',
  key: Symbol()
}
let user2 = {
  name: '张明',
  key: Symbol()
}

let newGrade = {
  [user1.key]: { js: 100, css: 89 },
  [user2.key]: { js: 59, css: 23 }
}
console.log(newGrade[user2.key]);



// class Cache {
//   static data = {}

//   static set(name, value) {
//     return (this.data[name] = value)
//   }

//   static get(name) {
//     return this.data[name]
//   }
// }

// Cache.set('patent', 'plane')
// console.log(Cache.get('patent'));

// let goods = {
//   name: 'banana',
//   desc: '商品'
// }

// let cart = {
//   name: 'banana',
//   desc: '购物车'
// }

// Cache.set('apple', goods)
// Cache.set('apple', cart)
// // 也被覆盖了
// console.log(Cache.get('apple')); //{name: "banana", desc: "购物车"}


// 要想不被覆盖，使用Symbol
// let goods = {
//   name: 'banana',
//   desc: '商品',
//   key: Symbol('商品')
// }

// let cart = {
//   name: 'banana',
//   desc: '购物车',
//   key: Symbol('购物车')
// }
// Cache.set(goods.key, goods)
// Cache.set(cart.key, cart)
// // 也被覆盖了
// console.log(Cache.get(cart.key)); //{name: "banana", desc: "购物车", key: Symbol(购物车)}


// 扩展类型和对象类型保护
// let symbol = Symbol('这是一个sy')
// let af = {
//   name: '阿锋',
//   [symbol]: 'afengbuzhidao'
// }

// 注意symbol类型是不能用for in 和for of进行遍历的
for (let key in af) {
  console.log(key); //name
}
for (let key of Object.keys(af)) {
  console.log(key);//name
}

// // 想要遍历symbol属性必须换一个方法

// 下面的只能遍历symbol属性
for (const key of Object.getOwnPropertySymbols(af)) {
  console.log(key); //Symbol(这是一个sy)
}

// 想要遍历全部属性必须使用静态方法 Reflect.ownKeys
for (let key of Reflect.ownKeys(af)) {
  console.log(key);
}


// let site = Symbol('这是一个Symbol')

// class User {
//   constructor(name) {
//     this.name = name
//     this[site] = "阿锋不知道"
//   }
//   getName() {
//     return `${this[site]} ${this.name}`
//   }

// }


// let af = new User('af')
// console.log(af.getName());


// for (let key in af) {
//   console.log(key); //不能遍历到site属性,因为symbol有隐藏属性功能
// }


// 利用symbol创建私有变量

let createPrivate = (
  function () {
    const _private = Symbol('sy')
    class createPv {
      constructor(value) {
        this[_private] = value
      }
      getValue() {
        return this[_private]
      }
      setValue(value) {
        return this[_private] = value
      }
    }
    return createPv
  }
)();

let p1 = new createPrivate('1')

console.log(p1._private);
console.log(p1.getValue());
console.log(p1.setValue('蝴蝶效应'));
console.log(p1.getValue());
