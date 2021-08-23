// async的错误处理

// async function af() {
//   console.log(a); //下面catch可以收到
//   throw new Error('爽哦爱山东爱') //下面的catch也能够收到
//   // await
// }
// af().catch(e => {
//   console.log(e);
// })

// new Promise((resolve, reject) => {
//   console.log(a); //Promise内部自己也实现了try catch 此变量没有定义自己会报错 ，下面也会被catch捕获
// }).catch(error => {
//   console.log(error);
// })


// await的错误处理

// async function fn() {
//   let article = await axios.get('https://zhuanlan.zhihu.com/p/45249747')
//   return article
// }

// fn().then(artic => {
//   console.log(artic);
// })

