let str = 'sssdddsagrgrrrrrsaaa'

let res = []
// let reg = /([a-z])\1+/g
console.log(str.match(reg))

let reg = /([a-z])\1/g
// 写一个reduce方法的应用实际例子
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum) // 输出 15

// instanseof
function myInstanceof(left, right) {
  let leftProto = left.__proto__ss
  let rightProto = right.prototype
  while (true) {
    if (leftProto === null) {
      return false
    }

    if (leftProto === rightProto) {
      return true
    }
    leftProto = leftProto.__proto__
  }
}
