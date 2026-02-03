// let a = '34';
// let b = '1234567'; // 返回 2
// a = '35';
// b = '1234567'; // 返回 -1
a = '355';
b = '12354355'; // 返回 5
// isContain(a,b);

function isContain(a, b) {
  const reg = new RegExp(a);
  // console.log(reg);
  let res = -1;
  b.replace(reg, (x, x1, x2) => {
    console.log(x, x1, x2);
    res = x1;
  });
  return res;
}

console.log(isContain(a, b));
