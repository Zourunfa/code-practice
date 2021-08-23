// async的实现就相当于将普通函数最后返回一个promise对象就可以了

async function getData1() {
  return 1
}

// console.log(getData1());

function getData2() {
  return Promise.resolve().then(() => {
    return 1
  })
}
// console.log(getData2());



// 
async function test1() {
  a = 1
  await console.log(1)
  b = 2
  await console.log(2);
  c = 3
  await console.log(3);
  return 4
}
// test1()


// 相当于
function test2() {
  return Promise.resolve().then(() => {
    // a = 1
    return console.log(1)
  }).then(() => {
    // b = 2
    return console.log(2);
  }).then(() => {
    // c =3
    return console.log(3)
  }).then(() => {
    return 4
  })
}

// test2()



// 理解async函数需要先理解Generator函数，因为async函数是Generator函数的语法糖。
// Generator是ES6标准引入的新的数据类型。Generator可以理解为一个状态机，
// 内部封装了很多状态，同时返回一个迭代器Iterator对象。
// 可以通过这个迭代器遍历相关的值及状态。
// Generator的显著特点是可以多次返回，
// 每次的返回值作为迭代器的一部分保存下来，可以被我们显式调用。


/**
 * 一般函数使用function声明，return作为回调，没有遇到return,在结尾调用return
 * (undefined)只可以回调一次， 而Generator函数使用function*定义，除了return
//  * 还是用yield返回多次
 */


// function* foo(x) {
//   yield x + 1
//   yield x + 2
//   return x + 3
// }

// const res = foo(0)
// console.log(res);
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
/**
 *
 * foo {<suspended>}
async await是如何实现的.js:74 {value: 1, done: false}
async await是如何实现的.js:75 {value: 2, done: false}
async await是如何实现的.js:76 {value: 3, done: true}
async await是如何实现的.js:77 {value: undefined, done: true}
 */

// 可以看到genector函数都具有状态值，有 suspended和closed两个状态
// suspended代表暂停，closed则为结束状态，但是这个状态是无法捕获的

// 执行next方法后，顺序执行了yield返回值，返回value和done两个状态
// value为返回值，可以任意类型done状态为false(还可以用.next()方法)和true 


// generator还有throw方法 可以抛出错误



// 用generator函数实现async/await,async/await语法糖就是使用Generator函数+
// 自动执行器来运作

function getNum(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num + 1)
    }, 1000)
  })
}

function asyncFun(func) {
  var gen = func()

  function next(data) {
    var res = gen.next(data)
    if (res.done)
      return res.value

    res.value.then(function (data) {
      next(data)
    })
  }

  next()
}


var func = function* () {
  var f1 = yield getNum(1)
  var f2 = yield getNum(f1)
  console.log(f2);
}
asyncFun(func)