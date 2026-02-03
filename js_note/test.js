// console.log(NaN == null); // false

// console.log(Infinity+1 !== Infinity);

// console.log(null === undefined);
// console.log(null == null);

// debugger

// var name = 'Jay'

// function Person(name){
//   this.name = name
//   console.log(this.name);
// }

// var a = Person('Tom')
// console.log(name);

// console.log(a);
// var b = new Person('Michal')
// console.log(b);


// console.log(typeof NaN); //number

// console.log(typeof Function); //function

// console.log(typeof Object); //function

// console.log(Date.now());
// console.log(typeof Date.now()); //number
// console.log(0);

// var arr1=new Array("1","2","3");   

//  var arr2=new Array("4","5","6");   

// Array.prototype.push.apply(arr1,arr2);   
// console.log(arr1); //["1", "2", "3", "4", "5", "6"]

// var foo = "10"+3-"1";
// console.log(typeof foo); //number
// console.log(foo); // 102


/**
 * 
 *slice() 方法可从已有的数组中返回选定的元素。
返回值：返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
说明
请注意，该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()。
所以在这里就是对集合A应用slice，返回一个新的数组，不对数组做任何改变。
 */
function add(a, b) {
  console.log([].slice.apply(arguments));
  return a + b
}
add(1, 2)


// 2.toString() //报错
console.log(typeof 2..toString());
console.log(typeof 2.toString());
console.log(typeof (2).toString());

/**
 * 
 * 而  concat()方法用于连接两个或多个数组。该方法不会改变现有的数组，
 * 而仅仅会返回被连接数组的一个副本，返回一个新的数组。
 * 该数组是通过把所有的arrayX参数添加到arryaObject中生成的，
 * 如果要进行 concat()操作的参数是数组，那么添加的是数组中的元素，而不是数组。
 * 
 * 
 * iframe是用来在网页中插入第三方页面，
 * 早期的页面使用iframe主要是用于导航栏这种很多页面都相同的部分，这样在切换页面的时候避免重复下载
 * 
 * 
 * /d  匹配一个数字
 * /w 匹配一个字符
 * +   匹配前面一个表达式 1 或多次  相当于 {1<}
 * *  匹配前面一个表达式 0次或多次
 * 
 */

function test(a) {
  a = a + 10;
}
var a = 10;
test(a);
console.log(a);

// javascript中[]转化为布尔值为true，即Boolean([])返回true，加上两个非符号返回仍为true。
// Boolean('')返回false，加上两个非符号，最终结果为false。

var val = 12;
function fun1() {
  console.log(val); // undefined 函数会先找寻自己的内部变量  函数会先提升
  var val = 20;
  console.log(val);
}
fun1();

/**
 * firstChild
lastChild
nextSibling：下一个兄弟节点
previousSibling：前一个兄弟节点
parentNode 返回父节点
 */

/**
 * 阻止默认事件：
e.preventDefault()
e.returnValue = false  (IE)
阻止冒泡：
e.stopPropagation()
e.cancelBubble = true (IE)
 */