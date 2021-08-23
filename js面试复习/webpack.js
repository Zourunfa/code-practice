/**
 * webpack是一个打包工具
 * 只会在开发环境下应用，上线时不会用
 * 
 * 
 * 前端写代码时为了方便会将代码写在许多文件中，但是转化成HTML代码时，
 * 会使用<script>标签进行引入js代码，这样会使页面进行的http衍生请求次数的次数增多，
 * 页面加载耗能增加。使用打包过后将许多零碎的文件打包成一个整体，页面只需请求一次，
 * js文件中使用模块化互相引用（export、import ），这样能在一定程度上提供页面渲染效率。
    打包同时会进行编译，将ES6、Sass等高级语法进行转换编译，以兼容高版本的浏览器。

 * 
  对于一份同逻辑的代码，当我们手写下一个一个的文件，它们无论是 ESM 还是 commonJS 或是 AMD，他们都是 module ；
当我们写的 module 源文件传到 webpack 进行打包时，webpack 会根据文件引用关系生成 chunk 文件，webpack 会对这个 chunk 文件进行一些操作；
webpack 处理好 chunk 文件后，最后会输出 bundle 文件，这个 bundle 文件包含了经过加载和编译的最终源文件，所以它可以直接在浏览器中运行。

 * 
 * module，chunk 和 bundle 其实就是同一份逻辑代码在不同转换场景下的取了三个名字：

我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。
 * 



loader 和 plugin 的区别是什么？

Loader直译为"加载器"。Webpack将一切文件视为模块，但是webpack原生是只能解析js文件，
如果想将其他文件也打包的话，就会用到loader。
所以Loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力。
Plugin直译为"插件"。Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。
在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
*/


/**
 *  在module的rules 下 （数组中多个loader的执行顺序是从后往前）
 * 
 *    处理ES6    Babel-laoder (.babelrc里面配置可以兼容那些版本的ES语法)
 * 
 *    处理css    style-loader（将css文件嵌入html）  css-loader(解析css)  postcss-loader(css浏览器兼容性)
 * 
 *    处理less   ['style-loader','css-loader','less-loader']
 * 
 *    处理图片     
 * 
 * 
 */