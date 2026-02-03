Array.prototype._filter = function (cb) {
  let arr = this;
  let arg = arguments[1];
  let res = [];

  if (!Array.isArray(arr)) {
    throw new Error('is not a array');
  }

  for (let i = 0; i < arr.length; i++) {
    let flag = cb.call(arg, arr[i], i, arr);
    if (flag) {
      res.push(arr[i]);
    }
  }

  return res;
};

const arr = [1, 2, 3];
let newArr = arr._filter(function (item) {
  return item > 1;
});
console.log(newArr);
