// String.prototype.charAt(index)
// 传入一个介于0和字符串长度减一的整数

const anyStr = "Brave new world"

console.log(`第一个英文字母${anyStr.charAt(0)}`);


// String.prototype.concat()
// concat()方法将一个或多个字符串与原来的字符串连接合并
// 形成一个新的字符串并返回

let hello = 'Hello,'
console.log(hello.concat('satre', ' How are you'));


// String.prototype.endWith()方法用来判断当前字符串石佛那个是以另外一个
// 给定字符串结尾的，根据判断结果返回true或false
// 对应的有startWith()方法
const str = 'Cats are the best!'
console.log(str.endsWith('best', 17));




// String.prototype.includes(searchString,position)

// includes方法用于判断一个字符串石佛那个包含在另一个字符串中
//  根据情况返回true 或 false(区分大小写)
'Blue Whale'.includes('blue'); // returns false



// String.prototype.match()
// match()方法用于检索返回一个字符串匹配正则表达式的结果

const paragragh = 'The quick brown fox jumps over the lazy dog'
const reg = /[A-Z]/g
const res = paragragh.match(reg)
console.log(res);


// String.prototype.padEnd()
/** padEnd()方法会用一个字符串填充当前字符串
 *  如果需要的话会重复填充，返回填充后达到指定长度
 * 的字符串
 *
*/

'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"

/**
 * String.prototype.padStart()
 */
const str1 = '5';

console.log(str1.padStart(2, '0'));
// expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "************5581"


/*
  Stirng.prototype.repeat()
  repeat()构造并返回一个新字符串，该字符串包含
  被链接在一起的指定数量的字符串副本
*/

// "abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
// "abc".repeat(1 / 0)    // RangeError: repeat count must be positive and less than inifinity


/**
 *
String.prototype.search()
search() 方法执行正则表达式和 String 对象之间的一个搜索匹配。
和match()方法区别就是
    match方法返回的是一个匹配后的字符串
    search()返回是匹配后的索引值
 */
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."



/** String.prototype.slice()*/
/**
 * 和数组的slice方法一样
 * 
 */
const strA = 'The quick brown fox jumps over the lazy dog.';

console.log(strA.slice(31));
// expected output: "the lazy dog."

console.log(strA.slice(4, 19));
// expected output: "quick brown fox"

console.log(strA.slice(-4));
// expected output: "dog."

console.log(strA.slice(-9, -5));
// expected output: "lazy"



/**
 *  String.prototype.split()
 *  split()方法使用指定的字符串将一个String对象分割成字符串数组
 *  以一个指定的分割符来决定每个拆分的位置
 *   
 * 
 * 
 */

const strb = 'The quick brown fox jumps'
const wordsArr = strb.split(' ')
console.log(wordsArr); //["The", "quick", "brown", "fox", "jumps"]



// ——————————————————————————————————————————————————————————
// Js slice()方法与substr和substring的区别
// ——————————————————————————————————————————————————————————————
/**
 * 1、slice和substring接收的是起始位置和结束位置(不包括结束位置)，
 * 而substr接收的则是起始位置和所要返回的字符串长度。直接看下面例子：
 * 2、substring是以两个参数中较小一个作为起始位置，较大的参数作为结束位置。如：
 * 3、当接收的参数是负数时，slice会将它字符串的长度与对应的负数相加，结果作为参数；substr则仅仅是将第一个参数与字符串长度相加后的结果作为第一个参数；
 * substring则干脆将负参数都直接转换为0。测试代码如下：
 */


//  String.prototype.trim()
/**
 * trim() 方法会从一个字符串的两端删除空白字符。
 * 在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等)
 * 以及所有行终止符字符（如 LF，CR等）。
 * 
 */
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";


//  String.prototype.valueOf()
// valueOf() 方法返回  String  对象的原始值

const stringObj = new String('foo');

console.log(stringObj);
// expected output: String { "foo" }

console.log(stringObj.valueOf());
// expected output: "foo"
