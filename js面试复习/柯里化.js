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
  console.log([a, b, c]);
});

fn("a")("b")("c") // ["a", "b", "c"]
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

    return fn.apply(this, _args);

  }
}