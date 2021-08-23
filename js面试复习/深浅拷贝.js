/**
 * 深拷贝就是在另一个地址空间完全复制当前的值 ，而浅拷贝就只是指向复杂数据类型的指针
 * 
 * 换句话说浅拷贝复制基本数据类型的会创建另一个地址空间复制，而对于引用类型的数据只能
 * 复制地址的指针
 * 
 * 
 * 
 */


// function deepClone(obj = {}){
//   if(typeof obj !== 'object' || obj == null){
//     return obj;
//   }

//   let result
//   if(obj instanceof Array){
//     result = []
//   }else{
//     result = {}
//   }

//   for(let key in obj){
//     // 保证key不是原型的属性,hasOwnProperty会忽略到原型链的上继承的属性
//     if(obj.hasOwnProperty(key)){
//       result[key] = deepClone(obj[key])
//     }
//   }

//   return result;
// }


let book = {
  name: "局外人",
  types: {
    t1: "中文版",
    t2: "英文版",
    a: {
      c: 2
    }
  }
}

console.log(book_clone);

let book_clone = deepClone(book)

function deepClone(obj) {
  if (typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Array) {
    var result = []
  } else {
    var result = {}
  }

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}