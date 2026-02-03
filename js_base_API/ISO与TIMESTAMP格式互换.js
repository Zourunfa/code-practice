const date = new Date('2001-7-8 08:22:22')
// 转化为时间戳的方法
console.log(date * 1);
console.log(Number(date));
console.log(date.valueOf());
console.log(date.getTime());


// 转化为具体时间
const timestamp = date.valueOf()
console.log(new Date(timestamp));