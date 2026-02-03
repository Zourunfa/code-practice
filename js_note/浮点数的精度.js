/*
 * @Author: wangfeng wangfeng15@yfpharmacy.com
 * @Date: 2025-09-23 17:58:35
 * @LastEditors: wangfeng wangfeng15@yfpharmacy.com
 * @LastEditTime: 2025-10-13 17:03:03
 * @FilePath: /code-practice/js_note/浮点数的精度.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * ES中的Number使用的是IEEE754标准来表示整数和浮点数的值
 * 而且用64位来存储一个浮点数
 * 
 * 然后你会返现 0.1 转化二进制是一个无线循环的小数
 * 
 * 所以当 0.1 存下来的时候，就已经发生了精度丢失，
 * 当我们用浮点数进行运算的时候，使用的其实是精度丢失后的数。
 * 
 * 
 * ：对阶、尾数运算、规格化、舍入处理、溢出判断。我们来简单看一下 0.1 和 0.2 的计算。
 */

const a = 0.1 + 0.2  //0.3000 0000 0000 0000 4
console.log(a === 0.3);


/**
 * 方法一：
const a = 0.1 + 0.2;
const b = 0.3;
console.log(Number(a.toFixed(10)) === b); // true

但是要注意，toFixed的精度需要根据实际情况选择，这里选择10位，但有时候可能不需要这么多位，比如我们只关心小数点后一位，那么可以toFixed(1)。

方法二：
function areEqual(num1, num2, epsilon = Number.EPSILON) {
return Math.abs(num1 - num2) < epsilon;
}

const a = 0.1 + 0.2;
console.log(areEqual(a, 0.3)); // true

但是注意，Number.EPSILON是一个非常小的数，大约是2.220446049250313e-16，它适用于通常的浮点数计算误差。但是有时候我们可能需要根据实际情况调整误差范围，比如我们只关心小数点后几位，那么可以自定义epsilon值，例如1e-10。
 * 
 * 
 * 
 */