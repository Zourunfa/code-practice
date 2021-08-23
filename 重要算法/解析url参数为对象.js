
// function parseParam(url) {
//   let resObj = {}
//   // url.slice(url.indexOf("?") + 1, url.length)
//   let arr = url.split('?')[1].toString().split('&')

//   arr.forEach(item => {
//     let [key, val] = item.split('=')
//     // 如果是数字 转换为数字
//     val = /^\d+$/.test(val) ? parseFloat(val) : val;
//     resObj[key] = val
//   })

//   return resObj

// }

const url = 'http://www.baidu.com/we/index.html?id=098&aaa=123&ccc=456'


function parseParam(url) {
  let arr = url.split('?')[1].split('&')
  console.log(arr);
  let obj = {}
  arr.forEach(item => {
    console.log(item.split('='));
    let [key, value] = item.split('=')
    if (/^\d+$/.test(value)) {
      value = parseInt(value)
    }
    obj[key] = value
  })
  return obj

}

console.log(parseParam(url));



















// function parseParam(url) {
//   const data = url.split('?')[1].toString().split('?')

//   const map = data.toString().split('&')
//   const obj = {}

//   map.forEach(item => {
//     let t = item.split('=')
//     let [key, value] = [t[0], t[1]]
//     value = /^\d+$/.test(value) ? parseFloat(value) : value
//     obj[key] = value
//   })

//   return obj

// }

// console.log(parseParam(url));


// function parseParam(url) {
//   const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
//   const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
//   let paramsObj = {};
//   // 将 params 存到对象中
//   paramsArr.forEach(param => {
//     if (/=/.test(param)) { // 处理有 value 的参数
//       let [key, val] = param.split('='); // 分割 key 和 value
//       val = decodeURIComponent(val); // 解码
//       val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字

//       if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
//         paramsObj[key] = [].concat(paramsObj[key], val);
//       } else { // 如果对象没有这个 key，创建 key 并设置值
//         paramsObj[key] = val;
//       }
//     } else { // 处理没有 value 的参数
//       paramsObj[param] = true;
//     }
//   })

//   return paramsObj;
// }


// console.log(parseParam(url));




//  解析url参数
// 传统方式
// function query(name) {
//   // const search = location.search.substr(1)
//   const search = 'a=10&b=20&c=30'
//   // console.log(search);
//   const reg = new RegExp(`(^|&)${name}=([^$]*)(&|$)`, 'i')
//   console.log(reg);
//   // (^|&)  ^匹配输入的开始 或者 匹配以& 开头
//   // ([^$]*) 意思是除了& 其他字符串都要
//   // i     是不区分大小写
//   search.match(reg)

//   let res
//   search.replace(reg, (p, p1, p2) => {
//     console.log(p, p1, p2);
//     res = p2
//   })
//   return res
// }

// console.log(query('a'));


// 新的API  URLsearchParams (考虑兼容性问题)
// function query(name) {
//   const search = location.search
//   const p = new URLSearchParams(search)
//   return p.get(name)
// }