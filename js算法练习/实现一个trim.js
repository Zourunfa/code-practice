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

console.log(str.my_trim());