// function curry(fn, arg) {
//   var _this = this
//   var len = fn.length
//   var args = arg || []

//   return function () {
//     var _args = [...arguments].slice()
//     Array.prototype.unshift.apply(_args, args)
//     console.log(_args);
//     if (len > _args.length) {
//       return curry.call(_this, fn, _args)
//     }

//     return fn.apply(_this, _args)
//   }

// }
function curry(fn, args) {
  var ofArgs = args || []
  var len = fn.length
  var self = this
  // 
  return function (...ret) {
    // ret是后面传入的函数
    var currentArg = [...ofArgs, ...ret]
    console.log(currentArg);
    // 如果当前参数数组的长度小于fn的要求长度  那么继续递归
    if (len > currentArg.length) {
      return curry.call(self, fn, currentArg)
    }
    return fn.apply(self, currentArg)
  }
}

const add = function (a, b, c) {
  return a + b + c
}

const newFn = curry(add)

// newFn(1)(2)(3)
console.log(newFn(1)(2)(3));

// console.log(newFn(1));
// console.log(newFn(2)(3));