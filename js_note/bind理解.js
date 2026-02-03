/**
 * bind函数的两个特点
 * 1，返回一个函数
 * 2，可以传入参数
 * 
 * 
 * 
 * 
 */


//  Function.prototype.myCall=function(context){
//    var context  = context || window
//    context.fn = this

//    let arg = [...arguments].slice(1)

//    let result = context.fn(...arg)

//    delete context.fn;

//    return result;


//  }


// Function.prototype.myApply = function(context){
//   var context = context ||window
//    context.fn = this
//    let args = [...arguments].slice(1)
//    let new_arg = args.flat();
//    let result = context.fn(...new_arg)
//    delete context.fn
//    return result;
// }


// Function.prototype.myBind = function(context){
//   if(typeof this !== 'function'){
//     throw new TypeError('error')
//   }

//   let _this = this 
//   let args = [...arguments].slice(1)


//   return function F(){
//     if(this instanceof F){
//       return new _this(...args,...arguments)
//     }
//     return _this.apply(context,args.concat(...arguments))
//   }

// }


//  let a = {
//   value: 1
// }
// function getValue(name, age) {
//   console.log(name)
//   console.log(age)
//   console.log(this.value)
// }
// getValue.myApply(a, 'zhangshan', '12')


Function.prototype.customeBind = function (thisArg, ...list) {
  let self = this; // 目标函数

  // 自己实现的bind函数，如果把返回的新函数当成了构造函数，此时会遇到问题，
  // 就是找不到目标函数原型上的方法
  // 解决：让新函数继承目标函数的原型
  let Bound = function (...arg2) {
    self.apply(thisArg, [...list, ...arg2])
  }
  // 以某个对象作为原型创建一个新的对象出来
  Bound.prototype = Object.create(self.prototype);
  Bound.prototype.custructor = self;

  return Bound;
}

function func(...arg) {
  console.log('答案是我，我是func');
  console.log(this);//this已经改变，指向{a:1}
  console.log(arg);//{1,2,3,4,5,6,7,8}
  console.log('答案是我，我是func');
}

func.prototype.miaov = function () {
  console.log(this);
}


let newFunc = func.bind({ a: 1 }, 1, 2, 3);
let newFunc2 = func.customeBind({ a: 1 }, 1, 2, 3, 4);
console.log('原生------------------');
let f1 = new newFunc(5, 6, 7, 8);
console.log(f1.miaov);




// console.log('自定义-----------------');
// let f2 = new newFunc2(5, 6, 7, 8);
// console.log(f2.miaov);
// console.log('看看f2');
// console.log(f2);
