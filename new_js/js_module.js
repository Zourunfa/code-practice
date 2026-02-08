/**
 * 模块化解决的问题
 * 1.命名冲突：避免全局污染
 * 2.依赖管理：明确模块之间的依赖关系
 * 3.代码复用：提高代码的可维护性和复用性
 * 4.按需加载：提升应用性能
 */

// 1. 原始阶段（无模块化）
// 全局变量污染
var count = 1;
function add() {
    count++;
}

// 2. 命名空间模式
var ModuleA = {
    count: 1,
    add: function() {
        this.count++;
    }
};

// 3. IIFE模式（立即执行函数）
var ModuleB = (function() {
    var count = 0;
    return {
        add: function() {
            count++;
        },
        get: function() {
            return count;
        }
    };
})();

// 4. CommonJS（Node.js默认）
// moduleA.js
module.exports = {
    add: function(a, b) { return a + b; }
};

// moduleB.js
const moduleA = require('./moduleA');
moduleA.add(1, 2);

// 5. AMD（异步模块定义，RequireJS）
// 定义模块
define(['dependency'], function(dependency) {
    return {
        method: function() {
            dependency.doSomething();
        }
    };
});

// 使用模块
require(['module'], function(module) {
    module.method();
});



// 方案	加载方式	           环境	                        特点
// CommonJS	同步（阻塞式：加载模块时，代码执行会暂停） 	Node.js	运行时加载，module.exports/require
// AMD 异步-(非阻塞：发起加载请求后，代码继续执行,回调通知,加载完成后通过回调函数或Promise通知  浏览器   提前执行，define/require
// ES6 Modules	           同步/异步	           全平台	              编译时加载，export/import

// 五、模块化的优势
// 可维护性：代码结构清晰，便于维护
// 可测试性：模块独立，易于单元测试
// 可复用性：模块可在不同项目中使用、
// 团队协作：不同开发者负责不同模块