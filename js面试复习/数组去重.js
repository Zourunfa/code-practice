// 利用ES6 Set去重
// function unique(arr){
//   return Array.from(new Set(arr))
// }

// var arr = [1,1,'true','true',true,true,15,15, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// console.log(unique(arr))




// 双重循环+splice
// function unique(arr){
//   for(var i=0;i<arr.length;i++){
//     for(var j=i+1;j<arr.length;j++){
//       if(arr[i] === arr[j]){
//         arr.splice(j,1);  //第一个等同于第二个，splice方法删除第二个
//         j--;
//       }
//     }
//   }
//   return arr
// }

// var arr = [1,1,'true','true',true,true,15,15, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// console.log(unique(arr))


// 利用indexOf
// function unique(arr){
//   if(!Array.isArray(arr)){
//     console.log('type err');
//     return
//   }

//   var array = []
//   for(var i=0;i<arr.length;i++){
//     // indexOf第一次出现该值的索引，如果没找到返回-1
//     if(array.indexOf(arr[i])===-1){
//       array.push(arr[i])
//     }
//   }
//   return array;
// }

// var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// console.log(unique(arr))

// 利用sort()
// function unique(arr) {
//   if (!Array.isArray(arr)) {
//       console.log('type error!')
//       return;
//   }
//   arr = arr.sort()
//   var arrry= [arr[0]];
//   for (var i = 1; i < arr.length; i++) {
//       if (arr[i] !== arr[i-1]) {
//           arrry.push(arr[i]);
//       }
//   }
//   return arrry;
// }
//    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
//       console.log(unique(arr))

// 利用includes
// function unique(arr) {
//   if (!Array.isArray(arr)) {
//       console.log('type error!')
//       return
//   }
//   var array =[];
//   for(var i = 0; i < arr.length; i++) {
//           if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
//                   array.push(arr[i]);
//             }
//   }
//   return array
// }
// var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
//   console.log(unique(arr))
  //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     //{}没有去重




// filter
// function unique(arr) {
//   return arr.filter(function(item, index, arr) {
//     //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
//     return arr.indexOf(item, 0) === index;
//   });
// }

function testOrder(arg) {
  console.log(arg);
  console.log(a);
  var arg = 'hello';
  var a = 10; 
  function a() {
     console.log('fun');
  } 
  console.log(a); 
  console.log(arg); 
}; 
testOrder('hi');
