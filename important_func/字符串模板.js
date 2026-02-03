// 

// function strModel(str) {
//   let reg = /\$\{([^\}]*)\}/g
//   str = str.replace(reg, function (x, y) {
//     console.log(arguments);
//     return eval(y)
//   })
//   return str
// }

// const strModel = function (str) {
//   let reg = /\$\{([^\}]+)\}/g
//   res = str.replace(reg, function ($0, $1) {
//     console.log($0, $1);
//     console.log(eval($1));
//     return eval($1)
//   })
//   return res
// }



let name = '长城软件',
  age = 40;
let str = "hello~~${name}风风雨雨走过了${age}载";

console.log(strModel(str))

// let reg = /\$\{([^\}]+)\}/g

function strModel(str) {
  const reg = /\$\{([^/}]+)\}/g
  return str.replace(reg, (p, p1) => {
    return eval(p1)
  })

}



// function findMaxChar(str) {
//   let reg = /(\w)\1+/g,
//     num = 0,
//     char = ''
//   str = str.split('').sort().join('')
//   str.replace(reg, ($0, $1) => {
//     if (num < $0.length) {
//       num = $0.length
//       char = $1
//     }
//   })
//   return `出现最多的字符：${char}，次数${num}`
// }

// console.log(findMaxChar(str));