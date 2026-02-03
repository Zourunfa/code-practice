// class Af {
//   static PENDING = 'pengding'
//   static FUFILLED = 'fulfilled'
//   static REJECTED = 'rejected'

//   constructor(executor) {
//     this.status = Af.PENDING
//     this.value = null;
//     // 把状态改变后的函数放到下面的数组中，等状态改变之后拿出来执行
//     this.callbacks = []
//     // 在promise中使用不存在的变量，出问题了，也需要捕获异常，改为reject状态

//     try {
//       executor(this.resolve.bind(this), this.reject.bind(this))
//     } catch (error) {
//       this.reject(error)
//     }

//   }

//   resolve(value) {

//     if (this.status == Af.PENDING) {
//       this.status = Af.FUFILLED
//       this.value = value

//       // 把任务队列里面的方法执行
//       setTimeout(() => {
//         this.callbacks.map(callback => {
//           callback.onFulfilled(value)
//         })
//       })
//     }

//   }
//   reject(value) {
//     if (this.status == Af.PENDING) {
//       this.status = Af.REJECTED
//       this.value = value

//       // 把任务队列里面的方法执行
//       setTimeout(() => {
//         this.callbacks.map(callback => {
//           callback.onRejected(value)
//         })
//       })

//     }
//   }

//   then(onFulfilled, onRejected) {
//     // then中的回调函数可以穿传可以不传，把不传的封装成函数
//     if (typeof onFulfilled !== 'function') {
//       onFulfilled = () => this.value
//     }

//     if (typeof onRejected !== 'function') {
//       onRejected = () => this.value
//     }

//     let promise = new Af((resolve, reject) => {
//       if (this.status == Af.PENDING) {
//         this.callbacks.push({
//           onFulfilled: value => {
//             this.parse(promise, onFulfilled(value), resolve, reject)
//           },
//           onRejected: value => {
//             this.parse(promise, onRejected(value), resolve, reject)
//           }
//         })
//       }

//       if (this.status == Af.FUFILLED) {
//         setTimeout(() => {
//           this.parse(promise, onFulfilled(this.value), resolve, reject)
//         })
//       }

//       if (this.status == Af.REJECTED) {
//         setTimeout(() => {
//           this.parse(promise, onRejected(this.value), resolve, reject)
//         })
//       }

//       // then方法里面的公共逻辑代码抽离

//     })
//     return promise
//   }
//   parse(promise, res, resolve, reject) {
//     // console.log(promise);
//     // console.log(res);
//     if (promise == res) {
//       throw new TypeError('返回的promise和当前的一样')
//     }
//     try {
//       if (res instanceof Af) {
//         res.then(resolve, reject)
//       } else {
//         resolve(res)
//       }
//     } catch (error) {
//       reject(error)
//     }
//   }

//   static resolve(value) {
//     return new Af((resolve, reject) => {
//       if (value instanceof Af) {
//         value.then(resolve, reject)
//       } else {
//         this.resolve(value)
//       }
//     })
//   }

//   static reject(value) {
//     return new Af((resolve, reject) => {
//       if (value instanceof Af) {
//         value.then(resovle, reject)
//       } else {
//         this.reject(value)
//       }
//     })
//   }

//   // 如果传入的promise都是fullfied态，那么将其一起执行
//   // 如果传入的promise有rejected态，只执行rejected的promise
//   static all(promises) {
//     const values = []
//     return new Af((resolve, reject) => {
//       promises.forEach(promise => {

//         promise.then(
//           value => {
//             values.push(value)
//             if (values.length == promises.length) {
//               resolve(values)
//             }
//           },
//           value => {
//             reject(value)
//           }

//         )
//       })
//     })
//   }

//   // 谁快就先用谁，并且状态不会改变
//   static race(promises) {
//     return new Af((resovle, reject) => {
//       promises.forEach(promise => {
//         promise.then(value => {
//           resovle(value)
//         }, value => {
//           reject(value)
//         })
//       })
//     })
//   }

// }

// // debugger
// let p1 = new Af((resolve, reject) => {
//   setTimeout(() => resolve('阿锋'))
// })

// let p2 = new Af((resovle, reject) => {
//   resovle('不知道')
// })

// Af.race([p1, p2]).then(
//   value => {
//     console.log(value);
//   },
//   value => {
//     console.log(value);
//   }
// )

class Af {
  static PENDING = 'pengding';
  static FULLFILLED = 'fullfilled';
  static REJECTED = 'rejected';
  constructor(executor) {
    this.status = Af.PENDING;
    this.value = '';
    this.callbacks = [];

    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      console.log(error);
    }
  }

  resolve(value) {
    if (this.status == Af.PENDING) {
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
    if (this.status == Af.PENDING) {
      this.status = Af.REJECTED;
      this.value = value;

      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onRejected(value);
        });
      });
    }
  }
  then(onFullfilled, onRejected) {
    if (typeof onFullfilled !== 'function') {
      onFullfilled = (value) => value;
    }
    if (typeof onRejected !== 'function') {
      onRejected = (value) => value;
    }
    return new Af((resolve, reject) => {
      if ((this.status = Af.PENDING)) {
        this.callbacks.push({
          onFullfilled: (value) => {
            try {
              let res = onFullfilled(this.value);
              resolve(res);
            } catch (error) {
              reject(error);
            }
          },
          onRejected: (value) => {
            try {
              let res = onRejected(this.value);
              resolve(res);
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
            reject(error);
          }
        });
      }
      if (this.status == Af.REJECTED) {
        setTimeout(() => {
          try {
            let res = onRejected(this.value);
            resolve(res);
          } catch (error) {
            reject(error);
          }
        });
      }
    });
  }
}

// debugger;
let p = new Af((resolve, reject) => {
  setTimeout(() => {
    resolve('af');
    // console.log(1);
  });
})
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
  });
console.log(`同步代码`);
