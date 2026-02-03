// 怎么访问到下面if语句的代码

// if (a == 1 && a == 2 && a == 3) {
//   console.log('success');
// }

// 方法一：利用隐式转换
var a = {
  _default: 0,
  toString: function () {
    return ++this._default;
  },
};

// 方法二; 利用getter属性
var _default = 0;

Object.defineProperty(window, 'a', {
  get() {
    return ++_default;
  },
});
