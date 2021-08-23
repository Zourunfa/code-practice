// "use strict"
// const HOST = {
//   url: 'www.baidu.com',
//   port: 443
// }

// Object.freeze(HOST)

// HOST.port = 23
// console.log(HOST); //打印之后没有任何变化

// let hd = 99;
// console.log(typeof hd.toString()); //string

// let arr = ['hdcms', '后盾人'];
// console.log(typeof arr.toString()); //string
// console.log(arr.join(''));
// console.log(arr.toString());



var exchange = function (nums) {
  let i = 0, j = nums.length - 1

  while (i <= j) {
    while (nums[i] % 2 !== 0)
      i++
    while (nums[j] % 2 == 0)
      j--

    console.log(nums[i], nums[j])
    let t = nums[i]
    console.log(t);
    nums[i] = nums[j]
    console.log(nums[i]);
    nums[j] = t

    i++
    j--
  }
  return nums
};


console.log(exchange([1, 2, 3, 4]));