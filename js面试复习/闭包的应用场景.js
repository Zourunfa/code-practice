// setTimeOut

// (function(i){})(i)
// for (var i = 1; i <= 5; i++) {

//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   })(i)
// }

// 回调函数

// for (var i = 0; i < aLi.length; i++) {
//   (function (a) {
//     aLi[a].onclick = function () {
//       console.log(a);
//     }
//   })(i)
// }

// 创建私有变量

// function createPrivate(value) {
//   let _private = value;

//   return {
//     getValue: () => {
//       return _private;
//     },
//     setValue: (value) => {
//       return (_private = value);
//     },
//   };
// }
function createPrivate(value) {
  let _private = value;
  return {
    getValue: () => {
      return _private;
    },
    setValue: () => {
      return (_private = value);
    },
  };
}

function Fn(value) {
  let _private = value;

  return {
    getValue: () => {
      return _private;
    },
    setValue: (value) => {
      return (_private = value);
    },
  };
}

let data = new Fn('af');

console.log(data);

console.log(data.value);
console.log(data.getValue());
data.setValue('bzd');
console.log(data.getValue());
