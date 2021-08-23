// const fun = new Function('a', 'b', 'c', 'console.log(a+b+c)');
// // const fn = new Function('a,b,c','console.log(a+b+c)')
// fun(1, 2, 3);

var a = 1,
  b = 2;

function test() {
  var b = 3;
  // 用下面这种方式创建函数是创建在全局环境中的 返回的值是8
  // return new Function('c', 'console.log(a+b+c)');

  // 这里才会形成闭包  返回的值是7
  return function (c) {
    console.log(a + b + c);
  };
}

var t = test();
t(4);
// 在浏览器环境下和在node环境下分别会打印出什么

// 在node环境下 a是访问不到的，因为a不是声明在全局作用域中而是模块作用域
