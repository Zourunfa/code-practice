// Function.prototype.myBind = function (fn, ...args) {

//   if (typeof fn !== 'function') {
//     throw new TypeError('err')
//   }

//   let self = this;

//   let newFn = function (...ret) {
//     return self.apply(fn, [...args, ...ret])
//   }

//   newFn.prototype = Object.create(self.prototype)
//   newFn.prototype.constructor = self

//   return newFn;
// }

// function func(...arg) {
//   console.log('答案是我，我是func');
//   console.log(this);//this已经改变，指向{a:1}
//   console.log(arg);//{1,2,3,4,5,6,7,8}
//   console.log('答案是我，我是func');
// }

// func.prototype.miaov = function () {
//   console.log(this);
// }

// let newFunc2 = func.myBind({ a: 1 }, 1, 2, 3, 4);
// var f2 = new newFunc2(5, 6, 7, 8)
// f2.miaov()

// Function.prototype.myBind = function(obj){
//   if(typeof this !== 'function'){
//       throw new TypeError('Error')
//   }
//   var _this = this
//   console.log(_this);
//   var args = [...arguments].slice(1)
//   console.log(args);

//   return function fn(){
//   // 如果this 是fn的实例
//       if(this instanceof fn){
//           return new _this(...args,...arguments)
//       }
//       return _this.apply(obj,args.concat(...arguments))
//   }
// }

// Function.prototype.myBind = function (fn, ...args) {
//   // console.log(typeof this);
//   if (typeof this !== 'function') {
//     throw new TypeError('err')
//   }

//   let self = this;

//   let newFn = function (...ret) {
//     return self.apply(fn, [...args, ...ret])
//   }

//   newFn.prototype = Object.create(self.prototype)
//   newFn.prototype.Constructor = self

//   return newFn;
// }

Function.prototype.myBind = function (obj, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('err');
  }
  let self = this;
  let newFn = function (...ret) {
    return self.apply(obj, [...args, ...ret]);
  };

  newFn.prototype = Object.create(self.prototype);
  newFn.prototype.Constructor = self;
  return newFn;
};

this.x = 9; // 在浏览器中，this 指向全局的 "window" 对象
var module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

module.getX(); // 81

var retrieveX = module.getX;
console.log(retrieveX());
// 返回 9 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.myBind(module);

// 81
console.log(boundGetX());

// let fn = function () {

// }

// console.log(Object.prototype.toString.call(fn));
