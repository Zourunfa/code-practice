// 浅拷贝
Object._assign = function (target, ...source) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  // console.log(source);

  let ret = Object(target);
  source.forEach((obj) => {
    if (obj != null) {
      for (let key in obj) {
        console.log(key);
        // 可枚举的属性才会拷贝
        if (obj.hasOwnProperty(key)) {
          ret[key] = obj[key];
        }
      }
    }
  });
};

const a = {
  x: 1,
  y: {
    z: 1,
  },
};

const b = {
  x: 2,
  name: 'af',
  hobbies: {
    sports: 'basketball',
    music: {
      style: ['fuck', 'blues'],
      instruments: ['guitar'],
    },
  },
};

// Object.assign(a, b);
Object._assign(a, b);
console.log(a);

// 面试题
const v1 = 123;
const v2 = '123';
const v3 = true;
const v4 = function test() {};

const v5 = Object.assign({}, v1, v2, v3, v4);
console.log(v5);
// 打印结果 :{0: "1", 1: "2", 2: "3"}
// 结果很巧妙：这是因为Object.assign会自动将不是对象的方法转化为对象
// 然后只会合并可枚举的属性,而上面拥有可枚举的属性的对象就只有String对象

const r1 = new Number(v1);
const r2 = new String(v2);
const r3 = new Boolean(v3);
const r4 = new Function(v4);
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);

for (let key in r1) {
  console.log(key);
}

for (let key in r2) {
  console.log(key); //唯独只有这里可以打印
}

for (let key in r3) {
  console.log(key);
}

for (let key in r4) {
  console.log(key);
}
