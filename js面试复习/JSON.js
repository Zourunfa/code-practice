

let af = {
  name: 'af',
  age: 18,
  hobbis: {
    sports: ['basketball', 'football'],
    art: ['guitar', 'sing']
  }
}
// 序列化的意思就是将javascript值转化为字符串的过程
let json = JSON.stringify(af)
console.log(json);

let json1 = JSON.stringify(af, ['name'])
console.log(json1); //{"name":"af"}

let json2 = JSON.stringify(af, (key, val) => {
  if (key == 'age') {
    val = 24
  }
  return val
})
console.log(json2);

let json3 = JSON.stringify(af, ['name'], '\t')
console.log(json3);


/**
 * JSON.stringify有三个参数
 * 第一个 value 必选，被变换的javascript的值，一般是对象或数组
 * 第二个 replacer 可以省略。有两种选择：函数或数组
 *      如果是函数：则每一组（名称/值）都会调用此函数，
 *                该函数返回一个值，作为名称的值变换到结果字符串中，
 *                如果返回undefined，那么该对成员被忽略
 *      如果是数组：则只有数组中存在名称才能够被转换，且转换后顺序与数组
 *                  的值保持一致
 * 第三个space参数： 可以省略，为了排版和阅读而存在 可以在字符串中添加
 *                空白或者，制表符
 *
 *
 *
 *
 **/




// toJSON方法

// let af = {
//   name: 'af',
//   age: 18,
//   hobbis: {
//     sports: ['basketball', 'football'],
//     art: ['guitar', 'sing']
//   },
//   toJSON: function () {  //toJSON方法可以自己定制JSON.stringfy后的序列化JSON对象
//     return {
//       name: this.name
//     }
//   }
// }

// let json = JSON.stringify(af)
// console.log(json);


// JSON转化为JS可操作类型
// let af = {
//   name: 'af',
//   age: 18,
//   hobbis: {
//     sports: ['basketball', 'football'],
//     art: ['guitar', 'sing']
//   }
// }

// let json = JSON.stringify(af)
// console.log(json);
// // 注意JSON.parse是可以穿第二个参数(回调函数) 用来操作转换后的格式
// let obj = JSON.parse(json, (key, value) => {
//   if (key == 'name') {
//     value = '阿锋-' + value
//   }
//   return value
// })
// console.log(obj);



// // 还有一种解析为对象的方法
// // 加括号的目的是强行将代码编程js表达式
// let obj2 = eval('(' + json + ')')
// console.log(obj);