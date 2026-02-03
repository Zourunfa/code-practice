// all
// 使用Promise.all 方法可以同时执行多个并行异步操作，比如页面加载时同进获取课程列表与推荐课程。

// 任何一个 Promise 执行失败就会调用 catch方法
// 适用于一次发送多个异步操作
// 参数必须是可迭代类型，如Array/Set
// 成功后返回 promise 结果的有序数组
const hdcms = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("第一个Promise");
  }, 1000);
});
const houdunren = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("第二个异步");
  }, 1000);
});
const hd = Promise.all([hdcms, houdunren])
  .then(results => {
    console.log(results);
  })
  .catch(msg => {
    console.log(msg);
  });

// 根据用户名获取用户，有任何一个用户获取不到时 promise.all 状态失败，执行 catch 方法

function ajax(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
      if (this.status == 200) {
        resolve(JSON.parse(this.response));
      } else {
        reject(this);
      }
    };
  });
}

const api = "http://localhost:8888/php";
const promises = ["向军", "后盾人"].map(name => {
  return ajax(`${api}/user.php?name=${name}`);
});

Promise.all(promises)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });


//     #race
// 使用Promise.race() 处理容错异步，和race单词一样哪个Promise快用哪个，哪个先返回用哪个。

// 以最快返回的promise为准
// 如果最快返加的状态为rejected 那整个promise为rejected执行cache
// 如果参数不是promise，内部将自动转为promise
const p1 = new Promise((resolve, reject) => {
  resolve("resolved");
});
const p2 = new Promise((resolve, reject) => {
  reject("rejected");
});
Promise.allSettled([p1, p2])
  .then(msg => {
    console.log(msg);
  })