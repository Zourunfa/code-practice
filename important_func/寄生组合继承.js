// 组合继承
function Animal(name) {
  this.name = name
  this.colors = ['black', 'white']
}

Animal.prototype.getName = function () {
  return this.name
}

function Dog(name, age) {
  Animal.call(this, name)
  this.age = age
}

Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

let dog1 = new Dog('奶昔', 2)
dog1.colors.push('brown')
let dog2 = new Dog('哈赤', 1)
console.log(dog2)
// { name: "哈赤", colors: ["black", "white"], age: 1 }


/**
 * 组合继承已经相对完善了，但还是存在问题，它的问题就是调用了2次父类构造函数
 * 第一次是在 new Animal()  第二次是在Animal.call()这里
 *
 * 所以解决方案就是不直接调用父类构造函数给子类原型赋值，而是通过创建空函数F获取
 * 父类原型的副本
 *
 * 寄生组合继承写法上和组合继承基本类似
 * 
 * 
- Dog.prototype =  new Animal()
- Dog.prototype.constructor = Dog

+ function F() {}
+ F.prototype = Animal.prototype
+ let f = new F()
+ f.constructor = Dog
+ Dog.prototype = f

 */


// 稍微封装一下
function object(o) {
  function F() {

  }
  F.prototype = o
  return new F()
}

function inherit(child, parent) {
  let prototype = object(parent.prototype)
  prototype.constructor = child
  child.prototype = prototype
}

inherit(Dog, Animal)



// 如果你嫌弃上面的代码太多了，
// 还可以基于组合继承的代码改成最简单的寄生式组合继承：

/**
 *
- Dog.prototype =  new Animal()
- Dog.prototype.constructor = Dog

+ Dog.prototype =  Object.create(Animal.prototype)
+ Dog.prototype.constructor = Dog

 *
 *
 */




