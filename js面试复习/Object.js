



// Object.getOwnPropertyDescripter()

// 方法返回指定对象上有一个自有属性
// 对应的描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上查找的属性）

const obj = {
  property1:42
}

const descriptor = Object.getOwnPropertyDescriptor(obj,'property1')
console.log(descriptor.configurable);  //true
console.log(descriptor.value); //42


/* 
参数：
 obj:需要查找的目标对象
 prop:目标对象内属性名称
**/

// Object.getOwnPropertyDescriptors  (加了s)

// 作用：此方法用来获取一个对象的所有自身属性的描述符
// 参数只有一个那就是目标对象



// Object.getPrototypeOf()
//  此方法返回指定对象的原型prototype

const prototype1 = {}
const object1 = Object.create(prototype1)

console.log(Object.getPrototypeOf(object1) === prototype1); // true




// Object hasOwnProperty()
// 方法会返回一个布尔值，知识对象自身属性石佛那个具有指定的属性

const obj1 = {}
obj1.a = 1;
console.log(obj1.hasOwnProperty('a'));







