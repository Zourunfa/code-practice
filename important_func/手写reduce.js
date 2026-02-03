Array.prototype._reduce = function (cb, initialValue) {
  let arr = this;
  let item;

  for (let i = 0; i < arr.length; i++) {
    // item = deepClone(arr[i]); 这里是需要深拷贝的
    initialValue = cb.call(arr, initialValue, arr[i], i, arr);
  }
  return initialValue;
};

const arr = [1, 3, 3];

let newArr = arr._reduce(function (pres, cur) {
  return pres + cur;
}, 0);

console.log(newArr);
