
const num = 12345678.32423432



// function getForm(num) {
//   let arr = num.toString().split('.')
//   // 取出整数部分
//   let arr0 = arr[0].split('')
//   // console.log(arr0);
//   let stack = []
//   let i = 0
//   while (arr0.length > 0) {
//     // 没3位添加一个分割符
//     if (i % 3 == 0 && i !== 0) {
//       stack.push(',')
//     }
//     stack.push(arr0.pop())
//     i++
//   }
//   let res = stack.reverse()
//   console.log(res);
//   // 考虑是否存在小数部分
//   if (arr[1]) {
//     return res.join('') + '.' + arr[1]
//   } else {
//     return res.join('')
//   }
// }

// console.log(getForm(num));


// function getForm(num) {
//   let arr = num.toString().split('.')
//   let arr0 = arr[0].split('')
//   let res = []
//   let i = 0
//   while (arr0.length) {
//     // console.log(i);
//     if (i % 3 == 0 && i !== 0) {
//       res.push(',')
//     }
//     res.push(arr0.pop())
//     i++
//   }
//   res = res.reverse()

//   if (arr[1]) {
//     return res.join('') + '.' + arr[1]
//   } else {
//     return res.join('')
//   }
// }



// 方法2
// var a = 1234567894532;
// var b = 673439.4542;

// console.log(a.toLocaleString());  // "1,234,567,894,532"
// console.log(b.toLocaleString());  // "673,439.454"  （小数部分四舍五入了


// function regForm(num) {
//   var res = num.toString().replace(/\d+/, function (n) {
//     return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
//       return $1 + ','
//     })
//   })
//   return res
// }

console.log(regForm(num));

function regForm(num) {
  // console.log(num.toString());
  return num.toString().replace(/\d+/, (p) => {
    return p.replace(/\d(?=(\d{3})+$)+/g, (p1, p2) => {
      return p1 + ','
    })
  })
}


let a = 'sadddddddddddddsssssssssssssdddddddasddd'

console.log(a.match(/([a-z])\1+/ig));