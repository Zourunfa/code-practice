var arr = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
];

// console.log(unique([[1, 2], [1, 2]]));
// console.log([...new Set([[1, 2], [1, 2]])]);
console.log(unique(arr));

// 使用indexOf无法去除 NaN的重复 indexOf(NaN)永远等于-1

// function unique(arr) {
//   if (!Array.isArray(arr)) {
//     {
//       console.log('is nor a array');
//     }
//   }
//   const res = []
//   arr.forEach(element => {
//     if (res.indexOf(element) === -1) {
//       res.push(element)
//     }
//   });
//   return res
// }

// 注意Set是能够去掉NaN的重复的

// [...new Set(arr)]

// function unique(arr) {
//   return Array.from(new Set(arr))
// }

// includes也是能够去掉NaN的重复的
// function unique(arr) {
//   if (!Array.isArray(arr)) {
//     throw new TypeError('is not array')
//   }
//   const new_arr = []
//   arr.forEach(e => {
//     if (!new_arr.includes(e)) {
//       new_arr.push(e)
//     }
//   })

//   return new_arr
// }

// splice使用此函数特别需要注意的一点：会改变数组，改变数组的长度

// function unique(arr) {
//   let len = arr.length
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] == arr[j]) {
//         //       console.log(arr);
//         arr.splice(j, 1)
//         // console.log(arr);
//         j--;
//       }
//     }
//   }
//   return arr
// }

// 用filter + hasOwnProperty两个空对象也能去重
// function unique(arr) {
//   var obj = {};
//   return arr.filter(function (item, index, arr) {
//     // console.log(item);
//     // console.log(typeof item + item);
//     // console.log(obj[typeof item + item]);
//     // 判断obj对象是否有这个属性，如果有（说明数组元素重复）直接返回false过滤掉数组中的重复元素
//     // 如果没有，为obj对象添加上这个属性
//     return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
//   })
// }

// 会将NaN都去掉
// function unique(arr) {
//   return arr.filter((e, index) => {
//     return arr.indexOf(e, 0) === index
//   })
// }

// function arrayNonRepeatfy(arr) {
//   let map = new Map();
//   let array = new Array();  // 数组用于返回结果
//   for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {  // 如果有该key值
//       map.set(arr[i], true);
//     } else {
//       map.set(arr[i], false);   // 如果没有该key值
//       array.push(arr[i]);
//     }
//   }
//   return array;
// }

// function unique(arr) {
//   let set = new Set()
//   return arr.filter(item => {
//     return set.has(typeof item + item) ? false : set.add(typeof item + item)
//   })

// }

function unique(arr) {
  let set = new Set();
  console.log(1);
  return arr.filter((item) => {
    return set.has(typeof item + item) ? false : set.add(typeof item + item);
  });
}
