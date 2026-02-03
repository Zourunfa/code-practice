/***
 * 
 * 立即执行函数是匿名的
 * 
 * 
 * 1,当圆括号出现在匿名函数的末尾想要调用函数时，它会默认将函数当成函数声明
 * 2,当圆括号包裹函数时，它会默认将函数作为表达式去解析，而不是函数声明
 * 
 * 
 */

(function(){/* code */}());//Crockford recommends this one，括号内的表达式代表函数立即调用表达式
(function(){/* code */})();//But this one works just as well，括号内的表达式代表函数表达式


/*
作用  

保存闭包的状态



*/