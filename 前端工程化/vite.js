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
