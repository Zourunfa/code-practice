Array.prototype._forEach = function (cb, ...ret) {
  if (typeof cb !== 'function') {
    console.log('first param must be function');
  }

  if (!Array.isArray(this)) {
    throw new Error('is not a  array');
  }
  // console.log(cb);
  // console.log(ret[0]);
  let arr = this;
  let len = arr.length;
  let arg = ret[0] || window;

  for (let i = 0; i < len; i++) {
    cb.call(arg, arr[i], i, arr);
  }
};

const arr = [1, 2, 3];
const obj = { a: 1 };
// arr.forEach(function (item, index, array) {
//   console.log(this); //可以传第二个参数，如果第二个参数是obj，那么this就是
//   // 指向的是obj
//   console.log(item, index, array);
// }, obj);

arr._forEach(function (item, index, arr) {
  console.log(item, index, arr);
}, obj);
