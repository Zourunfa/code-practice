/** 
 *  高阶函数：就是那种输入参数里面有一个或者多个函数，
输出的也是函数的函数，在这个js里面主要是利用闭包的实现
最简单的就是经常看到的在一个函数内部输出另一个函数

*/
// debugger
// var add = function () {
//   var num = 0;
//   return function (a) {
//     return num = num + a;
//   }
// }
// console.log(add()(1));   // 1
// console.log(add()(2));     // 2


// var add = function () {
//   var num = 0;
//   return function (a) {
//     return num = num + a;
//   }
// }
// // console.log(add(1));
// var adder = add();
// console.log(adder(1)); // 1
// adder(2); // 3






// debugger
// const memo = function (fn) {
//   const cache = {}

//   return function (...args) {
//     // console.log(args);
//     const _args = JSON.stringify(args)
//     return cache[_args] || (cache[_args] = fn.apply(fn, args))
//   }
// }








// function memo(fn) {
//   const cache = {}

//   return function (...args) {
//     const _args = JSON.stringify(args)
//     return cache[_args] || (cache[_args] = fn.apply(fn, args))
//   }
// }


// function memo(fn) {
//   const cache = {}

//   return function (...args) {
//     const _args = JSON.stringify(args)
//     return cache[_args] || (cache[_args] = fn.apply(fn, args))
//   }
// }
var add = function (a) {
  return a + 1
}


function memo(fn) {
  const cache = {}
  return function (...ret) {
    let key = JSON.stringify(ret)
    return cache[key] || (cache[key] = fn.apply(fn, [...ret]))
  }
}

const adder = memo(add)
console.log(adder);
console.log(adder(1));
console.log(adder(1));
console.log(adder(3));
console.log(adder(3));