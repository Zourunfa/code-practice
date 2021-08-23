// 参数 目标对象 需要增加的属性 属性描述器 descriptors

const target = Object.defineProperty({}, 'a', {
  value: 1,
  // writable: true,
  // configurable: true,
});

target.a = 2;

// console.log(target.a);
console.log(target);
// b: 3
// a: 1
// 只有在a:100执行的时候报错 所以上面b:3加进去了
const res = Object.assign(target, { b: 2 }, { b: 3, a: 100 }, { c: 4 });

// console.log(res);
