// String.prototype.new_trim = function () {
//   return this.replace(/^\s+/, '').replace(/\s+$/, '');
//   // return this.replace(/\S\s+\S*/,'')
// }

let str = '   sdasfhsaufhuids sahdfushf asdhioisad sdj '
// console.log(str.new_trim());
// console.log(str.trim());
// '  a aaa bbb  b  c cc  ccc   '.replace(/(\S)\s+(\b)/g, '$1$2'); // "  aaaabbbbcccccc   "

String.prototype.my_trim = function () {
  return this.replace(/^\s+/, '').replace(/\s+$/, '')
}

console.log(str.my_trim())
// function curry(fn) {
//   return function curried(...args) {
//     if (args.length > fn.length) {
//       // 如果参数个数达到length，执行原函数
//       return fn.apply(this, args)
//     } else {
//       return function (...moreArgs) {
//         return curried.apply(this, args.concat(moreArgs))
//       }
//     }
//   }
// }
