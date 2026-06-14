// 利用ES6 Set去重
// function unique(arr){
//   return Array.from(new Set(arr))
// }

function unique(arr){
  return Array.from(new Set(arr))
}
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

function unique(arr){
  for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i] === arr[j]){
        arr.splice(j,1)
        j--
      }
    }
  }
  return arr
}
// var arr = [1,1,'true','true',true,true,15,15, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// console.log(unique(arr))

// 利用indexOf
function unique(arr){
  if(!Array.isArray(arr)){
    console.log('type err');
 }


  var array = []
  for(var i=0;i<arr.length;i++){
    // indexOf第一次出现该值的索引，如果没找到返回-1
    if(array.indexOf(arr[i])===-1){
      array.push(arr[i])
    }
  }
  return array;
}

function unique(arr){
  if(!Array.isArray(arr)){
    console.log('type arr')
  }

  var array = []
  for(var i=0;i<arr.length;i++){
    // indexOf 第一次出现该值的索引，如果没找到返回-1
    if(array.indexOf(arr[i] === -1)){
      array.push(arr[i])
    }
  }
  return array
}

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

// function uniqueArray(arr) {
//   return Array.from(
//     new Set(
//       arr
//         .filter(item => item !== undefined) // 过滤掉undefined元素
//         .map(item => JSON.stringify(item))
//     )
//   ).map(item => JSON.parse(item))
// }

function unique(arr) {
  let set = new Set()
  return arr.filter(item => {
    return set.has(typeof item + item) ? false : set.add(typeof item + item)
  })
}


function unique(arr){
  let set = new Set()
  return arr.filter(item =>{
    return set.has(typeof item + item) ? false : set.add(typeof item + item)
  })
}

function unique(arr){
  let set = new Set();
  return arr.filter(item=>{
    return set.has(typeof item + item) ? false : set.add(typeof item + item)
  })
}


// ============ 详细解释每行代码 ============

/**
 * 使用 Set + filter 实现数组去重
 * 这个方法可以区分不同类型的相同值，比如数字1和字符串'1'
 */

console.log('\n========== 逐行解释 ==========')

function uniqueWithComments(arr) {
  // 第1行：创建一个 Set 集合用于存储已经出现过的值
  // Set 的特点：可以快速判断某个值是否存在（has方法）
  let set = new Set()
  
  // 第2行：使用 filter 方法遍历数组，过滤出不重复的元素
  // filter 会对数组的每个元素执行回调函数，返回 true 的元素会被保留
  return arr.filter(item => {
    
    // 第3行：核心逻辑 - 判断元素是否重复
    // typeof item + item：将类型和值拼接成字符串作为唯一标识
    // set.has(...)：检查这个标识是否已经存在
    // 如果存在（重复）：返回 false，filter 会过滤掉这个元素
    // 如果不存在（首次出现）：执行 set.add(...) 添加到集合，并返回 Set 对象（truthy值），filter 保留这个元素
    return set.has(typeof item + item) ? false : set.add(typeof item + item)
  })
}

console.log('\n========== 为什么要用 typeof item + item？ ==========')

// 问题：如果直接用 item 作为标识，无法区分不同类型的相同值
const testArr1 = [1, '1', true, 'true']

// 方案1：直接用 item（有问题）
function uniqueSimple(arr) {
  let set = new Set()
  return arr.filter(item => {
    return set.has(item) ? false : set.add(item)
  })
}

console.log('直接用 item:', uniqueSimple(testArr1))
// 结果：[1, '1', true, 'true'] - 看起来正常，但这是因为 Set 本身会区分类型

// 方案2：用 typeof item + item（更精确）
console.log('用 typeof + item:', uniqueWithComments(testArr1))
// 结果：[1, '1', true, 'true']

console.log('\n拼接后的标识：')
console.log('数字 1:', typeof 1 + 1)           // 'number1'
console.log('字符串 "1":', typeof '1' + '1')   // 'string1'
console.log('布尔 true:', typeof true + true)  // 'booleantrue'
console.log('字符串 "true":', typeof 'true' + 'true') // 'stringtrue'

console.log('\n========== set.add() 的返回值 ==========')

// set.add() 会返回 Set 对象本身，这是一个 truthy 值
const mySet = new Set()
const result = mySet.add('hello')
console.log('set.add() 返回值:', result)        // Set(1) { 'hello' }
console.log('返回值 === mySet:', result === mySet) // true
console.log('Boolean(result):', Boolean(result))   // true

console.log('\n所以三元表达式的逻辑：')
console.log('set.has(...) ? false : set.add(...)')
console.log('↓')
console.log('如果已存在 → 返回 false → filter 过滤掉')
console.log('如果不存在 → 执行 add 并返回 Set 对象（truthy）→ filter 保留')

console.log('\n========== 完整示例 ==========')

const testArr2 = [
  1, 1,                    // 数字重复
  '1', '1',                // 字符串重复
  true, true,              // 布尔重复
  'true', 'true',          // 字符串重复
  null, null,              // null 重复
  undefined, undefined,    // undefined 重复
  NaN, NaN,                // NaN 重复
  {}, {}                   // 对象（不会去重，因为引用不同）
]

console.log('原数组:', testArr2)
console.log('去重后:', uniqueWithComments(testArr2))

console.log('\n========== 执行过程演示 ==========')

function uniqueDebug(arr) {
  let set = new Set()
  let step = 0
  
  return arr.filter(item => {
    step++
    const key = typeof item + item
    const exists = set.has(key)
    
    console.log(`步骤${step}: item=${JSON.stringify(item)}, key="${key}", 已存在=${exists}`)
    
    if (exists) {
      console.log(`  → 返回 false，过滤掉`)
      return false
    } else {
      set.add(key)
      console.log(`  → 添加到 Set，保留`)
      return true
    }
  })
}

const simpleArr = [1, 2, 1, '1', 2, '2']
console.log('\n处理数组:', simpleArr)
const result2 = uniqueDebug(simpleArr)
console.log('\n最终结果:', result2)

console.log('\n========== 这个方法的优缺点 ==========')
console.log(`
✅ 优点：
1. 可以区分不同类型的相同值（1 和 '1'）
2. 可以正确处理 NaN（typeof NaN + NaN = 'numberNaN'）
3. 代码简洁，一行搞定

❌ 缺点：
1. 无法去重对象（因为对象转字符串都是 '[object Object]'）
2. typeof item + item 可能产生相同的 key
   例如：typeof null + null = 'objectnull'
        typeof 'objectnull' + 'objectnull' = 'stringobjectnull'
   但这种情况极少见

⚠️ 注意：
set.add() 返回 Set 对象本身，是 truthy 值
所以 set.add(...) 在三元表达式中相当于 true
`)

console.log('\n========== 对象去重的问题 ==========')

const arrWithObjects = [{a: 1}, {a: 1}, {b: 2}]
console.log('包含对象的数组:', arrWithObjects)
console.log('去重后:', uniqueWithComments(arrWithObjects))
console.log('问题：对象没有去重，因为 typeof {} + {} = "object[object Object]"')

// 如果要去重对象，需要用 JSON.stringify
function uniqueWithObjects(arr) {
  let set = new Set()
  return arr.filter(item => {
    const key = typeof item === 'object' && item !== null
      ? JSON.stringify(item)
      : typeof item + item
    return set.has(key) ? false : set.add(key)
  })
}

console.log('改进后（对象用 JSON.stringify）:', uniqueWithObjects(arrWithObjects))




function unique(arr){
  let set = new Set()
  return arr.filter(item=>{
    return set.has(typeof item + item) ? false : set.add(typeof item + item)
  })
}

function unique(arr){
  let set = new Set()
  return arr.filter(item=>{
    return set.has(typeof item + item) ? false : set.add(typeof item + item)
  })
}
function instanseOf(left,right){
  let leftProto = left.__proto__
  let rightProto = right.__proto__
  let res = false
  while(true){
    if(leftProto.__proto__ == null) {
      return false
    }
    if(leftProto = rightProto){
      return true
    }
    leftProto = leftProto.__proto__ 
  }
}