/**
 * 
Promise.all 和 Promise.allSettled 都是用于处理多个 Promise 的并发方法，但它们在行为和处理结果上有重要区别。

Promise.all
特点：接受一个 Promise 数组（或任何可迭代对象），并返回一个新的 Promise。

行为：当所有输入的 Promise 都成功完成（resolved）时，返回的 Promise 才会成功，其结果是所有输入 Promise 结果的数组，顺序与输入顺序一致。

短路特性：如果其中任何一个 Promise 被拒绝（rejected），则立即拒绝，并返回第一个被拒绝的 Promise 的原因（错误）。

适用场景：当多个异步任务相互依赖，必须全部成功才能继续时。例如，同时请求多个接口，所有接口都成功返回数据后才进行下一步处理。

Promise.allSettled
特点：同样接受一个 Promise 数组，返回一个新的 Promise。

行为：等待所有输入的 Promise 都完成（无论是成功还是失败），然后返回一个对象数组，每个对象对应一个输入 Promise 的结果。每个对象都有一个 status 属性，值为 "fulfilled" 或 "rejected"。如果状态为 "fulfilled"，则对象还有 value 属性；如果状态为 "rejected"，则对象还有 reason 属性。

短路特性：无短路特性，无论输入 Promise 成功或失败，都会等待所有 Promise 完成。

适用场景：当需要知道每个 Promise 的结果，无论成功或失败时。例如，同时发送多个请求，需要知道每个请求的最终状态（成功或失败）及其结果或原因。

示例对比
假设有三个 Promise：p1（成功），p2（成功），p3（失败）。
 * 
 * 
 */
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject("Error");
// 加载用户数据和配置数据，两者都必需
Promise.all([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((error) => console.error(error)); // 输出：'Error'

//批量发送通知，即使某些失败也要继续
Promise.allSettled([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((error) => console.error(error));

// [{status:'fullfilled', value: 1} ,{status:'fullfilled', value: 1} ,{status:'fullfilled', reason: 'Error'}]

/**
 * 手写 Promise.all
 * 特点：
 * 1. 接收一个可迭代对象（如数组）
 * 2. 所有 Promise 都成功时，返回结果数组（按输入顺序）
 * 3. 任何一个 Promise 失败，立即返回失败原因
 * 4. 空数组传入时，立即返回一个已完成的 Promise
 */
class MyPromiseAll {
  /**
   * Promise.all 实现
   * @param {Iterable} iterable - 可迭代对象（如数组）
   * @returns {Promise<Array>}
   */
  static all(iterable) {
    return new Promise((resolve, reject) => {
      // 1. 参数校验
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(
          new TypeError(`${typeof iterable} ${iterable} is not iterable`),
        );
      }

      // 2. 将可迭代对象转换为数组
      const promises = Array.from(iterable);
      const length = promises.length;

      // 3. 处理空数组的情况
      if (length === 0) {
        return resolve([]);
      }

      const results = new Array(length);
      let settledCount = 0;

      // 4. 遍历处理每个 Promise
      promises.forEach((promise, index) => {
        // 4.1 确保当前项是 Promise，如果不是则用 Promise.resolve 包装
        Promise.resolve(promise)
          .then((value) => {
            // 4.2 按顺序存储结果
            results[index] = value;
            settledCount++;

            // 4.3 检查是否所有 Promise 都已完成
            if (settledCount === length) {
              resolve(results);
            }
          })
          .catch((error) => {
            // 4.4 任何一个失败，立即拒绝
            reject(error);
          });
      });
    });
  }

  /**
   * Promise.allSettled 实现
   * 特点：
   * 1. 接收一个可迭代对象
   * 2. 等待所有 Promise 完成（无论成功或失败）
   * 3. 返回一个对象数组，每个对象包含状态和值/原因
   * 4. 不会短路，总是返回 fulfilled 状态
   */
  static allSettled(iterable) {
    return new Promise((resolve) => {
      // 1. 参数校验
      if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
        return reject(
          new TypeError(`${typeof iterable} ${iterable} is not iterable`),
        );
      }

      // 2. 转换为数组
      const promises = Array.from(iterable);
      const length = promises.length;

      // 3. 处理空数组
      if (length === 0) {
        return resolve([]);
      }

      const results = new Array(length);
      let settledCount = 0;

      // 4. 辅助函数：创建结果对象
      const createResult = (status, valueOrReason) => {
        if (status === "fulfilled") {
          return { status, value: valueOrReason };
        } else {
          return { status, reason: valueOrReason };
        }
      };

      // 5. 处理每个 Promise
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = createResult("fulfilled", value);
          })
          .catch((reason) => {
            results[index] = createResult("rejected", reason);
          })
          .finally(() => {
            settledCount++;
            // 6. 全部完成后解析
            if (settledCount === length) {
              resolve(results);
            }
          });
      });
    });
  }
}

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let length = arr.length;
    let results = [];
    let count = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          count++;
          if (count == length) {
            resolve(results);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
};
// 4. 辅助函数：创建结果对象
const createResult = (status, valueOrReason) => {
  if (status === "fulfilled") {
    return { status, value: valueOrReason };
  } else {
    return { status, reason: valueOrReason };
  }
};

const createResultNew = (status, valueOrReason) => {
  if (status === "fulfilled") {
    return { status, value: valueOrReason };
  } else {
    return { status, reason: valueOrReason };
  }
};
Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    let length = arr.length;
    let results = [];
    let count = 0;
    promises.forEach((promises, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = createResultNew("fulffilled", value);
          count++;
        })
        .catch((e) => {
          results[index] = createResultNew("rejected", e);
          count++;
        })
        .finally(() => {
          if (count === length) {
            resolve(results);
          }
        });
    });
  });
};
