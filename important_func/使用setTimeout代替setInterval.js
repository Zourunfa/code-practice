/**
 *
 * 代码比较简单，我们只是在setTimeout的方法里面又调用了一次setTimeout，就可以达到间歇调用的目的。
重点来了，为什么作者建议我们使用setTimeout代替setInterval呢？setTimeout式的间歇调用和传统的setInterval间歇调用有什么区别呢？
区别在于，setInterval间歇调用，是在前一个方法执行前，就开始计时，比如间歇时间是500ms，那么不管那时候前一个方法是否已经执行完毕，都会把后一个方法放入执行的序列中。这时候就会发生一个问题，假如前一个方法的执行时间超过500ms，加入是1000ms，那么就意味着，前一个方法执行结束后，后一个方法马上就会执行，因为此时间歇时间已经超过500ms了。

作者：_frank
链接：https://juejin.cn/post/6844903854107000839
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */



// let executeTimes = 0
// let intervalTime = 500
// let intervalId = null




// let intervalFun = () => {
//   executeTimes++
//   console.log(`doIntervalFun--${executeTimes}`);
//   if (executeTimes == 5) {
//     clearInterval(intervalId)
//   }
// }

// let timeOutFun = () => {
//   executeTimes++
//   console.log(`doTimeOutFun--${executeTimes}`);
//   if (executeTimes < 5) {
//     setTimeout(timeOutFun, intervalTime)
//   }
// }
// // intervalId = setInterval(intervalFun, intervalTime)

// setTimeout(timeOutFun, intervalTime)




// 比较上面两者实现区别的代码

var executeTimes = 0;
var intervalTime = 500;
var intervalId = null;
var oriTime = new Date().getTime();

// 放开下面的注释运行setInterval的Demo
intervalId = setInterval(intervalFun, intervalTime);
// 放开下面的注释运行setTimeout的Demo
// setTimeout(timeOutFun,intervalTime);

function intervalFun() {
  executeTimes++;
  var nowExecuteTimes = executeTimes;
  var timeDiff = new Date().getTime() - oriTime;
  console.log("doIntervalFun——" + nowExecuteTimes + ", after " + timeDiff + "ms");
  var delayParam = 0;
  sleep(1000);
  console.log("doIntervalFun——" + nowExecuteTimes + " finish !");
  if (executeTimes == 5) {
    clearInterval(intervalId);
  }
}

function timeOutFun() {
  executeTimes++;
  var nowExecuteTimes = executeTimes;
  var timeDiff = new Date().getTime() - oriTime;
  console.log("doTimeOutFun——" + nowExecuteTimes + ", after " + timeDiff + "ms");
  var delayParam = 0;
  sleep(1000);
  console.log("doTimeOutFun——" + nowExecuteTimes + " finish !");
  if (executeTimes < 5) {
    setTimeout(arguments.callee, intervalTime);
  }
}

function sleep(sleepTime) {
  var start = new Date().getTime();
  while (true) {
    if (new Date().getTime() - start > sleepTime) {
      break;
    }
  }
}

/**
 * 可以发现，fun2和fun1开始的间歇接近1000ms，刚好就是fun1的执行时间，也就意味着fun1执行完后fun2马上就执行了，和我们间歇调用的初衷背道而驰。
我们注释掉setInterval的Demo方法，放开setTimeout的Demo方法，运行，查看控制台

作者：_frank
链接：https://juejin.cn/post/6844903854107000839
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */