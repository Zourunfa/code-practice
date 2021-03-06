/**
 * this的指向在函数定义的时终指向的是那候是确定不了的，只有在函数执行的时候才能
 * 确定this到底指向谁，实际上this的最个调用它的对象象（但是这句话不完全正确）
 * 
 * 
 * 情况一：
 * 如果一个函数中有this，但是它没有被上一级的对象调用，那么this指向的就是window
 * 这里需要说明的是在js的严格版中this指向的不是window.而是 undefined
 * 
 * 清醒二
 * 如果有一个函数中有this,这个函数有被上一级的对象调用，那么this指向的就是上级对象
 * 
 * 情况三
 * 如果上一个函数中有this，这个函数包含多个C层次的对象，尽管这个函数被最外层的对象调用
 * 但是this也只会指向它的上一级对象，
 * 
 * var o = {
    a:10,
    b:{
        // a:12,
        fn:function(){
            console.log(this.a); //undefined
        }
    }
}
o.b.fn();

尽管对象b中没有属性a，
这个this指向的也是对象b，因为this只会指向它的上一级对象，不管这个对象中有没有this要的东西。
 * 
 * 
 * 情形四
 * this永远指向它最后调用它的对象
 * 对
 * this永远指向的是最后调用它的象，也就是看它执行的时候是谁调用的，例子4中虽然函数fn是被对象b所引用，
 * 但是在将fn赋值给变量j的时候并没有执行所以最终指向的是window，这和例子3是不一样的，例子3是直接执行了fn
 * 
 * var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //undefined
            console.log(this); //window
        }
    }
}
var j = o.b.fn;
j();



 * 
 * 情形5：
 * 如果函数的返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是对象，this
 * 还是会指向函数的实例
 * 
 * 
 */