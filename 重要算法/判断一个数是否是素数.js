

function judge(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}



function getNum(num) {
  let count = 0
  for (let i = 2; i < num; i++) {
    if (judge(i))
      count++
  }
  return count
}


// console.log(getNum(3));
// console.log(getNum(4));
// console.log(getNum(5));


// 哈希法
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(1);
  console.log(isPrime);
  let ans = 0;
  for (let i = 2; i < n; ++i) {
    if (isPrime[i]) {
      ans += 1;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0;
      }
    }
  }
  return ans;
};

console.log(countPrimes(10));