/**
 * Promise的三种状态
 * 
 * pending:等待状态，比如正在进行网络请求，或者定时器没有到事件
 * fulfill:满足状态，当我们主动回调了resolve时，就处于该状态，并且会回调.then()
 *         .then()函数会返回一个promise.
 * reject: 拒绝状态，当我们主动回调reject时并且还要抛出错误，就处于该状态，并且回调.catch()
 * 
 * 
 * 
 * 
 * 
 */

//  debugger
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve({ test: 1 })
//       resolve({ test: 2 })
//       reject({ test: 2 })
//   }, 1000)
// }).then((data) => {
//   console.log('result1', data)
// },(data1)=>{
//   console.log('result2',data1)
// }).then((data) => {
//   console.log('result3', data)
// })
//result1 { test: 1 }
//result3 undefined


// 构造函数中的 resolve 或 reject 只有第一次执行有效，多次调用没有任何作用，呼应代码二结论：promise 状态一旦改变则不能再变。
// Promise的状态  只可以由pengding-fullfiled  pengding->rejected 不可逆
// then 返回了新的Promise,但是then中注册的回调仍然是上一个Promise的
// 只要抛出错误的promise对象 就是在reject状态




// .catch又是resolve状态下的promise

// Promise.resolve().then(() => {
//   console.log(1);
//   throw new Error('error1')
// }).catch(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// }) //1 2 3


const start = (new Date()).getTime();
const promise = new Promise((resolve, reject) => {
  console.log('执行了promise', (new Date()).getTime() - start);
  setTimeout(() => {
    console.log('once', (new Date()).getTime() - start);
    resolve();
  }, 1000)
})
promise.then(() => {
  console.log('abc', (new Date()).getTime() - start);
})
setTimeout(() => {
  promise.then(() => {
    console.log('def', (new Date()).getTime() - start);
  })
}, 1000)

//outPut:
//执行了promise 0 
//once 1002 //只执行了一次
//abc 1002 
//def 1003



// 1 .then和.catch都会返回一个新的Promise。
// 2 catch不管被连接到哪里，都能捕获上层未捕捉过的错误。
// 3 在Promise中，返回任意一个非 promise 的值都会被包裹成 promise 对象.
// 4 Promise 的 .then 或者 .catch 可以被调用多次, 当如果Promise内部的状态一经改变，并且有了一个值，那么后续每次调用.then或者.catch的时候都会直接拿到该值。
// 5 .then 或者 .catch 中 return 一个 error 对象并不会抛出错误，所以不会被后续的 .catch 捕获。
// 6 .then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。
// 7 .then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。
// 8 .then方法是能接收两个参数的，第一个是处理成功的函数，第二个是处理失败的函数，再某些时候你可以认为catch是.then第二个参数的简便写法。
// 9 .finally方法也是返回一个Promise，他在Promise结束的时候，无论结果为resolved还是rejected，都会执行里面的回调函数。.finally()方法的回调函数不接受任何的参数
//          ,它最终返回的默认会是一个上一次的Promise对象值，不过如果抛出的是一个异常则返回异常的Promise对象。




// 知识点4 Promise 的 .then 或者 .catch 可以被调用多次, 当如果Promise内部的状态一经改变
// ，并且有了一个值，那么后续每次调用.then或者.catch的时候都会直接拿到该值


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('timer')
//     resolve('success')
//   }, 1000)
// })
// const start = Date.now();
// promise.then(res => {
//   console.log(res, Date.now() - start)
// })
// promise.then(res => {
//   console.log(res, Date.now() - start)
// })


//11、
// debugger
// Promise.resolve('1')
//   .then(res => {
//     console.log(res)
//   })
//   .finally(() => {
//     console.log('finally')
//   })
// Promise.resolve('2')
//   .finally(() => {
//     console.log('finally2')
//     return '我是finally2返回的值'
//   })
//   .then(res => {
//     console.log('finally2后面的then函数', res)
//   })

// Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例

// Promise.all(iterator)
// Promise.all([
//     new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve('result1')
//       },2000)
//     }),

//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('result2')
//           },1000)
//     })
// ]).then(results =>{
//     results[0]
//     results[1]
//     console.log(results)
// })

// promise中的all方法和race方法
// 这两个方法，都是并行执行多个异步操作。而不同的是，
// all方式遵循“谁跑得慢，以谁为准执行回调”，
// 而race遵循的是“谁跑的快，以谁为准执行回调”
// all都要执行   race谁先执行结束，谁先进入回调


