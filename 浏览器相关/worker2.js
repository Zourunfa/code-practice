function fib(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

console.time('fib执行时间1');
let res = fib(43);
console.timeEnd('fib执行时间1');

self.postMessage('worker2');
