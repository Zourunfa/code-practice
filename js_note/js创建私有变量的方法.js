// 通过闭包创建私有变量
// let createPrivate = function(value){
//   let _priate = value 
//   return {
//     getValue:()=>{
//       return _private
//     },
//     setVaue:(value)=>{
//       _priate = value
//     }
//   }
// }



// 通过Symbol创建私有变量-将私有变量值存储到实例化的类中
let createPrivate = (
  function () {
    const _private = Symbol('pv')
    class createPrivate {
      constructor(value) {
        this[_private] = value
      }
      getValue() {
        return this[_private]
      }
      setValue(value) {
        return this[_private] = value
      }
    }
    return createPrivate
  }
)();

// let p1 = new createPrivate('1')

// console.log(p1.getValue());
// console.log(p1.setValue('蝴蝶效应'));
// console.log(p1.getValue());


// 通过weakMap创建 私有变量集合 - 将私有化变量值存储到WeakMap的数据结构变量中

// let createPrivate = (
//   function () {
//     const _private = new WeakMap()
//     class createPrivate {
//       constructor(value) {
//         _private.set(this, value)
//       }
//       getValue() {
//         return _private.get(this)
//       }
//       setValue(value) {
//         return _private.set(this, value)
//       }
//     }
//     return createPrivate
//   }
// )()


// let p1 = new createPrivate('1')
// console.log(p1);
// console.log(p1.getValue());
// console.log(p1.setValue('质量互变'));
// p1.getValue()



// 利用ES新提案 创建私有变量(#号开头的属性,只能声明在class中私有)
class createPrivate {
  #x;
  constructor(value) {
    this.#x = value
  }
  getValue() {
    return this.#x
  }
  setValue() {
    this.#x = value
  }
}

let _private = new createPrivate('x')
console.log(_private.#x);

