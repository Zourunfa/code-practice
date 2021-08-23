// function unique(arr){
//   if (!Array.isArray(arr)) {
//     console.log('type error!')
//     return
// }
//   const res = []
//   for(let e of arr){
//     if(res.indexOf(e) === -1){
//       res.push(e)
//     }
//   }
//   return res
// }

var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
console.log(unique(arr))

function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        j--;
      }
    }
  }
  return arr
}

function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {//includes 检测数组是否有某个值
      array.push(arr[i]);
    }
  }
  return array
}