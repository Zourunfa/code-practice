
// 每次返回一个新的promise 等它执行玩状态发生改变之后再走下一个promise
// let promise = Promise.resolve('af')
// promise
//   .then(msg => {
//     return new Promise(resolve => {

//       setTimeout(() => {
//         resolve(msg)  //如果这里状态没改变 下面的then里面的代码根本不会执行
//         console.log(1);
//       }, 2000)
//     })
//   })
//   .then(msg => {
//     return new Promise(resolve => {

//       setTimeout(() => {
//         console.log(2);
//         resolve(msg)
//       }, 2000)
//     })
//   })

// 使用map实现promise队列
// function queue(num) {
//   let promise = Promise.resolve()

//   num.map(v => {
//     promise = promise.then(_ => {
//       return new Promise(resolve => {
//         setTimeout(() => {
//           console.log((v));
//           resolve()
//         }, 500)
//       })
//     })
//   })
// }

// queue([1, 2, 3, 4, 5])



// 应用方式


// function queue(num) {
//   let promise = Promise.resolve()

//   num.map(f => {
//     promise = promise.then(_ => {
//       return f()
//     })
//   })

// }


// function p1() {

//   return new Promise(resolve => {

//     setTimeout(() => {
//       console.log('p1');
//       resolve()
//     }, 500)
//   })

// }

// function p2() {

//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('p2');
//       resolve()
//     }, 500)
//   })

// }


// queue([p1, p2])


// 使用reduce封装依次执行的队列

function queue(arr) {
  arr.reduce((pres, cur) => {
    return pres.then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(cur);
          resolve()
        }, 1000)
      })
    })
  }, Promise.resolve())
}


// function p1() {

//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('p1');
//       resolve()
//     }, 500)
//   })

// }

// function p2() {

//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('p2');
//       resolve()
//     }, 500)
//   })

// }


queue([1, 2, 3, 4, 5])