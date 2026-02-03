/**
 微前端的优势
采用微前端架构的好处就是，将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性。
实现微前端的几种方式

从single-spa到qiankun
基于WebComponent的micro-app
webpack5实现的Module Federation

Single-spa
single-spa是一个很好的微前端基础框架，而qiankun框架就是基于single-spa来实现的，在single-spa的基础上做了一层封装，也解决了single-spa的一些缺陷。
首先我们先来了解该如何使用single-spa来完成微前端的搭建。

single-spa实现原理
首先在基座应用中注册所有App的路由，single-spa保存各子应用的路由映射关系，充当微前端控制器Controler，。URL响应时，匹配子应用路由并加载渲染子应用。上图便是对single-spa完整的描述。
有了理论基础，接下来，我们来看看代码层面时如何使用的。
以下以Vue工程为例基座构建single-spa,在Vue工程入口文件main.js完成基座的配置。


//main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from 'single-spa'

Vue.config.productionTip = false

const mountApp = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url

    script.onload = resolve
    script.onerror = reject

    // 通过插入script标签的方式挂载子应用
    const firstScript = document.getElementsByTagName('script')[0]
    // 挂载子应用
    firstScript.parentNode.insertBefore(script, firstScript)
  })
}

const loadApp = (appRouter, appName) => {

  // 远程加载子应用
  return async () => {
    //手动挂载子应用
    await mountApp(appRouter + '/js/chunk-vendors.js')
    await mountApp(appRouter + '/js/app.js')
    // 获取子应用生命周期函数
    return window[appName]
  }
}

// 子应用列表
const appList = [
  {
    // 子应用名称
    name: 'app1',
    // 挂载子应用
    app: loadApp('http://localhost:8083', 'app1'),
    // 匹配该子路由的条件
    activeWhen: location => location.pathname.startsWith('/app1'),
    // 传递给子应用的对象
    customProps: {}
  },
  {
    name: 'app2',
    app: loadApp('http://localhost:8082', 'app2'),
    activeWhen: location => location.pathname.startsWith('/app2'),
    customProps: {}
  }
]

// 注册子应用
appList.map(item => {
  registerApplication(item)
})
 
// 注册路由并启动基座
new Vue({
  router,
  mounted() {
    start()
  },
  render: h => h(App)
}).$mount('#app')

构建基座的核心是：配置子应用信息，通过registerApplication注册子应用，在基座工程挂载阶段start启动基座。

无界方案
在乾坤的issue中一个议题非常有意思，有个开发者提出能否利用iframe来实现js沙箱能力，这个idea启发了无界方案，下面详细介绍

应用加载机制和 js 沙箱机制
将子应用的js注入主应用同域的iframe中运行，iframe是一个原生的window沙箱，内部有完整的history和location接口，子应用实例instance运行在iframe中，路由也彻底和主应用解耦，可以直接在业务组件里面启动应用。

采用这种方式我们可以获得

收益

组件方式来使用微前端

不用注册，不用改造路由，直接使用无界组件，化繁为简

一个页面可以同时激活多个子应用

子应用采用 iframe 的路由，不用关心路由占用的问题

天然 js 沙箱，不会污染主应用环境

不用修改主应用window任何属性，只在iframe内部进行修改

应用切换没有清理成本

由于不污染主应用，子应用销毁也无需做任何
 */
