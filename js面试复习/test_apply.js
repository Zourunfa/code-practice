

// Function.prototype.myApply = function (obj) {
//   var obj = obj || window
//   // console.log(this);
//   obj.fn = this
//   // console.log(obj);
//   // console.log(arguments);
//   var args = [...arguments].slice(1)
//   // console.log(...args.flat());
//   var res = obj.fn(...args.flat())
//   delete obj.fn
//   return res

// }

// // let a = {
// //   value: 1
// // }
// function getValue(name, age) {
//   console.log(name)
//   console.log(age)
//   console.log(this.value)
// }
// // getValue.myApply(a, ['zhangshan', '12'])



Function.prototype.myBind = function (obj) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    var func = this
    console.log(func);
    var args = [...arguments].slice(1)
    console.log(args);

    return function fn() {
        // 如果this 是fn的实例
        if (this instanceof fn) {
            return new func(...args, ...arguments)
        }
        return func.apply(obj, args.concat(...arguments))
    }
}


this.x = 9;    // 在浏览器中，this 指向全局的 "window" 对象
var module = {
    x: 81,
    getX: function () { return this.x; }
};


console.log(module.getX());

var retrieveX = module.getX;
console.log(retrieveX());
// 返回 9 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.myBind(module);
// 81
console.log(boundGetX());



// Function.prototype.My_call = function(context){
//     var context = context || window

//     context.fn = this

//     var arg = [...arguments].slice(1)

//     var result = context.fn(arg)

//     delete context.fn

//     return result

// }


// Function.prototype.My_apply = function (context) {
//     var context = context || window

//     context.fn = this

//     var arg = [...arguments].slice(1)

//     console.log(arg);
//     var result = context.fn(...arg.flat())

//     delete context.fn

//     return result

// }


// Function.prototype.My_bind = function(context){
//     if(typeof this !== 'function'){
//         throw new TypeError('err')
//     }

//     var _this = this 

//     var args = [...arguments].slice(1)


//     return function F(){
//         if(this instanceof F){
//             return new _this(...args,...arguments)
//         }
//         return _this.apply(context,args.concat(...arguments))
//     }


// }


// Function.prototype.myApply = function (context) {
//     var context = context || window
//     context.fn = this

//     const args = [...arguments].slice(1)

//     const res = context.fn(...args.flat())

//     delete context.fn

//     return res

// }

// var a = [1, 2, 3];
// var b = [4, 5, 6];

// // Reflect.apply(Array.prototype.push, a, b)
// Array.prototype.push.myApply(a, b);
// console.log(a);


