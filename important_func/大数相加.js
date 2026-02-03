
// const bigAdd = function (a, b) {
//   let maxLen = Math.max(a.length, b.length)

//   a = a.padStart(maxLen, 0)
//   b = b.padStart(maxLen, 0)
//   console.log(a);
//   console.log(b);
//   let f = 0, t = 0, sum = ''

//   for (let i = maxLen - 1; i >= 0; i--) {
//     t = parseInt(a[i]) + parseInt(b[i]) + f
//     f = Math.floor(t / 10)
//     sum = t % 10 + sum
//   }
//   if (f == 1) {
//     sum = "1" + sum
//   }
//   return sum;


// }


const bigAdd = function (a, b) {
  let maxLen = Math.max(a.length, b.length)

  a = a.padStart(maxLen, '0')
  b = b.padStart(maxLen, '0')

  let f = 0, t = 0

  // 注意这里的sum还是字符串
  let sum = ''
  for (let i = maxLen - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f
    f = Math.floor(t / 10)
    sum = t % 10 + sum
  }
  if (f === 1) {
    sum = "1" + sum
  }
  return sum
}


let a = "9007199254740991";
let b = "1234567899999999999";
// 2435750992547409900
console.log(bigAdd(a, b));