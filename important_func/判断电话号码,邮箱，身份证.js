// 电话号码判断
function isPhone(tel) {
  var regx = /^1[34578]\d{9}$/;
  return regx.test(tel);
}

console.log(isPhone(15073631889));

// 验证邮箱
function isEmail(email) {
  var regx = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/;
  return regx.test(email);
}
