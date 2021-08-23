let str = 'sssdddsagrgrrrrrsaaa'

let res = []
let reg = /([a-z])\1+/g
console.log(str.match(reg));