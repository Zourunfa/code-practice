Array.prototype._every = function (cb) {
  let arr = this;
  let arg = arguments[1] || window;
  for (let i = 0; i < arr.length; i++) {
    let flag = cb.call(arg, arr[i], i, arr);
    if (!flag) {
      return false;
    }
  }

  return true;
};

const arr = [1, 2, 3];

let res = arr._every(function (item, index, array) {
  return item > 0;
});

console.log(res);
