// function symmetry(num) {
//   num = num.toString()
//   len = num.length
//   i = 0
//   j = len - 1
//   while (j > i) {
//     if (num[i] !== num[j]) {
//       return false
//     }
//     i++
//     j--
//   }
//   return true
// }

console.log(symmetry(121));
console.log(symmetry(123343432));
console.log(symmetry(1234321));


function symmetry(num) {
  // console.log(num.toString().split('').toString(), num.toString().split('').reverse().toString());
  return num.toString().split('').reverse().toString() === num.toString().split('').toString()
}