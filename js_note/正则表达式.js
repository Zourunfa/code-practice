// // 邮政编码
// /\d{6}/

// // 小写英文字母
// /^[a-z]+$/

// //  英文字母
// /^[a-zA-Z]+$/

// // 日期格式 2019.12.1
// /^\d{4}-\d{1,2}-\d{1,2}$/

// // 用户名
// /^[a-zA-Z]\w{5,170}$/

// // 简单的IP地址匹配
// /\d+\.\d+\.\d+\.\+/



// 从字符串中取出数值类型

// let str = "hauasdfh324nef893123y90"
// const reg = /[0-9]/g
// const res = str.match(reg)
// console.log(res);


// 创建正则表达式的方式

// 1，字面量形式-需要注意的是 字面量形式的正则表达式 是没有办法操作变量的

// const str = "sattre is smart"
// let x = 's'
// console.log(/x/.test(str)); //false
// // eval是把字符串变成js表达式
// console.log(eval(`/${x}/`).test(str));

// 2,使用对象的形式创建正则表达式
// let str = 'All we need is love'
// let reg = new RegExp('A', 'g') // 第二个参数代表匹配的模式
// console.log(reg.test(str));




// 选择符  |

// let str1 = 'a'
// let str2 = 'b'
// console.log(/a|b/.test(str1)); //true
// console.log(/a|b/.test(str2)); //true

// console.log('/\d+\.\d+/');

// let price = 23.34
// console.log(/\d+\.\d+/.test(23.34)); //true

// let reg = new RegExp('\d+\.\d+')
// console.log(reg.test(price)); //false

// let reg1 = new RegExp('\\d+\\.\\d+')
// console.log(reg1.test(price)); //true


// const url = 'https://space.bilibili.com/17819768/'
// console.log(/https?:\/\/\w+\.\w+\.\w+\/\d+\//.test(url)); //true




// 字符边界约束
// let str = '2dasdjifeiorepo'
// let str2 = '3dsf5'
// console.log(/^\d\w+\d$/.test(str));
// console.log(/^\d\w+\d$/.test(str2));

// 元字符


// let str = `张三:155565666523,李四:2564154156561`

// console.log(str.match(/[^\d,:]+/g));


// let str = `#$%483023989@qq.com`
// let str2 = `483023989@qq.com`
// console.log(str.match(/^\w+@\w+\.\w+$/));
// console.log(str2.match(/^\w+@\w+\.\w+$/));


// []

// let str = 'aaaabsdsc'
// console.log(str.match(/[abc]/g));
// console.log(str.match(/abc/g));

// let str = '$%^&*()(*&^&*(sfhsdjf   asdoia ..fdsdgf nsefxg\][iogjpsf'
// console.log(str.length);
// console.log(str.match(/[\s\S]/g));


// let str = 'Www'
// console.log(str.match(/w/gi)); //["W", "w", "w"]



// 多行匹配
// let str = `
//  #1 js,200元 #    
// #2 vue,500元 #    
// #3 angular,199元 # song   
// #4 node.js,188元 #   
// `

// let res = str.match(/\s*#\d+\s+.+\s+#\s+$/gm).map(item => {
//   item = item.replace(/\s*#\d+\s*/, '').replace(/#/, '')
//   let [name, price] = item.split(",")
//   return { name, price }
// })

// console.log(res);



// let str = "sadhusafsafha.啥事爱上撒大声地?!"


// // 匹配字符
// console.log(str.match(/\p{L}/gu));
// // 匹配标点符号
// console.log(str.match(/\p{P}/gu));
// // 匹配汉字
// console.log(str.match(/\p{sc=Han}/gu));


// let str = 'nihaowoshizhongguoren'

// let reg = /\w/g

// console.log(reg.lastIndex);
// console.log(reg.exec(str));
// console.log(reg.lastIndex);
// console.log(reg.exec(str));

// while ((res = reg.exec(str))) {
//   console.log(res);
// }



// let str = '尼采的电话是:516515614,111111111,2222222222 没重要的事千万不要打给他，因为他已经疯了'

// let reg = /(\d+),?/y
// reg.lastIndex = 7
// console.log(reg.exec(str));
// console.log(reg.exec(str));
// console.log(reg.exec(str));
// console.log(reg.exec(str));


// let str = 'paul_sattre'
// console.log(str.match(/st/g)); //需要st一起才能匹配
// console.log(str.match(/[st]/g)); //需要只要有s 或者 t 就可以匹配

// let date1 = '2021/4/9'
// let date2 = '2021-4-9'
// let date3 = '2021-4/9'

// console.log(date1.match(/\d+([-\/])\d+\1\d+/));
// console.log(date2.match(/\d+([-\/])\d+\1\d+/));
// console.log(date3.match(/\d+([-\/])\d+\1\d+/));


// 区间匹配
// let str = '2021 hello'
// console.log(str.match(/[0-9]+/g)); //["2021"]
// console.log(str.match(/[a-z]+/g));  //["hello"]



// 排除匹配
// let str = 'asdasd'
// console.log(str.match(/[^as]/g)); // ["d", "d"]


// 原子表的字符不会进行解析

// let str = '(dasihfsifhaiosfj)'
// console.log(str.match(/[()]/g));   //["(", ")"]

// 再次认识原子组


// let str = `
//   <h1>hello</h1>
//   <h2>asdas</h2>
//   <h3>dasdad</h3>
// `
// let reg = /<(h[1-6])>([\s\S]*)<\/\1>/i  //  \1 代表匹配的字符要个第一个括号括起来的原子组相同
// console.log(str.match(reg));

// 注意括号就是按照从左到右的顺序 1 2  这么区分的
// ["<h1>hello</h1>", "<h2>asdas</h2>", "<h3>dasdad</h3>"]


// 邮箱验证
// let str = '483023989@qq.com.cn'
// let reg = /^[\w]+@[\w]+(\.[\w]+)+/
// //["483023989@qq.com.cn", ".cn", index: 0, input: "483023989@qq.com.cn", groups: undefined]
// console.log(str.match(reg));

// (\.[\w]+)+  表示括号之内的内容有1个或多个


// 原子组的替换操作

// let str = `
//   <h1>hello</h1>
//   <h2>asdas</h2>
//   <h3>dasdad</h3>
// `
// let reg = /<(h[1-6])>([\s\S]+)<\/\1>/gi

// // console.log(str.replace(reg, '<p>$2</p>'));

// /**
//  *   
//   <p>hello</p>
//   <p>asdas</p>
//   <p>dasdad</p>
//  */
// let res = str.replace(reg, ($0, $1, $2) => {
//   return `<p>${$2}</p>`
// })
/**
 * 上面回调函数中的 $0 代表的是整个匹配到的内容，之后的$1 $2 就是从左
 * 到右的原子组匹配到的内容
 */
// console.log(res);

// 不记录分组
// https? 代表前面的字符s可以有也可以没有 代表不记录到我们的
// (?:\w+\.)  原子组中的 ?: 代表不记录到我们的组编号之中

// let str = `
//   https://www.nihao.com
//   http://nihao.com
// `
// let reg = /https?:\/\/((?:\w+\.)?\w+\.(?:com|cn|net))/gi

// let urls = []
// // console.log(reg.exec(str));
// while ((res = reg.exec(str))) {
//   urls.push(res[1])
// }
// console.log(urls);


// 多种重复匹配基本使用
// let str = 'asddddddddd'
// let str2 = 'as'
// console.log(str.match(/sd+/));  //1个或多个
// console.log(str2.match(/sd*/)); //0个或多个
// console.log(str.match(/sd{2,3}/)); // 2或3个
// console.log(str.match(/sd?/)); // 0个或1个

// 重复匹配对原子组的影响
// let str = 'asdddddsd'
// console.log(str.match(/(sd)+/g));  //["sd", "sd"]

// let tel = ''


// 限定用户名为3-8位并且是以字母开头
// let username = 'a_Coding'
// let username1 = '2fdsdfd'
// let username2 = 's'
// let username3 = 'asdsadsadsad';

// console.log(/^[a-z]\w{2,7}$/i.test(username));
// console.log(/^[a-z]\w{2,7}$/i.test(username1));
// console.log(/^[a-z]\w{2,7}$/i.test(username2));
// console.log(/^[a-z]\w{2,7}$/i.test(username3));


// 禁止贪婪
// let str = 'asdddddd'
// /**
//  * 使用正则/sd+/ 匹配上面字符串时+会默认贪婪多个d
//  * +后面加个？就只会匹配一个d了  这就是禁止贪婪
//  */
// console.log(str.match(/sd+/)); //sdddddd
// console.log(str.match(/sd+?/)); //sd
// console.log(str.match(/sd*/)); //sdddddd
// console.log(str.match(/sd*?/)); //sd
// console.log(str.match(/sd{1,4}/));//sdddd
// console.log(str.match(/sd{1,4}?/));//sd


// let str = 'asdsadasd'
// const reg = /(as)/gi

// str = str.replace(reg, (p, p1) => {
//   return 'love'
// })

// console.log(str);


// 断言匹配  ?=  后边是什么的
// let str = '我爱你，你爱他'
// let reg = /爱(?=你)/  //匹配后面有一个,号的love
// console.log(str.replace(reg, '不爱'));  //我不爱你，你爱他

// 使用断言规范价格
// let lessons = `
//   js,343元,400次
//   node.js,300.00元,134次
//   java,500元,432次
// `
// let reg = /(\d+)(.00)?(?=元)/gi
// lessons = lessons.replace(reg, (v, ...args) => {
//   console.log(args);
//   args[1] = args[1] || '.00'
//   return args.slice(0, 2).join('')
// })

// console.log(lessons);




//  ?<=  前面是什么的
// let str = '我爱你，你爱他'
// let reg1 = /(?<=你)爱/
// console.log(str.replace(reg1, '不爱'));// 我爱你，你不爱他

// 使用断言模糊电话号码

// let users = `
//   乔丹电话:54088888888,
//   艾弗森电话;08888888845
// `
// // 给电话号码的后4位变成*

// let reg = /(?<=\d{7})\d+/g
// // console.log(users.match(reg));
// users = users.replace(reg, '*'.repeat(4))
// console.log(users);


// //  ?!   后面不是什么的就匹配
// let str = 'hfewhieuwhf43758435efhiuewfhiew'
// let reg = /[a-z]+(?!\d+)$/i  //取后面不是数字的字母 注意这里的这个$非常重要

// console.log(str.match(reg)); //efhiuewfhiew


// ?<! 前面不是什么的就匹配
// let str = 'asdae334dsfdsff'
// let reg = /(?<!\d+)[a-z]+/i

// console.log(str.match(reg));  //asdae


// 使用exec进行全局匹配 
// let str = '爱来爱去不知道爱的意义'

// let reg = /爱/ig

// let res = []

// while ((item = reg.exec(str))) {
//   res.push(item)
// }
// console.log(res);


// 字符串正则方法
// let str = 'i love you'

// console.log(str.search('u')); // 返回索引值，找不到就是-1
// console.log(str.search(/o/));

// // 返回匹配后的字符结果  数组
// console.log(str.match(/o/));  //["o", index: 3, input: "i love you", groups: undefined]

// // matchAll split
// let date = '2001-1/1'

// console.log(date.split(/[-\/]/)); //["2001", "1", "1"]

// // $符号在正则替换中的使用
// let date = '2013/5/6'


// let str = '(010)88888888  (020)88888888'
// let reg = /\((\d{3,4})\)(\d{7,8})/g
// console.log(str.replace(reg, "$1-$2"));
// // 010-88888888  020-88888888

// $&  代表匹配到的内容  
// $`  代表匹配到的前面内容
// $'  代表匹配到的后面内容
let str = '我爱你'
console.log(str.replace(/爱/, '不$&')); //我不爱你
console.log(str.replace(/爱/, "$`")); //我我你
console.log(str.replace(/爱/, "$'")); //我你你