

// var reserver = function (s) {
//   var i = -1, j = s.length
//   while (++i < --j) {
//     console.log(s[i], s[j]);
//     [s[i], s[j]] = [s[j], s[i]]
//     console.log(s[j], s[i]);
//   }
// };
// let str = ["h", "e", "l", "l", "o"]
// console.log(reserver(str));
// let a = 1

// console.log(a);
// let b = 2
// console.log(b);
// [a, b] = [b, a]

// console.log(a, b);


// console.log(reserve(str));

// let str = "hello world"
// function reserve(str) {
//   let newStr = ""
//   for (let i = 0; i < str.length; i++) {
//     let s = str.charAt(str.length - i - 1)
//     console.log(s);
//     newStr += s
//   }
//   return newStr
// }

// let str = "hello world"
// function reserve(str) {
//   return str.split('').reverse().join('')
// }

// console.log(reserve(str));


// let str = "hello world"

// function reverse(str) {
//   const newStr = []
//   const a = str.split('')
//   while (a.length > 0) {
//     newStr.push(a.pop())
//   }
//   return newStr.join('')
// }
// console.log(reverse(str));