// class Af {
//   // 先定义三种状态
//   static PENDING = 'pengding';
//   static FUFILLED = 'fulfilled';
//   static REJECTED = 'rejected';

//   constructor(executor) {
//     this.status = Af.PENDING;
//     this.value = null;
    // 把状态改变后的函数放到下面数组中执行
    // 等状态改变之后再拿出来执行
//     // this.callbacks = [];
//     try {
      // 因为resolve和reject方法是在executor中调用，作用域也是executor的作用域
      // 这样会造成this指向window,现在我么使用的是class定义,this会是undefined
      // 所以下面绑定了this
//       executor(this.resolve.bind(this), this.reject.bind(this));
//     } catch (error) {
//       // 当执行者出现异常时触发拒绝状态
//       this.reject(error);
//     }
//   }
  // 状态只能改变一次所以在resolve和reject都需要添加状态条件判断
  // 而且之能是 pending->fullfilled  pending->rejected
//   resolve(value) {
//     if (this.status == Af.PENDING) {
//       this.status = Af.FUFILLED;
//       this.value = value;
//     }
//   }

//   reject(value) {
//     if (this.status == Af.PENDING) {
//       this.status = Af.FUFILLED;
//       this.value = value;
//     }
//   }
// }

// let p = new Af((resolve, reject) => {
//   resolve('af');
// });

// console.log(p);

// // 添加then
// class Af {
//   // 先定义三种状态
//   static PENDING = 'pengding';
//   static FUFILLED = 'fulfilled';
//   static REJECTED = 'rejected';

//   constructor(executor) {
//     this.status = Af.PENDING;
//     this.value = null;
//     // 把状态改变后的函数放到下面数组中执行
//     // 等状态改变之后再拿出来执行
//     // this.callbacks = [];
//     try {
//       // 因为resolve和reject方法是在executor中调用，作用域也是executor的作用域
//       // 这样会造成this指向window,现在我么使用的是class定义,this会是undefined
//       // 所以下面绑定了this
//       executor(this.resolve.bind(this), this.reject.bind(this));
//     } catch (error) {
//       // 当执行者出现异常时触发拒绝状态
//       this.reject(error);
//     }
//   }
//   // 状态只能改变一次所以在resolve和reject都需要添加状态条件判断
//   // 而且之能是 pending->fullfilled  pending->rejected
//   resolve(value) {
//     if (this.status == Af.PENDING) {
//       this.status = Af.FUFILLED;
//       this.value = value;
//     }
//   }

//   reject(value) {
//     if (this.status == Af.PENDING) {
//       this.status = Af.FUFILLED;
//       this.value = value;
//     }
//   }

//   // onFullfilled,onRjected即成功和错误时的回调函数
//   then(onFullfilled, onRejected) {
    // then可以有两个参数,即成功和错误时的回调函数
    // then的函数参数都不是必须的，所以需要设置默认为函数
    // 用于处理当没有传递时的情况
//     if (typeof onFullfilled !== 'function') {
//       onFullfilled = (value) => value;
//     }
//     if (typeof onRejected !== 'function') {
//       onRejected = (value) => value;
//     }

//     if (this.status == Af.FUFILLED) {
//       try {
//         onFullfilled(this.value);
//       } catch (error) {
//         onRejected(this.value);
//       }
//     }

//     if (this.status == Af.REJECTED) {
//       try {
//         onRejected(this.value);
//       } catch (error) {
//         onRejected(error);
//       }
//     }
//   }
// }

// // 测试.then方法;

// let p = new Af((resolve, reject) => {
//   resolve('阿锋');
// }).then(
//   (value) => {
//     console.log(value);
//   },
//   (reason) => {
//     console.log(reason);
//   },
// );

// console.log('同步代码');

// 但上面的代码产生的Promise并不是异步的，
// 使用setTimeout来将onFulfilled与onRejected做为异步宏任务执行

// 添加then
// class Af {
//   // 先定义三种状态
//   static PENDING = 'pengding';
//   static FUFILLED = 'fulfilled';
//   static REJECTED = 'rejected';

//   constructor(executor) {
//     this.status = Af.PENDING;
//     this.value = null;
//     // 把状态改变后的函数放到下面数组中执行
//     // 等状态改变之后再拿出来执行
//     // this.callbacks = [];
//     try {
//       // 因为resolve和reject方法是在executor中调用，作用域也是executor的作用域
//       // 这样会造成this指向window,现在我么使用的是class定义,this会是undefined
//       // 所以下面绑定了this
//       executor(this.resolve.bind(this), this.reject.bind(this));
//     } catch (error) {
//       // 当执行者出现异常时触发拒绝状态
//       this.reject(error);
//     }
//   }
//   // 状态只能改变一次所以在resolve和reject都需要添加状态条件判断
//   // 而且之能是 pending->fullfilled  pending->rejected
//   resolve(value) {
//     if (this.status == Af.PENDING) {
//       this.status = Af.FUFILLED;
//       this.value = value;
//     }
//   }

//   reject(value) {
//     if (this.status == Af.PENDING) {
//       this.status = Af.FUFILLED;
//       this.value = value;
//     }
//   }

//   // onFullfilled,onRjected即成功和错误时的回调函数
//   then(onFullfilled, onRejected) {
//     // then可以有两个参数,即成功和错误时的回调函数
//     // then的函数参数都不是必须的，所以需要设置默认为函数
//     // 用于处理当没有传递时的情况
//     if (typeof onFullfilled !== 'function') {
//       onFullfilled = (value) => value;
//     }
//     if (typeof onRejected !== 'function') {
//       onRejected = (value) => value;
//     }

//     if (this.status == Af.FUFILLED) {
//       setTimeout(() => {
//         try {
//           onFullfilled(this.value);
//         } catch (error) {
//           onRejected(this.value);
//         }
//       });
//     }

//     if (this.status == Af.REJECTED) {
//       setTimeout(() => {
//         try {
//           onRejected(this.value);
//         } catch (error) {
//           onRejected(error);
//         }
//       });
//     }
//   }
// }

// 异步执行了
// let p = new Af((resolve, reject) => {
//   resolve('阿锋');
//   console.log(2)
// }).then(
//   (value) => {
//     console.log(value);
//   },
//   (reason) => {
//     console.log(reason);
//   },
// );
// console.log('同步代码');

// class Af {
//   // 先定义三种状态
//   static PENDING = 'pengding';
//   static FUFILLED = 'fulfilled';
//   static REJECTED = 'rejected';

//   constructor(executor) {
//     this.status = Af.PENDING;
//     this.value = null;
//     // 在构造函数中添加callbacks来保存pending状态时处理函数，当状态改变时循环调用
//     // 把状态改变后的函数（.then方法里面的回调函数）放到下面数组中执行
//     // 等状态改变之后再拿出来执行
//     this.callbacks = [];
//     try {
//       // 因为resolve和reject方法是在executor中调用，作用域也是executor的作用域
//       // 这样会造成this指向window,现在我么使用的是class定义,this会是undefined
//       // 所以下面绑定了this
//       executor(this.resolve.bind(this), this.reject.bind(this));
//     } catch (error) {
//       // 当执行者出现异常时触发拒绝状态
//       this.reject(error);
//     }
//   }
//   // 状态只能改变一次所以在resolve和reject都需要添加状态条件判断
//   // 而且之能是 pending->fullfilled  pending->rejected
//   resolve(value) {
//     if (this.status == Af.PENDING) {
//       this.status = Af.FUFILLED;
//       this.value = value;

//       // 添加处理callback方法的代码 异步处理
//       setTimeout(() => {
//         this.callbacks.map((callback) => {
//           callback.onFullfilled(value);
//         });
//       });
//     }
//   }

//   reject(value) {
//     if (this.status == Af.PENDING) {
//       this.status = Af.FUFILLED;
//       this.value = value;

//       // 添加处理callback方法的代码 异步处理
//       setTimeout(() => {
//         this.callbacks.map((callback) => {
//           callback.onRejected(value);
//         });
//       });
//     }
//   }

//   // onFullfilled,onRjected即成功和错误时的回调函数
//   then(onFullfilled, onRejected) {
//     // then可以有两个参数,即成功和错误时的回调函数
//     // then的函数参数都不是必须的，所以需要设置默认为函数
//     // 用于处理当没有传递时的情况
//     if (typeof onFullfilled !== 'function') {
//       onFullfilled = (value) => value;
//     }
//     if (typeof onRejected !== 'function') {
//       onRejected = (value) => value;
//     }

    // .then处理pengding状态(如果rejected被异步回调函数包裹，比如用setTimeOut包裹的
    // 时候，状态是异步被改变的,那么没有下面Pending状态的处理，将不会执行.then方法，因为
    // 定时函数之前一直没有执行resolve方法)
//     if (this.status == Af.PENDING) {
//       //将then方法的回调函数添加到 callbacks 数组中，用于异步执行
//       this.callbacks.push({
//         onFullfilled: (value) => {
//           try {
//             onFullfilled(value);
//           } catch (error) {
//             onRejected(error);
//           }
//         },
//         onRejected: (value) => {
//           try {
//             onRejected(value);
//           } catch (error) {
//             onRejected(error);
//           }
//         },
//       });
//     }

//     // .then处理fullfilled状态

//     if (this.status == Af.FUFILLED) {
//       setTimeout(() => {
//         try {
//           onFullfilled(this.value);
//         } catch (error) {
//           onRejected(error);
//         }
//       });
//     }

//     // .then处理rejected状态

//     if (this.status == Af.REJECTED) {
//       setTimeout(() => {
//         try {
//           onRejected(this.value);
//         } catch (error) {
//           onRejected(error);
//         }
//       });
//     }
//   }
// }

// // 异步执行了
// let p = new Af((resolve, reject) => {
//   setTimeout(() => {
//     resolve('阿锋');
//     console.log('爱谁谁');
//   });
// }).then(
//   (value) => {
//     console.log(value);
//   },
//   (reason) => {
//     console.log(reason);
//   },
// );
// console.log('同步代码');

// class Af {
//   static PENDING = 'pengding';
//   static FULLFILLED = 'fullfilled';
//   static REJECTED = 'rejected';
//   constructor(executor) {
//     this.status = Af.PENDING;
//     this.value = '';
//     this.callbacks = [];

//     try {
//       executor(this.resolve.bind(this), this.reject.bind(this));
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   resolve(value) {
//     if (this.status == Af.PENDING) {
//       this.status = Af.FULLFILLED;
//       this.value = value;

//       setTimeout(() => {
//         this.callbacks.map((callback) => {
//           callback.onFullfilled(value);
//         });
//       });
//     }
//   }
//   reject(value) {
//     if (this.status == Af.PENDING) {
//       this.status = Af.REJECTED;
//       this.value = value;

//       setTimeout(() => {
//         this.callbacks.map((callback) => {
//           callback.onRejected(value);
//         });
//       });
//     }
//   }
//   then(onFullfilled, onRejected) {
//     if (typeof onFullfilled !== 'function') {
//       onFullfilled = (value) => value;
//     }
//     if (typeof onRejected !== 'function') {
//       onRejected = (value) => value;
//     }
//     return new Af((resolve, reject) => {
//       if ((this.status = Af.PENDING)) {
//         this.callbacks.push({
//           onFullfilled: (value) => {
//             try {
//               let res = onFullfilled(this.value);
//               resolve(res);
//             } catch (error) {
//               reject(error);
//             }
//           },
//           onRejected: (value) => {
//             try {
//               let res = onRejected(this.value);
//               resolve(res);
//             } catch (error) {
//               onRejected(error);
//             }
//           },
//         });
//       }

//       if (this.status == Af.FULLFILLED) {
//         setTimeout(() => {
//           try {
//             let res = onFullfilled(this.value);
//             resolve(res);
//           } catch (error) {
//             reject(error);
//           }
//         });
//       }
//       if (this.status == Af.REJECTED) {
//         setTimeout(() => {
//           try {
//             let res = onRejected(this.value);
//             resolve(res);
//           } catch (error) {
//             reject(error);
//           }
//         });
//       }
//     });
//   }
// }

// // debugger;
// let p = new Af((resolve, reject) => {
//   setTimeout(() => {
//     resolve('af');
//     // console.log(1);
//   });
// })
//   .then((value) => {
//     console.log(value);
//     return 1;
//   })
//   .then((value) => {
//     console.log(value);
//   });
// console.log(`同步代码`);

class Af {
  static PENDING = 'pending';
  static REJECTED = 'rejected';
  static FULLFILLED = 'fullfilled';

  constructor(executor) {
    this.status = Af.PENDING;
    this.value = '';
    this.callbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(value) {
    if ((this.status = Af.PENDING)) {
      this.status = Af.FULLFILLED;
      this.value = value;

      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onFullfilled(value);
        });
      });
    }
  }

  reject(value) {
    if ((this.status = Af.PENDING)) {
      this.status = Af.REJECTED;
      this.value = value;
    }

    setTimeout(() => {
      this.callbacks.map((callback) => {
        callback.onRejected(value);
      });
    });
  }

  then(onFullfilled, onRejected) {
    return new Af((resolve, reject) => {
      if (typeof onFullfilled !== 'function') {
        onFullfilled = (value) => value;
      }

      if (typeof onRejected !== 'function') {
        onRejected = (value) => value;
      }

      if (this.status == Af.PENDING) {
        this.callbacks.push({
          onFullfilled: (value) => {
            try {
              let res = onFullfilled(value);
              resolve(res);
            } catch (error) {
              onRejected(error);
            }
          },
          onRejected: (value) => {
            try {
              let res = onRejected(value);
              reject(res);
            } catch (error) {
              onRejected(error);
            }
          },
        });
      }

      if (this.status == Af.FULLFILLED) {
        setTimeout(() => {
          try {
            let res = onFullfilled(this.value);
            resolve(res);
          } catch (error) {
            onRejected(error);
          }
        });
      }

      if (this.status == Af.REJECTED) {
        setTimeout(() => {
          try {
            let res = onRejected(this.value);
            resolve(res);
          } catch (error) {
            onRejected(error);
          }
        });
      }
    });
  }
}

// debugger;
let p = new Af((resolve, reject) => {
  console.log(a);
  resolve('af');
})
  .then(
    (value) => {
      console.log(value);
      return 2;
    },
    (reason) => {
      console.log(reason);
    },
  )
  .then((value) => {
    console.log(value);
  });
// debugger;
// let P = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('af');
//     console.log(1);
//   });
// }).then((value) => {
//   console.log(value);
// });
console.log('同步代码');
