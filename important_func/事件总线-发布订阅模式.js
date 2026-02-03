// 基于ES6构件属于自己的发布订阅库

// class Sub {
//   constructor() {
//     this.message = {};
//   }
//   // 向消息队列里面添加内容
//   on(type, fn) {
//     if (!this.message[type]) {
//       this.message[type] = [];
//     }
//     this.message[type].push(fn);
//   }
//   // 删除消息队列里面的内容
//   off(type, fn) {
//     // 如果fn不存在 那么就只有一个参数的去情况
//     if (!fn) {
//       delete this.message[type];
//       return;
//     }
//     // 判断是不是真的订阅过这个行为
//     if (!this.message[type]) return;
//     // 你订阅过，就用filter函数删除
//     this.message[type] = this.message[type].filter((item) => {
//       return item !== fn;
//     });
//   }
//   // 触发消息队列
//   emit(type) {
//     // 先判断是不是订阅过
//     if (!this.message[type]) return;
//     this.message[type].forEach((item) => {
//       item();
//     });
//   }
// }

class Sub {
  constructor() {
    this.message = {};
  }

  on(type, fn) {
    if (!this.message[type]) {
      this.message[type] = [];
    }
    this.message[type].push(fn);
  }

  off(type, fn) {
    if (!fn) {
      delete this.message[type];
    }
    if (!this.message[type].fn) return;

    this.message[type].filter((item) => {
      item !== fn;
    });
  }

  emit(type) {
    if (!this.message[type]) {
      return;
    }
    this.message[type].map((item) => item());
  }
}

const observer = new Sub();
// 当你告诉observer一个行为，这个行为出现的时候，
// 触发行为对应的方法
console.log(observer);

observer.on('action1', fn1);
observer.on('action1', fn2);
observer.on('action2', fn1);
observer.on('action2', fn2);
observer.on('action2', fn3);
observer.on('action2', fn4);
observer.on('action2', fn5);

observer.off('action1');
observer.off('action2', fn1);

observer.emit('action2');

function fn1() {
  console.log('fn1');
}
function fn2() {
  console.log('fn2');
}
function fn3() {
  console.log('fn3');
}
function fn4() {
  console.log('fn4');
}
function fn5() {
  console.log('fn5');
}
