/**
 * 变量对象
 * 变量对象是与执行上下文相关的数据作用域，存储上了在下文中定义的变量和函数声明
 *
 * 因为不同的执行上下文下的变量对象稍有不同，所以我们来聊聊全局上下文的变量对象
 * 和函数上下文下的变量对象
 *
 *
 *
 *
 *
 * 函数的上下文
 * 在函数的上下文中 ，我们用活动对象AO来表示变量对象
 *
 * 活动对象和变量对象其实是一个东西，只是变量对象是规范上的
 * 或者说是引擎上实现的，不可在javascript环境中访问，只有到当进入一个执行上
 * 下文中，这个执行上下文的变量对象才会被激活，所以才叫activation object呐
 * 只有被激活的变量对象，也就是活动对象上的各种属性才能被访问
 *
 *
 * 活动对象是在进入函数上下文时刻被创建的，它通过函数的arguments属性初始化。
 * arguments属性值是Arguments对象
 *
 *
 * 执行上下文的代码分成两个阶段处理：分析和执行
 * 1，进入执行上下文
 * 2，代码执行
 *
 *时
 * 进入执行上下文时，这候还没有执行代码
 * 变量对象会包括
 * 1，函数的所有形参（如果是函数的上下文）
 *      由名称和对应值组成的一对个变量象的属性被创建
 *      没有实参，属性值设为undefined
 * 2, 函数声明
 *      由名称和对应值组成的一个变量对象的属性被创建
 *      如果变量对象已经存在相同名称的属性，则会完全替换改属性
 * 3，变量声明
 *      由名称和对应值(undefined)组成的一个变量对象的属性被创建
 *      如果变量名声明的形式参数称跟已经或函数相同，则变量声明不会干扰已经
 *    存在的这类属性
 *
 *
 *
 *
 *
 * 总结
 *  1，全局上下文的变量对象初始化是全局对象
 *  2，函数上下文的变量对象初始化只包括Arguments对象
 *  3，在进入执行上下变量对象添加形文时会给参，函数声明，变量声明等初始值属性
 *  4，代码的执阶段，会再次修改变量对象的值
 * 行
 *
 *
 * 注意：在进入执行上下文时，首先会处理函数声会明，其次处变量声明，如果变量名称跟
 * 已经声明的形式参数或函数相同，则变量声明不会干扰存在的这类属性理
 *
 *
 *
 */