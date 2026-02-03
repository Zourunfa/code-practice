/**
 * 闭包是那些能够访问到自由变量的函数
 *
 * 自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量
 *
 * 闭包 = 函数 + 函数能够访问的自由变量
 *
 *
 *
 */

var a = 1

function foo() {
  console.log(a)
}

foo()

//  foo函数可以访问变量a,但既不是foo函数的局部变量，函数也不是foo的参数，所以a
//  就是自由变量
//  那么 函数foo+foo函数访问的自由变量a就构成了一个闭包，但是这只是理论上的闭包

/**
 * 实践上的闭包
 * 1,从理论角度：所有的函数。因为他们都在创建的时候就将上层上下文的数据保存起来了
 * 哪怕是简单的全局变量也是如此，因为函数中访问全局变量，就当是在访问自由变量，这个
 * 时候使用最外层作用域。
 * 2，从实践角度：以下函数才算是闭包：
 *    （1）即使创建它的上下文已经销毁，它依旧存在（比如：内部函数从父函数中返回）
 *     (2) 在代码中引用了自由变量
 *
 *
 * 看下面的例子
 */

var scope = 'global scope'

function checkscope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f
}

var foo = checkscope()
foo()

/**
 * 首先我们要分析一下这段代码中执行上下文栈和执行上下文的变化情况
 *
 * 1，进入全局代码，创建全局执行上下文，全局执行上下文进入执行上下文栈
 * 2，全局执行上下文初始化
 * 3，执行checkscope函数，创建checkscope函数执行上下文，checkscope执行上下文进入执行上下文栈
 * 4，执行checkscope函数，创建变量对象文，作用域链，this等
 * 5，checkscope函数执行完毕,checkscope执行上下从执行上下文栈中弹出
 * 6, 执行f函数，创建f函数执行上下文，f执行上下文被压入执行上下文栈
 * 7，f函数上下文初始化，创建变量对象，作用域链，this等
 * 8，f函数执行完毕，f函数上下文从执行上下文栈中弹出
 */

/**
 * 当f函数执行的时候,checkscope函数的上下文已经被销毁了（即从执行上下文栈中被弹出）
 * 怎么还会读取到checkscope作用域下的scope值了？
 *
 *
 */

// 闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合。
// 换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。

function makeAdder(x) {
  return function (y) {
    return x + y
  }
}

var add5 = makeAdder(5)
var add10 = makeAdder(10)

console.log(add5(2)) // 7
console.log(add10(2)) // 12
// 从本质上讲，makeAdder 是一个函数工厂 — 他创建了将指定的值和它的参数相加求和的函数。在上面的示例中，我们使用函数工厂创建了两个新函数 — 一个将其参数和 5 求和，另一个和 10 求和。

// add5 和 add10 都是闭包。它们共享相同的函数定义，但是保存了不同的词法环境。在 add5 的环境中，x 为 5。而在 add10 中，x 则为 10。

// 用闭包模拟私有方法

// 私有方法不仅仅有利于限制对代码的访问：还提供了管理全局命名空间的强大能力，避免非核心的方法弄乱了代码的公共接口部分。
var Counter = (function () {
  var privateCounter = 0
  function changeBy(val) {
    privateCounter += val
  }
  return {
    increment: function () {
      changeBy(1)
    },
    decrement: function () {
      changeBy(-1)
    },
    value: function () {
      return privateCounter
    },
  }
})()

var Counter = (function(){
  var privateCounter = 0

  function changeBy(val) {
    privateCounter += val
  }
  return {
    increament: function () {
      changeBy(1)
    },
    decrement: function () {
      changeBy(-1)
    },
    value: function () {
      return privateCounter
    },
  }
})()
console.log(Counter.value()) /* logs 0 */
Counter.increment()
Counter.increment()
console.log(Counter.value()) /* logs 2 */
Counter.decrement()
console.log(Counter.value()) /* logs 1 */

// 在之前的示例中，每个闭包都有它自己的词法环境；而这次我们只创建了一个词法环境，为三个函数所共享：Counter.increment，Counter.decrement 和 Counter.value。

// 在循环中创建闭包：一个常见错误

// 经典例子
function showHelp(help) {
  document.getElementById('help').innerHTML = help
}

function makeHelpCallback(help) {
  return function () {
    showHelp(help)
  }
}

function setupHelp() {
  var helpText = [
    { id: 'email', help: 'Your e-mail address' },
    { id: 'name', help: 'Your full name' },
    { id: 'age', help: 'Your age (you must be over 16)' },
  ]

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i]
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help)
  }
}

setupHelp()

// 匿名闭包
// function showHelp(help) {
//   document.getElementById("help").innerHTML = help;
// }

// function setupHelp() {
//   var helpText = [
//     { id: "email", help: "Your e-mail address" },
//     { id: "name", help: "Your full name" },
//     { id: "age", help: "Your age (you must be over 16)" },
//   ];

//   for (var i = 0; i < helpText.length; i++) {
//     (function () {
//       var item = helpText[i];
//       document.getElementById(item.id).onfocus = function () {
//         showHelp(item.help);
//       };
//     })(); // 马上把当前循环项的 item 与事件回调相关联起来
//   }
// }

// setupHelp();

/**
 * 
 * 性能考量
如果不是某些特定任务需要使用闭包，在其他函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。

例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。原因是这将导致每次构造器被调用时，方法都会被重新赋值一次（也就是说，对于每个对象的创建，方法都会被重新赋值）。
 */

