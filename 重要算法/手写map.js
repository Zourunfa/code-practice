Array.prototype._map = function (cb, ret) {
  let arr = this;

  let res = [];
  if (!Array.isArray(this)) {
    throw new Error('is not a  array');
  }

  for (let i = 0; i < arr.length; i++) {
    // 如果数据里面有对象等引用类型，那么就需要执行深拷贝

    //res.push(cb.call(ret, deepClone(arr[i]), i, arr));
    res.push(cb.call(ret, arr[i], i, arr));
  }
  return res;
};

const arr = [1, 2, 3];
const obj = { a: 1 };

let newArr = arr._map(function (item, index, arr) {
  console.log(item, index, arr);
  return item * 2;
}, obj);
console.log(newArr);

console.log(arr);
