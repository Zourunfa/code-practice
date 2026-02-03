var s1 = 'get-element-by-id';

// 使用split()
function turnForm(str) {
  let arr = str.split('-');
  let newStr = arr[0];

  for (let i = 1; i < arr.length; i++) {
    newStr = newStr + arr[i][0].toLocaleUpperCase() + arr[i].slice(1);
  }
  return newStr;
}

console.log(turnForm(s1));

// 使用正则

function getForm(str) {
  return str.replace(/-\w/g, (x) => {
    return x.slice(1).toLocaleUpperCase();
  });
}
console.log(getForm(s1));
