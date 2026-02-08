// const curry = function(fn){
//   var args = [].slice.call(arguments,1)

//   return function(){
//     // [].slice.call(arguments)能将具有length属性的对象转成数组。
//     let newArgs = args.concat([].slice.call(arguments))
//     return fn.apply(this,newArgs)
//   }
// }
// 柯里化是一种将使用多个参数的一个函数转化为一系列使用一个参数的函数的技术

// debugger

// function sub_curry(fn){
//   let arg = [...arguments].slice(1)
//   console.log(arg);
//   // console.log([...arguments]);
//   return function(){
//     let newArg = arg.concat([...arguments].slice())
//     console.log(newArg);
//     return fn.apply(this,newArg)
//   }

// }

// function add(a, b) {
//   return a + b;
// }

// 或者
// var addCurry = curry(add, 1);
// console.log(addCurry(2)); // 3

// function curry(fn,length){
//   length = length || fn.length
//   console.log(length);
//   console.log(arguments.length);
//   return function(){
//     if(arguments.length < length){
//       var combined = [fn].concat([...arguments].slice())
//       console.log(combined);
//       return curry(sub_curry.apply(this,combined),length - arguments.length)
//     }else{
//       return fn.apply(this,arguments)
//     }
//   }
// }

// var fn = curry(function(a, b, c) {
//   return [a, b, c];
// });

// fn("a")("b")("c") // ["a", "b", "c"]

// debugger
// function curry(fn, args) {
//   var length = fn.length;
//   console.log( length);
//   args = args || [];

//   return function() {

//       var _args = args.slice(0)

//       var arg, i;
//           console.log(_args);

//       for (i = 0; i < arguments.length; i++) {

//           arg = arguments[i];

//           _args.push(arg);

//       }
//         console.log(_args);
//       if (_args.length < length) {
//           return curry.call(this, fn, _args);
//       }
//       else {
//           return fn.apply(this, _args);
//       }
//   }
// }

// var fn = curry(function(a, b, c) {
//   console.log([a, b, c]);
// });

// // fn("a", "b", "c") // ["a", "b", "c"]
// // fn("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]

// debugger
// 支持多参数传递
// function progressCurrying(fn, args) {

//   var _this = this
//   var len = fn.length;
//   var args = args || [];

//   return function() {
//       var _args = [...arguments].slice()
//       console.log(_args );
//       Array.prototype.push.apply(_args, args);
//       // args.reserve()
//       // console.log(_args);

//       // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
//       if (_args.length < len) {
//           return progressCurrying.call(_this, fn, _args);
//       }

//       // 参数收集完毕，则执行fn
//       return fn.apply(this, _args);
//   }
// }

// var fn = progressCurrying(function(a, b, c) {
//   console.log([a, b, c]);
// });

// fn("a")("b")("c") // ["a", "b", "c"]

// var fn2 = progressCurrying(function(a,b,c){
//   return a+b+c;
// })

// console.log(fn2(2)(3)(4));

// function currying(fn, args) {
//   var _this = this
//   var len = fn.length
//   var args = args || [];

//   return function () {

//     var _args = [...arguments].slice()
//     console.log(_args);
//     Array.prototype.unshift.apply(_args, args)
//     console.log(_args);

//     if (_args.length < len) {
//       return currying.call(_this, fn, _args)
//     }
//     return fn.apply(this, _args)

//   }

// }

var fn = currying(function (a, b, c) {
  console.log([a, b, c])
})

fn('a')('b')('c') // ["a", "b", "c"]
// function currying(fn, args) {
//   var _this = this
//   var len = fn.length
//   var args = args || [];

//   return function () {
//     console.log(args);
//     // console.log(arguments, [...arguments]);
//     var _args = [...arguments].slice()
//     console.log(_args);
//     Array.prototype.unshift.apply(_args, args)
//     console.log(_args);

//     if (len > _args.length) {
//       return currying.call(_this, fn, _args)
//     }
//     return fn.apply(fn, _args)
//   }
// }

function currying(fn, arg) {
  let _this = this
  let args = arg || []
  let len = fn.length

  return function () {
    let _args = [...arguments].slice()

    Array.prototype.unshift.apply(_args, args)

    if (len > _args.length) {
      return currying.call(_this, fn, _args)
    }

    return fn.apply(this, _args)
  }
}

function currying(fn) {
  return function curry(arg) {
    if (fn.length < arg.length) {
      return fn.apply(this, arg)
    } else {
      return function (...moreArgs) {
        return curry.apply(this, moreArgs)
      }
    }
  }
}

function curringHua(fn){
  return function curry(...args){
    if(fn.length > args.length){
      return fn.apply(this, arg)
    } else{
      return function (...moreArgs){
        return curry.apply(this, moreArgs)
      }
    }
  }
}


function currying2(fn){
  return function curry(...args){
    if (fn.length >= args.length){
      return fn.apply(this,args)
    } else {
      return function (...moreArgs){
        return curry.apply(this, moreArgs)
      }
    }
  }
}


// ============ 带详细注释的正确版本 ============

/**
 * 函数柯里化实现
 * @param {Function} fn - 需要被柯里化的原函数
 * @returns {Function} - 返回柯里化后的函数
 */
function curryingWithComments(fn) {
  // 返回一个新的函数 curry，这个函数会收集参数
  // 使用剩余参数 ...args 来接收所有传入的参数
  return function curry(...args) {
    
    // 判断：当前收集到的参数数量是否已经满足原函数所需的参数个数
    // fn.length 是原函数定义时的形参个数
    // args.length 是当前已经收集到的实参个数
    if (args.length >= fn.length) {
      
      // 如果参数数量已经足够，直接执行原函数
      // 使用 apply 来调用，保持 this 指向，并传入所有收集到的参数
      return fn.apply(this, args)
      
    } else {
      
      // 如果参数数量还不够，返回一个新函数继续收集参数
      return function (...moreArgs) {
        
        // 将之前收集的参数 args 和新传入的参数 moreArgs 合并
        // 然后递归调用 curry 函数，继续判断参数是否足够
        // 使用 apply 保持 this 指向
        return curry.apply(this, args.concat(moreArgs))
      }
    }
  }
}

// ============ 使用示例 ============

// 定义一个需要三个参数的函数
function add(a, b, c) {
  return a + b + c
}

// 对 add 函数进行柯里化
const curriedAdd = curryingWithComments(add)

// 可以一次传一个参数
console.log(curriedAdd(1)(2)(3)) // 输出: 6

// 也可以一次传多个参数
console.log(curriedAdd(1, 2)(3)) // 输出: 6
console.log(curriedAdd(1)(2, 3)) // 输出: 6

// 甚至可以一次传完所有参数
console.log(curriedAdd(1, 2, 3)) // 输出: 6


// ============ 你原来代码的问题分析 ============

/*
你原来的代码：
function currying(fn) {
  return function curry(arg) {  // ❌ 问题1: 这里应该用 ...args 而不是 arg
    if (fn.length < arg.length) {  // ❌ 问题2: 比较符号反了，应该是 args.length >= fn.length
      return fn.apply(this, arg)
    } else {
      return function (...moreArgs) {
        return curry.apply(this, moreArgs)  // ❌ 问题3: 没有合并之前的参数
      }
    }
  }
}

正确的应该是：
1. 使用 ...args 来接收多个参数
2. 判断条件应该是 args.length >= fn.length
3. 递归时要合并之前的参数：args.concat(moreArgs)
*/


function curryHua23(fn){
  return function curry(args){
    if(fn.length >= args.length){
      return fn.apply(this,args)
    }else{
      return function(...moreArgs){
        return curry.apply(this,moreArgs.concat(args))
      } 
    }
  }
}