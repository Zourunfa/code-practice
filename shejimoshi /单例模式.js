class SingleObject{
  init(){
    console.log('单例创建成功');
  }
}
// 注意这个getInstance是一个静态方法，必须写在class的外面
// 只有这样才符合单例模式的要求 
// 下面是匿名函数立即执行表达式的写法

SingleObject.getInstance = (function(){
  let instance = null 
  return function(){
    if(!instance){
      instance = new SingleObject()
    }
    return instance
  }
})()

const obj1 = SingleObject.getInstance()
console.log(obj1);
const obj2 = SingleObject.getInstance()


console.log(obj1 === obj2);

// js相对于java不会在new的时候报错，但是new穿件的并不是一个单例
const objNo = new SingleObject()
console.log(objNo);
console.log(objNo === obj1);