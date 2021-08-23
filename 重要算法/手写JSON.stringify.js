// JSON.stringify的作用
// console.log(JSON.stringify({ x: 3, y: 4 })); //{"x":3,"y":4}
// console.log(JSON.stringify(true));
// // console.log(new Date());
// console.log(JSON.stringify(new Date()));
// console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol('')] }));
// // {"x":[10,null,null,null]}

// let data = {
//   a: 1,
//   b: {
//     c: 2,
//   },
// };

// let newData = JSON.stringify(
//   data,
//   (key, value) => {
//     if (typeof value == 'number') {
//       return value * 2;
//     }
//     return value;
//   },
//   4,
// );
// console.log(newData);
// // {
// //   "a": 2,
// //   "b": {
// //       "c": 4
// //   }
// // }

// 转换规则
/** 如果数据中有toJSON方法，则使用toJSON返回的值，比如Date对象就自带toJSON方法
 *
 *
 */

const data = {
  a: 1,
  b: 2,
  toJSON: function () {
    return this.a + this.b;
  },
};

console.log(JSON.stringify(data)); //3

// 有三个参数
/**
 *
 * @param {*} data 要转换的数据
 * @param {*} replacer 如果是函数，则在转换的过程中每个属性的转换都要调用该函数
 * 如果是数组则只转换数组中包含的属性
 * 如果是null则转换所有的属性
 * @param {*} space：该参数用于美化json字符串，提高可读性,如果是数字表示空格的个数
 * ，最多10个，小于1表示没有空格；是字符串，则用字符串填充
 *
 */

// function stringify(data, replacer = null, space = '') {
//   const toString = Object.prototype.toString;
//   const types = {
//     '[object String]': 'string',
//     '[object Number]': 'number',
//     '[object Undefined]': 'undefined',
//     '[object Null]': 'null',
//     '[object Function]': 'function',
//     '[object Array]': 'array',
//     '[object Boolean]': 'bool',
//     '[object Symbol]': 'symbol',
//     '[object BigInt]': 'bigInt',
//     '[object Object]': 'object',
//     '[object RegExp]': 'regexp',
//     '[object Date]': 'date',
//     '[object Set]': 'set',
//     '[object Map]': 'map',
//   };

//   // 获取数据类型
//   const getType = (data) => {
//     return types[toString.call(data)];
//   };

//   // 处理stringify的replacer
//   // 如果是函数，直接调用函数
//   // 如果是数组：没有key是或者包含key是返回数据本身,或者undefined

//   const replacerCallback = function (key = '', value) {
//     let type = getType(replacer);
//     switch (type) {
//       case 'function':
//         return replacer(key, value);
//       case 'array':
//         return '' === key || replacer.includes ? value : undefined;
//       default:
//         return value;
//     }
//   };

//   // 获取填充字符串
//   const getSpaceStr = function () {
//     if (getType(space) === 'number') {
//       return Array(space).fill(' ').join('');
//     }

//     if (getType(space) === 'string') {
//       return space;
//     }
//     return '';
//   };

//   // 初始化填充字符串
//   const spaceStr = getSpaceStr();
//   const needBeautify =
// }
