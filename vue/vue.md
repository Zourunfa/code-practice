简单
1 MVC 和 MVVM 区别
MVC
MVC 全名是 Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，一种软件设计典范

Model（模型）：是应用程序中用于处理应用程序数据逻辑的部分。通常模型对象负责在数据库中存取数据
View（视图）：是应用程序中处理数据显示的部分。通常视图是依据模型数据创建的
Controller（控制器）：是应用程序中处理用户交互的部分。通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据


MVC 的思想：一句话描述就是 Controller 负责将 Model 的数据用 View 显示出来，换句话说就是在 Controller 里面把 Model 的数据赋值给 View。
MVVM
MVVM 新增了 VM 类

ViewModel 层：做了两件事达到了数据的双向绑定 一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。


MVVM 与 MVC 最大的区别就是：它实现了 View 和 Model 的自动同步，也就是当 Model 的属性改变时，我们不用再自己手动操作 Dom 元素，来改变 View 的显示，而是改变属性后该属性对应 View 层显示会自动改变（对应Vue数据驱动的思想）
整体看来，MVVM 比 MVC 精简很多，不仅简化了业务与界面的依赖，还解决了数据频繁更新的问题，不用再用选择器操作 DOM 元素。因为在 MVVM 中，View 不知道 Model 的存在，Model 和 ViewModel 也观察不到 View，这种低耦合模式提高代码的可重用性

注意：Vue 并没有完全遵循 MVVM 的思想 这一点官网自己也有说明


那么问题来了 为什么官方要说 Vue 没有完全遵循 MVVM 思想呢？


严格的 MVVM 要求 View 不能和 Model 直接通信，而 Vue 提供了$refs 这个属性，让 Model 可以直接操作 View，违反了这一规定，所以说 Vue 没有完全遵循 MVVM。


2 为什么 data 是一个函数
组件中的 data 写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的 data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份 data，就会造成一个变了全都会变的结果

3 Vue 组件通讯有哪几种方式


props 和$emit 父组件向子组件传递数据是通过 prop 传递的，子组件传递数据给父组件是通过$emit 触发事件来做到的


$parent,$children 获取当前组件的父组件和当前组件的子组件


$attrs 和$listeners A->B->C。Vue 2.4 开始提供了$attrs 和$listeners 来解决这个问题


父组件中通过 provide 来提供变量，然后在子组件中通过 inject 来注入变量。(官方不推荐在实际业务中使用，但是写组件库时很常用)


$refs 获取组件实例


eventBus 兄弟组件数据传递 这种情况下可以使用事件总线的方式


vuex 状态管理
3 Vue 组件通讯有哪几种方式


props 和$emit 父组件向子组件传递数据是通过 prop 传递的，子组件传递数据给父组件是通过$emit 触发事件来做到的


$parent,$children 获取当前组件的父组件和当前组件的子组件


$attrs 和$listeners A->B->C。Vue 2.4 开始提供了$attrs 和$listeners 来解决这个问题


父组件中通过 provide 来提供变量，然后在子组件中通过 inject 来注入变量。(官方不推荐在实际业务中使用，但是写组件库时很常用)


$refs 获取组件实例


eventBus 兄弟组件数据传递 这种情况下可以使用事件总线的方式


vuex 状态管理

4 Vue 的生命周期方法有哪些 一般在哪一步发请求
beforeCreate 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问
created 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。这里没有$el,如果非要想与 Dom 进行交互，可以通过 vm.$nextTick 来访问 Dom
beforeMount 在挂载开始之前被调用：相关的 render 函数首次被调用。
mounted 在挂载完成后发生，在当前阶段，真实的 Dom 挂载完毕，数据完成双向绑定，可以访问到 Dom 节点
beforeUpdate 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁（patch）之前。可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程
updated 发生在更新完成之后，当前阶段组件 Dom 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新，该钩子在服务器端渲染期间不被调用。
beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。我们可以在这时进行善后收尾工作，比如清除计时器。
destroyed Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
activated keep-alive 专属，组件被激活时调用
deactivated keep-alive 专属，组件被销毁时调用

异步请求在哪一步发起？

可以在钩子函数 created、beforeMount、mounted 中进行异步请求，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。
如果异步请求不需要依赖 Dom 推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：

能更快获取到服务端数据，减少页面  loading 时间；
ssr  不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；


Vue3 的生命周期

setup() :开始创建组件之前，在beforeCreate和created之前执行。创建的是data和method
onBeforeMount() : 组件挂载到节点上之前执行的函数。
onMounted() : 组件挂载完成后执行的函数。
onBeforeUpdate(): 组件更新之前执行的函数。
onUpdated(): 组件更新完成之后执行的函数。
onBeforeUnmount(): 组件卸载之前执行的函数。
onUnmounted(): 组件卸载完成后执行的函数
onActivated(): 被包含在中的组件，会多出两个生命周期钩子函数。被激活时执行。
onDeactivated(): 比如从 A 组件，切换到 B 组件，A 组件消失时执行。
onErrorCaptured(): 当捕获一个来自子孙组件的异常时激活钩子函数（以后用到再讲，不好展现）。


5 v-if 和 v-show 的区别
v-if 在编译过程中会被转化成三元表达式,条件不满足时不渲染此节点。
v-show 会被编译成指令，条件不满足时控制样式将对应节点隐藏 （display:none）
使用场景
v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景
v-show 适用于需要非常频繁切换条件的场景




7 怎样理解 Vue 的单向数据流
数据总是从父组件传到子组件，子组件没有权利修改父组件传过来的数据，只能请求父组件对原始数据进行修改。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。

注意：在子组件直接用 v-model 绑定父组件传过来的 prop 这样是不规范的写法 开发环境会报警告

如果实在要改变父组件的 prop 值 可以再 data 里面定义一个变量 并用 prop 的值初始化它 之后用$emit 通知父组件去修改


8 computed 和 watch 的区别和运用的场景
computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容，它可以设置 getter 和 setter。
watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。
计算属性一般用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑

9 v-if 与 v-for 为什么不建议一起使用
v-for 和 v-if 不要在同一个标签中使用,因为解析时先解析 v-for 再解析 v-if。如果遇到需要同时使用时可以考虑写成计算属性的方式。


### 18. $nextTick 原理及作用

Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种应用。

nextTick 的核心是利用了如 Promise 、MutationObserver、setImmediate、setTimeout 的原生 JavaScript 方法来模拟对应的微/宏任务的实现，本质是为了利用 JavaScript 的这些异步回调任务队列来实现 Vue 框架中自己的异步回调队列。

nextTick 不仅是 Vue 内部的异步队列的调用方法，同时也允许开发者在实际项目中使用这个方法来满足实际应用中对 DOM 更新数据时机的后续逻辑处理

nextTick 是典型的将底层 JavaScript 执行原理应用到具体案例中的示例，引入异步更新队列机制的原因 ∶

- 如果是同步更新，则多次对一个或多个属性赋值，会频繁触发 UI/DOM 的渲染，可以减少一些无用渲染
- 同时由于 VirtualDOM 的引入，每一次状态发生变化后，状态变化的信号会发送给组件，组件内部使用 VirtualDOM 进行计算得出需要更新的具体的 DOM 节点，然后对 DOM 进行更新操作，每次更新状态后的渲染过程需要更多的计算，而这种无用功也将浪费更多的性能，所以异步渲染变得更加至关重要

Vue 采用了数据驱动视图的思想，但是在一些情况下，仍然需要操作 DOM。有时候，可能遇到这样的情况，DOM1 的数据发生了变化，而 DOM2 需要从 DOM1 中获取数据，那这时就会发现 DOM2 的视图并没有更新，这时就需要用到了`nextTick`了。

由于 Vue 的 DOM 操作是异步的，所以，在上面的情况中，就要将 DOM2 获取数据的操作写在`$nextTick`中。

```
this.$nextTick(() => {
    // 获取数据的操作...
})
```

所以，在以下情况下，会用到 nextTick：

- 在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的 DOM 结构的时候，这个操作就需要方法在`nextTick()`的回调函数中。
- 在 vue 生命周期中，如果在 created()钩子进行 DOM 操作，也一定要放在`nextTick()`的回调函数中。

因为在 created()钩子函数中，页面的 DOM 还未渲染，这时候也没办法操作 DOM，所以，此时如果想要操作 DOM，必须将操作的代码放在`nextTick()`的回调函数中。


### 23. Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗？

不会立即同步执行重新渲染。Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化， Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。

如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环 tick 中，Vue 刷新队列并执行实际（已去重的）工作。
### 26. 子组件可以直接改变父组件的数据吗？

子组件不可以直接改变父组件的数据。这样做主要是为了维护父子组件的单向数据流。每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。如果这样做了，Vue 会在浏览器的控制台中发出警告。

Vue 提倡单向数据流，即父级 props 的更新会流向子组件，但是反过来则不行。这是为了防止意外的改变父组件状态，使得应用的数据流变得难以理解，导致数据流混乱。如果破坏了单向数据流，当应用复杂时，debug 的成本会非常高。

**只能通过** `**$emit**` **派发一个自定义事件，父组件接收到后，由父组件修改。**
### 2. Vue 子组件和父组件执行顺序

**加载渲染过程：**

1.父组件 beforeCreate

2.父组件 created

3.父组件 beforeMount

4.子组件 beforeCreate

5.子组件 created

6.子组件 beforeMount

7.子组件 mounted

8.父组件 mounted

**更新过程：**

\1. 父组件 beforeUpdate

2.子组件 beforeUpdate

3.子组件 updated

4.父组件 updated

**销毁过程：**

\1. 父组件 beforeDestroy

2.子组件 beforeDestroy

3.子组件 destroyed

4.父组件 destoryed

概述​
Vue 在大多数常见场景下性能都是很优秀的，通常不需要手动优化。然而，总会有一些具有挑战性的场景需要进行针对性的微调。在本节中，我们将讨论用 Vue 开发的应用在性能方面该注意些什么。

首先，让我们区分一下 web 应用性能的两个主要方面：

页面加载性能：首次访问时，应用展示出内容与达到可交互状态的速度。这通常会用 Google 所定义的一系列 Web 指标 (Web Vitals) 来进行衡量，如最大内容绘制 (Largest Contentful Paint，缩写为 LCP) 和首次输入延迟 (First Input Delay，缩写为 FID)。

更新性能：应用响应用户输入更新的速度。比如当用户在搜索框中输入时结果列表的更新速度，或者用户在一个单页面应用 (SPA) 中点击链接跳转页面时的切换速度。

虽然最理想的情况是将两者都最大化，但是不同的前端架构往往会影响到在这些方面是否能达到更理想的性能。此外，你所构建的应用的类型极大地影响了你在性能方面应该优先考虑的问题。因此，优化性能的第一步是为你的应用类型确定合适的架构：

查看使用 Vue 的多种方式这一章看看如何用不同的方式围绕 Vue 组织架构。

Jason Miller 在 Application Holotypes 一文中讨论了 Web 应用的类型以及它们各自的理想实现/交付方式。

分析选项​
为了提高性能，我们首先需要知道如何衡量它。在这方面，有一些很棒的工具可以提供帮助：

用于生产部署的负载性能分析：

PageSpeed Insights
WebPageTest
用于本地开发期间的性能分析：

Chrome 开发者工具“性能”面板
app.config.performance 将会开启 Vue 特有的性能标记，标记在 Chrome 开发者工具的性能时间线上。
Vue 开发者扩展也提供了性能分析的功能。
页面加载优化​
页面加载优化有许多跟框架无关的方面 - 这份 web.dev 指南提供了一个全面的总结。这里，我们将主要关注和 Vue 相关的技巧。

选用正确的架构​
如果你的用例对页面加载性能很敏感，请避免将其部署为纯客户端的 SPA，而是让服务器直接发送包含用户想要查看的内容的 HTML 代码。纯客户端渲染存在首屏加载缓慢的问题，这可以通过服务器端渲染 (SSR) 或静态站点生成 (SSG) 来缓解。查看 SSR 指南以了解如何使用 Vue 实现 SSR。如果应用对交互性要求不高，你还可以使用传统的后端服务器来渲染 HTML，并在客户端使用 Vue 对其进行增强。

如果你的主应用必须是 SPA，但还有其他的营销相关页面 (落地页、关于页、博客等)，请单独部署这些页面！理想情况下，营销页面应该是包含尽可能少 JS 的静态 HTML，并用 SSG 方式部署。

包体积与 Tree-shaking 优化​
一个最有效的提升页面加载速度的方法就是压缩 JavaScript 打包产物的体积。当使用 Vue 时有下面一些办法来减小打包产物体积：

尽可能地采用构建步骤

如果使用的是相对现代的打包工具，许多 Vue 的 API 都是可以被 tree-shake 的。举例来说，如果你根本没有使用到内置的 <Transition> 组件，它将不会被打包进入最终的产物里。Tree-shaking 也可以移除你源代码中其他未使用到的模块。

当使用了构建步骤时，模板会被预编译，因此我们无须在浏览器中载入 Vue 编译器。这在同样最小化加上 gzip 优化下会相对缩小 14kb 并避免运行时的编译开销。

在引入新的依赖项时要小心包体积膨胀！在现实的应用中，包体积膨胀通常因为无意识地引入了过重的依赖导致的。

如果使用了构建步骤，应当尽量选择提供 ES 模块格式的依赖，它们对 tree-shaking 更友好。举例来说，选择 lodash-es 比 lodash 更好。

查看依赖的体积，并评估与其所提供的功能之间的性价比。如果依赖对 tree-shaking 友好，实际增加的体积大小将取决于你从它之中导入的 API。像 bundlejs.com 这样的工具可以用来做快速的检查，但是根据实际的构建设置来评估总是最准确的。

如果你只在渐进式增强的场景下使用 Vue，并想要避免使用构建步骤，请考虑使用 petite-vue (只有 6kb) 来代替。

代码分割​
代码分割是指构建工具将构建后的 JavaScript 包拆分为多个较小的，可以按需或并行加载的文件。通过适当的代码分割，页面加载时需要的功能可以立即下载，而额外的块只在需要时才加载，从而提高性能。

像 Rollup (Vite 就是基于它之上开发的) 或者 webpack 这样的打包工具可以通过分析 ESM 动态导入的语法来自动进行代码分割：

js
// lazy.js 及其依赖会被拆分到一个单独的文件中
// 并只在 `loadLazy()` 调用时才加载
function loadLazy() {
  return import('./lazy.js')
}
懒加载对于页面初次加载时的优化帮助极大，它帮助应用暂时略过了那些不是立即需要的功能。在 Vue 应用中，这可以与 Vue 的异步组件搭配使用，为组件树创建分离的代码块：

js
import { defineAsyncComponent } from 'vue'

// 会为 Foo.vue 及其依赖创建单独的一个块
// 它只会按需加载
//（即该异步组件在页面中被渲染时）
const Foo = defineAsyncComponent(() => import('./Foo.vue'))
对于使用了 Vue Router 的应用，强烈建议使用异步组件作为路由组件。Vue Router 已经显性地支持了独立于 defineAsyncComponent 的懒加载。查看懒加载路由了解更多细节。

更新优化​
Props 稳定性​
在 Vue 之中，一个子组件只会在其至少一个 props 改变时才会更新。思考以下示例：

template
<ListItem
  v-for="item in list"
  :id="item.id"
  :active-id="activeId" />
在 <ListItem> 组件中，它使用了 id 和 activeId 两个 props 来确定它是否是当前活跃的那一项。虽然这是可行的，但问题是每当 activeId 更新时，列表中的每一个 <ListItem> 都会跟着更新！

理想情况下，只有活跃状态发生改变的项才应该更新。我们可以将活跃状态比对的逻辑移入父组件来实现这一点，然后让 <ListItem> 改为接收一个 active prop：

template
<ListItem
  v-for="item in list"
  :id="item.id"
  :active="item.id === activeId" />
现在，对于大多数的组件来说，activeId 改变时，它们的 active prop 都会保持不变，因此它们无需再更新。总结一下，这个技巧的核心思想就是让传给子组件的 props 尽量保持稳定。

v-once​
v-once 是一个内置的指令，可以用来渲染依赖运行时数据但无需再更新的内容。它的整个子树都会在未来的更新中被跳过。查看它的 API 参考手册可以了解更多细节。

v-memo​
v-memo 是一个内置指令，可以用来有条件地跳过某些大型子树或者 v-for 列表的更新。查看它的 API 参考手册可以了解更多细节。


4  Vue3的生命周期
组合式API形式使用
Vue3.0 中可以继续使用 Vue2.x中 的生命周期钩子，但有有两个被更名:
。beforeDestroy改名为beforeUnmount
。destroyed改名为unmounted

vue2                  -> vue3
beforeCreate     -> 使用 setup()     创建
created               -> 使用 setup()
beforeMount       -> onBeforeMount    挂载
mounted             -> onMounted

beforeUpdate     -> onBeforeUpdate  更新
updated              -> onUpdated
beforeDestroy      -> onBeforeUnmount   卸载
destroyed              -> onUnmounted
errorCaptured       -> onErrorCaptured 

