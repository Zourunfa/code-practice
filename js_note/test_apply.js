// ===================== 手写 call =====================
Function.prototype.myCall = function(context) {
    var context = context || window
    context.fn = this
    var args = [...arguments].slice(1)
    var result = context.fn(...args)
    delete context.fn
    return result
}

// ===================== 手写 apply =====================
Function.prototype.myApply = function(context) {
    var context = context || window
    context.fn = this
    var result
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

// ===================== 手写 bind =====================
Function.prototype.my_bind = function(context){ // 在Function原型上定义my_bind方法，context为要绑定的this目标对象
    if (typeof this !== 'function'){ // 检查调用者是否为函数类型
        throw new TypeError('Error') // 如果不是函数，抛出类型错误
    }
    var _this = this  // 保存当前函数（调用my_bind的函数）到_this变量，防止后续this指向丢失
    var args = [...arguments].slice(1) // 获取除第一个参数外的所有参数，转为数组并从第二个元素开始截取
    return function F(){ // 返回一个新的函数F，用于延迟执行
        if (this instanceof F){ // 判断是否通过new关键字调用（当前函数F是否是this的实例）
            return new _this(...args, ...arguments) // 如果是new调用，直接创建_this的实例，合并两次调用的参数
        }
        return _this.apply(context, args.concat(...arguments)) // 如果是普通调用，用apply绑定context，合并参数后执行
    }
}

// ===================== 应用场景 =====================

// 1. call 的应用
function callExample() {
    // 1.1 改变 this 指向
    var obj1 = {
        name: '张三'
    }
    var obj2 = {
        name: '李四'
    }
    function getName() {
        console.log(this.name)
    }
    getName.myCall(obj1) // 张三
    getName.myCall(obj2) // 李四

    // 1.2 借用方法
    var arr = [1, 2, 3, 4, 5]
    var max = Math.max.myCall(null, ...arr)
    console.log(max) // 5

    // 1.3 类数组转数组
    function getArgs() {
        var args = Array.prototype.slice.myCall(arguments)
        console.log(args)
    }
    getArgs(1, 2, 3) // [1, 2, 3]
}

// 2. apply 的应用
function applyExample() {
    // 2.1 改变 this 指向
    var obj = {
        name: '王五'
    }
    function sayName(age) {
        console.log(this.name, age)
    }
    sayName.myApply(obj, [20]) // 王五 20

    // 2.2 找出数组最大值
    var numbers = [5, 6, 2, 3, 7]
    var max = Math.max.myApply(null, numbers)
    console.log(max) // 7

    // 2.3 数组合并
    var arr1 = [1, 2]
    var arr2 = [3, 4]
    Array.prototype.push.myApply(arr1, arr2)
    console.log(arr1) // [1, 2, 3, 4]
}

// 3. bind 的应用
function bindExample() {
    // 3.1 绑定 this 指向
    var module = {
        x: 81,
        getX: function() { return this.x; }
    }
    var retrieveX = module.getX
    console.log(retrieveX()) // undefined 或 9（全局）
    var boundGetX = retrieveX.myBind(module)
    console.log(boundGetX()) // 81

    // 3.2 预设参数
    function multiply(a, b) {
        return a * b
    }
    var double = multiply.myBind(null, 2)
    console.log(double(3)) // 6

    // 3.3 作为构造函数
    function Person(name, age) {
        this.name = name
        this.age = age
    }
    var BoundPerson = Person.myBind(null, '张三')
    var person = new BoundPerson(20)
    console.log(person.name, person.age) // 张三 20

    // 3.4 事件处理
    var button = {
        handleClick: function(e) {
            console.log(this, e)
        }
    }
    // 绑定到 button 对象
    document.addEventListener('click', button.handleClick.myBind(button))
}

// ===================== 区别总结 =====================
/*
区别：
1. call: 参数逐个传入
2. apply: 参数以数组形式传入
3. bind: 返回新函数，需要手动调用
*/

// ===================== 验证示例 =====================
callExample()
applyExample()
bindExample()


Function.prototype.my_call1 = function(context){
    var context = context || window
    context.fn = this
    var result = context.fn([...arguments].slice(1))
    delete context.fn
    return result
}

Function.prototype.my_Bind = function(context){
    if (typeof this !== 'function'){
        throw new Error('no function')
    }

    var _this = this 
    var args = [...arguments].slice(1)

    return function F(){
        if (this instanceof F){
            return new _this(...args,...arguments)
        }
        return context.apply(this, args.concat(arguments))
    }

}