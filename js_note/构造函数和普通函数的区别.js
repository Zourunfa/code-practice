function a() {
  console.log('你好')
}

// 上面函数既是一个构造函数，也是一个普通函数
const res1 = new a() //被当作构造函数使用
const res2 = a() //被当作普通函数使用

function b() {
  // 可以通过new.target 属性判断是否被当作构造函数使用
  if (new.target) {
    console.log('你好，我是一个构造函数')
  } else {
    console.log('你好，我是一个普通函数')
  }
}

class C {
  constructor() {
    console.log('你好，我是一个构造函数')
  }
}

// 用类名创造的构造函数只能被new 不能使用C()执行
