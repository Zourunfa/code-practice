/**
 * typeof一般用于判断一个变量的类型，我们可以利用typeof来判断number,string,object,boolean
 * function,undefined,symbol这七种类型
 * 
 * 但是typeof在判断不是object类型的时候才会具体的告诉我们是那一类型
 * 当其判断Object时候就只能告诉我们这个数据是object
 * 
 * 
 * 
 * 
 * 要判断具体是哪一种object的时候，我们需要使用instanceif这个操作符
 * 
 * 
 * 
 * 
 * typeof的原理
 * 
 * 其实，js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息
 * 
 * 
 * 
 * 000：对象
   010：浮点数
   100：字符串
   110：布尔
   1：整数

   null：所有机器码均为0
   undefined：用 −2^30 整数来表示

   所以，typeof 在判断 null 的时候就出现问题了，由于 null 的所有机器码均为0，因此直接被当做了对象来看待。 
   因此在用 typeof 来判断变量类型的时候，我们需要注意，
   最好是用 typeof 来判断基本数据类型（包括symbol），避免对 null 的判断。



   然而用 instanceof 来判断的话

 */

// 报错
//  null instanceof null; // Right-hand side of 'instanceof' is not an object


//  一个判断类型比较准确的方法
console.log(Object.prototype.toString.call(null)); //[object Null]


/**
 * instanceof来判断对象的具体类型,其实instanceof主要作用是判断一个实例石佛那个属于
 * 某种类型
 * 
 * 当然，instanceof 也可以判断一个实例是否是其父类型或者祖先类型的实例。
 * 
 * 
 * 
 */

 let person = function(){

 }

 let nicole = new person()
 nicole instanceof person //true


/**
 * instanceof主要实现原理就是只要右边变量的prototype在左边变量的原型链上即可
 * 因此instanceof 在查找的过程中会 遍历左边变量的原型链，知道找到右边变量的prototype
 * 
 * 
 * 如下
 */

 function My_instanceof(left,right){
   let rightProto = right.prototype;
   left = left.__proto__

   while(true){
     if(left == null){
       return false
     }
     if(left === rightProto){
       return true
     }
     left = left.__proto__
   }

 }

console.log( My_instanceof(1,Number));


