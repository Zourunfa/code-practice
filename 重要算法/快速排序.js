const arr = [5, 4, 3, 6, 7, 1, 2];

// var quickSort = function (arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   var pivotIndex = Math.floor(arr.length / 2);

//   var pivot = arr.splice(pivotIndex, 1)[0];

//   var left = [];

//   var right = [];

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return quickSort(left).concat([pivot], quickSort(right));
// };
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let povit = arr.splice(Math.floor(arr.length / 2), 1)[0];
  // console.log(povit);
  let left = [],
    right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < povit) {
      left.push(arr[i]);
    }
    if (arr[i] > povit) {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([povit], quickSort(right));
}

console.log(quickSort(arr));
