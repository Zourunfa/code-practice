// console.log(!![]);
// console.log(!!'');

// console.log(![]);
// console.log(!'');

// console.log([] == true);

// const obj = {
//   a: 'sadas'
// }

// console.log(obj);

// const arr = ['C2', 'A1', 'B2', 'C3', 'B1']

// function fn(arr) {

//   arr.sort((a, b) => {
//     return b[0].charCodeAt() - a[0].charCodeAt()
//   })

//   arr.sort((a, b) => {
//     if (a[0] === b[0]) {
//       return a[1] - b[1]
//     }
//   })

//   return arr
// }

// console.log(fn(arr));

// var name = 'Tom';
// (function () {
//   if (typeof name == 'undefined') {
//     var name = 'Jack';
//     console.log('Goodbye ' + name);
//   } else {
//     console.log('Hello ' + name);
//   }
// })();
// let quickSort = function (arr, left, right) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let point = Math.floor((left + right) / 2);
//   let i = left,
//     j = right;

//   while (left < right) {
//     while (arr[i] < point) {
//       i++;
//     }
//     while (arr[j] > point) {
//       j--;
//     }

//     if (left < right) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//       j--;
//     }
//     if (i < right) quickSort(arr, i, right);
//     if (left < j) quickSort(arr, left, j);
//   }
// };

// let quickSort = function (arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let povit = arr.splice(Math.floor(arr.length / 2), 1)[0];

//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < povit) {
//       left.push(arr[i]);
//     }
//     if (arr[i] > povit) {
//       right.push(arr[i]);
//     }
//   }

//   return quickSort(left).concat([povit], quickSort(right));
// };

var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivotIndex = Math.floor(arr.length / 2);

  var pivot = arr.splice(pivotIndex, 1)[0];
  console.log(pivot);

  var left = [];

  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
};
let a = [5, 4, 3, 2, 1];
quickSort(a);
console.log(a);
