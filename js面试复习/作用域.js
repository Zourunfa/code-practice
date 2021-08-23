// 对于每个执行上下文，都有三个重要的属性

/*
变量对象
作用域链
this



作用域链：当查找变量的时候，会先从当前上下文的变量对象中查找
，如果没有找到，就会从父级执行上下文的变量对象中查找，一直找到
全局上下文的变量对象，也就是全局对象。这样有多个执行上下文的变量对象
构造成的链表就叫做作用域链


函数的作用域是在函数定义的时候就决定了
这是因为函数有一个内部属性[[scope]],当函数创建的时候，就会保存所有父变量对象
，你可以理解[[scope]]就是所有父变量对象的层级链。
但是注意 :[[scope]]并不代表完整的作用域链
函数中存在这一个内部属性[[Scope]]（我们不能使用，供js引擎使用）
**/




function foo() {
  function bar() {

  }
}


// console.log(foo);
const foo = new foo()
console.log(foo);
// console.log(bar); 访问不到


// foo.[[scope]] = [
//   globalContext.VO
// ];

// bar.[[scope]] = [
//     fooContext.AO,
//     globalContext.VO
// ];

// 函数激活
// 当函数激活是，进入函数的上下文，创建VO/AO后，就会减活动对象添加到
// 内部作用域链的前端

// Scope = [AO].concat([[Scope]])

// 作用域链在此创建完毕


