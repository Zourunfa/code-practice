// 1. 如何指定 vite 插件 的执行顺序？
// 可以使用 enforce 修饰符来强制插件的位置:

// pre：在 Vite 核心插件之前调用该插件
// 默认：在 Vite 核心插件之后调用该插件
// post：在 Vite 构建插件之后调用该插件

// 2. vite 插件 常见的 hook 有哪些？
// hook: 即钩子。Vite 会在生命周期的不同阶段中去调用不同的插件以达到不同的目的.

// config： 可用于修改 vite config，用户可以通过这个 hook 修改 config；例如 vite-aliases 这个插件可以帮助我们自动生成别名。它利用的就是这个钩子。

// configResolved： 在解析 Vite 配置后调用，用于获取解析完毕的 config，在这个 hook 中不建议修改 config。

// configureServer： 用于给 dev server 添加自定义 middleware；例如 vite-plugin-mock 插件就是在这个生命周期调用的

// configurePreviewServer：与 configureServer 相同但是作为预览服务器。vite preview插件就是利用这个钩子。

// transformIndexHtml：注入变量，用来转换 HTML 的内容。vite-plugin-html 插件可以帮助我们在html里注入变量，就是利用这个钩子

// handleHotUpdate：执行自定义 HMR 更新处理

/**
 ESM与CJS之间的差异
除了ESM是语言标准规范和导入导出的关键字不同以外，esm与cjs有以下的差异点：

CJS   ESM
加载时机运行时（动态）编译时（静态）
导出值方式值的拷贝值的引用
tree Shaking false   true


 */

/* 4. 为什么说 vite 比 webpack 要快
vite 不需要做全量的打包，这是比 webpack 要快的最主要的原因；
vite 在解析模块依赖关系时，利用了 esbuild，更快（esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍）；
按需加载；模块之间的依赖关系的解析由浏览器实现。Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。
充分利用缓存；Vite 利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。



*/

/**
 

5. vite 对比 webpack ，优缺点在哪
优点：

更快的冷启动：Vite 借助了浏览器对 ESM 规范的支持，采取了与 Webpack 完全不同的 unbundle 机制
更快的热更新：Vite 采用 unbundle 机制，所以 dev server 在监听到文件发生变化以后，只需要通过 ws 连接通知浏览器去重新加载变化的文件，剩下的工作就交给浏览器去做了。

缺点：

开发环境下首屏加载变慢：由于 unbundle 机制，Vite 首屏期间需要额外做其它工作。不过首屏性能差只发生在 dev server 启动以后第一次加载页面时发生。之后再 reload 页面时，首屏性能会好很多。原因是 dev server 会将之前已经完成转换的内容缓存起来
开发环境下懒加载变慢：跟首屏加载变慢的原因一样。Vite 在懒加载方面的性能也比 Webpack 差。由于 unbundle 机制，动态加载的文件，需要做 resolve、load、transform、parse 操作，并且还有大量的 http 请求，导致懒加载性能也受到影响。
webpack支持的更广。由于 Vite 基于ES Module，所以代码中不可以使用CommonJs；webpack更多的关注兼容性, 而Vite 关注浏览器端的开发体验。Vite目前生态还不如 Webpack。


 */

/**
vite和webpack的区别：1、基础概念不同；
2、编译方式不同；3、开发效率不同；4、扩展性不同；5、应用场景不同。总的来说，
vite以其更快的编译速度和更低的内存占用率，给前端开发带来了全新的体验，而webpack凭借其高度的自定义性和成熟的生态，仍是前端构建工具的重要选择。


一、基础概念不同
webpack是一个模块打包器，它可以把许多不同类型的模块和资源文件打包为静态资源。它具有高度的可配置性，可以通过插件和loader扩展其功能。

vite，由Vue.js作者尤雨溪开发并维护，是一个基于浏览器原生 ES imports 的开发服务器。它能够提供丰富的功能，如快速冷启动、即时热更新和真正的按需编译等。

二、编译方式不同
webpack在编译过程中，会将所有模块打包为一个bundle.js文件，然后再运行这个文件。

而vite在开发模式下，没有打包的步骤，它利用了浏览器的ES Module Imports特性，只有在真正需要时才编译文件。在生产模式下，vite使用Rollup进行打包，提供更好的tree-shaking，代码压缩和性能优化。



三、开发效率不同
webpack的热更新是全量更新，即使修改一个小文件，也会重新编译整个应用，这在大型应用中可能会导致编译速度变慢。

vite的热更新是增量更新，只更新修改的文件，所以即使在大型应用中也能保持极快的编译速度


四、扩展性不同
webpack有着成熟的插件生态，几乎可以实现任何你想要的功能，扩展性非常强。

vite虽然也支持插件，但相比webpack的生态，还有一些距离。

、应用场景不同
webpack由于其丰富的功能和扩展性，适合于大型、复杂的项目。

而vite凭借其轻量和速度，更适合于中小型项目和快速原型开发。
 */
