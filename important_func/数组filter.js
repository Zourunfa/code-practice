
// debugger
// Array.prototype.my_filter = function (fn, context) {
//   if (typeof fn !== 'function') {
//     throw new TypeError('is not a function')
//   }
//   let arr = this
//   let res = []

//   for (let i = 0; i < arr.length; i++) {
//     let temp = fn.call(context, arr[i], i, arr)
//     if (temp) {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

// debugger
// Array.prototype.my_filter = function (fn, context) {
//   if (Object.prototype.toString.call(this) !== '[object Array]') {
//     throw new TypeError('is not a array')
//   }

//   let newArr = []
//   for (let i = 0; i < this.length; i++) {
//     let t = fn.call(context, this[i], i, this)
//     if (t) {
//       newArr.push(this[i])
//     }
//   }
//   return newArr

// }



const arr = [1, 2].my_filter(x => x == 2)

console.log(arr);


