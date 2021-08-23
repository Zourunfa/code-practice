// new 方式创建对象
let obj1 = new Object()

obj.name = 'sattre'
obj.fn = function () {
  console.log('nihao');
}


// 对象字面量创建

let obj2 = {
  a: 4,
  b: 3,
  fn: function () {
    console.log('zaijian');
  }
}

/**
 * 在介绍第三种的创建方法之前，我们应该要明白为什么还要用别的方法来创建对象，
 * 也就是第一种，第二种方法的缺点所在：它们都是用了同一个接口创建很多对象，会产生大量的重复代码，
 * 就是如果你有100个对象，那你要输入100次很多相同的代码。那我们有什么方法来避免过多的重复代码呢，
 * 就是把创建对象的过程封装在函数体内，通过函数的调用直接生成对象。
 * 
 */

//工厂模式
function Person(name, age) {
  const obj = {}
  obj.name = name
  obj.age = age
  obj.sayName = function () {
    return this.name
  }
}

var person1 = new Person('a', 123)
var person2 = new Person('b', 13)


/**
 * 在使用工厂模式创建对象的时候，我们都可以注意到，
 * 在createPerson函数中，返回的是一个对象。
 * 那么我们就无法判断返回的对象究竟是一个什么样的类型。
 * 于是就出现了第四种创建对象的模式。
 * 
 */

function People(name, age) {
  this.name = name
  this.age = age
  this.sayName = () => {
    return this.name
  }
}

var p1 = new People('sattre', 12)
var p2 = new People('bob', 55)

/**
 * 对比工厂模式，我们可以发现以下区别：

1.没有显示地创建对象

2.直接将属性和方法赋给了this对象

3.没有return语句

4.终于可以识别的对象的类型。对于检测对象类型
，我们应该使用instanceof操作符，我们来进行自主检测：

构造函数简化了工厂模式的操作过程, 并且通过实例化对象, 
可以知道该对象的标识, 能识别是被哪一个 构造函数 创造的, 使用instanceof 来判断是否属于某个构造函数的实例
 
注意：
但是, 构造函数内部存在方法, 方法就是对象, 
就意味着每次创建对象(实例)的时候就会重新创建方法, 重复的创建方法开辟了新的内存来储存
*/


// 原型模式

function person2(name, age) {
  person2.prototype.name = name
  person2.prototype.age = age
  person2.prototype.likes = ['apple', 'banana', 'watermelon']
  person2.prototype.sayname = () => {
    console.log(this.name)
  }
}
const p3 = new person2('dz', 23)
const p4 = new person2('dz1', 24)

p3.likes.pop() // -> 删除 watermelon
console.log(p3.name == p4.name) // -> true,  p4的属性覆盖了p3的属性
console.log(p3.likes) // -> ['apple', 'banana']
console.log(p4.likes) // -> ['apple', 'banana']

/**
 * 创建对象之后将构造函数 原型 上添加属性和方法, 这样的好处就是每一个实例都共享以同一个方法,
 * 避免了重复创建相同的方法, 但是有一个大问题就是, 大家都是共享的, 因此每一个实例都可能更改这个原型里面的属性,
 * 后面创建的对象包含的属性会覆盖上次一创建的对象的属性


 */


// 组合模式(构造函数模式+原型模式)
// 每个实例拥有自己的属性和方法, 以及共享相同的方法, 用的较多一种模式

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.protoytype.sayname = () => {
  console.log(this.name)
}

const p1 = new Person('dz', 23)
const p2 = new Person('dz1', 24)
console.log(p1.name, p2.name)// dz dz1



// 动态原型模式

function Person(name, age) {
  this.name = name
  this.age = age
  if (typeof this.sayname != 'function') {
    Person.prototype.sayname = () => {
      console.log(this.name)
    }
  }
}
const p1 = new Person('dz', 23)
console.log(p1.sayname) // -> dz

/**
 * 这里只在sayname 方法不存在的情况下才添加到原型中, 只会在初次调用 构造函数时才会执行.
这样的代码, 使得每个对象的name、age、sex都是各自的(不共有), 然后函数写在原型上, 就又是共享的.
注意: 使用动态原型模式时, 不能 使用
对象字面量重写原型. 如果在已经创建了实例的情况下重写原型, 那么就会切断现有实例与新原型之间的联系.


 */

// ES6 创建对象


class Person {
  constructor(name, age) { // constructor构造函数
    this.name = name
    this.age = age
  }

  sayname() { //原型上的
    console.log(this.name)
  }
  static sayAge() {
    console.log(this.age)
  }
}

const per = new Person('dz', 23)
per.sayname() // -> dz
Person.sayAge() // 23
/**
 * constructor是构造方法,类似构造函数, 定义这个方法里面的内容都是实例自身的属性和方法, 不会被其他实例共享, 而写在外面的sayname表示原型上的方法, 是会被共享的.
static 表示静态，加了static的函数不会挂载到prototype 上,而是挂载到 class类 上, 类似于:


 */

// Promise.resolve(...)
// Math.max(...)
