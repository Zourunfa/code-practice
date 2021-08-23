// String.prototype.myTrim = function () {
//   const _this = this
//   return this.replace(/^\s+/, '').replace(/\s+$/, '')
// }

const str = ' sada sada  '

// const newStr = str.myTrim()
// console.log(newStr);

// console.log(newStr[0] === ' ');

// 还有下面一些解决方法
// String.prototype.trim = function() {
//   return  this.replace(/^\s+|\s+$/g, '');
// }









String.prototype.my_trim = function () {
  return this.replace(/^\s+/, '').replace(/\s+$/, ' ')
}

console.log(str.my_trim());