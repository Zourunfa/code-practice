// const date = new Date()
// console.log(date); //Sun Apr 11 2021 11:25:52 GMT+0800 (中国标准时间)
// console.log(typeof date); //object
// console.log(date * 1); // 1618111552641 从1970年0时0分0秒到现在的毫秒数

// const date1 = Date()
// console.log(date1); //Sun Apr 11 2021 11:27:10 GMT+0800 (中国标准时间)
// console.log(typeof date1); //string
// console.log(date1 * 1); //NaN


// const date2 = Date.now()
// console.log(date2);


// const start = Date.now()

// for (let i = 0; i < 20000000; i++) {
// }
// const end = Date.now()
// console.log(end - start);

// console.time("for");

// for (let i = 0; i < 20000000; i++) {
// }
// console.timeEnd("for")


// const date = new Date("2021-4-9")
// console.log(date);
// console.log(date.getMonth() + 1); //月份是从零开始的 所以加1

// const date = new Date(1999, 3, 24, 12, 12, 12)
// console.log(date); //Sat Apr 24 1999 12:12:12 GMT+0800 (中国标准时间)
const arr = new Date(...[1999, 3, 24, 12, 12, 12])
console.log(arr); //Sat Apr 24 1999 12:12:12 GMT+0800 (中国标准时间)