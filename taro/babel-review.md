# Babel 原理复习

## 一、Babel 是什么

Babel 是一个 JavaScript 编译器，主要用于将 ES6+ 代码转换为向后兼容的 JavaScript 代码。

## 二、Babel 的工作流程

```
源代码 -> 解析(Parsing) -> 转换(Transform) -> 生成(Generating) -> 输出代码
```

### 2.1 解析(Parsing)

将源代码转换为抽象语法树(AST)，分为两个阶段：

- **词法分析(Lexing)**: 将代码字符串分解成 tokens
- **语法分析(Parsing)**: 将 tokens 转换为 AST

### 2.2 转换(Transform)

对 AST 进行遍历、修改，包括：

- 添加/删除/修改节点
- 添加新属性
- 转换语法特性

### 2.3 生成(Generating)

将转换后的 AST 重新生成为代码字符串

## 三、抽象语法树(AST)

### 3.1 AST 的结构

```javascript
// 源代码
const a = 1 + 2;

// AST 简化结构
{
  type: "Program",
  body: [
    {
      type: "VariableDeclaration",
      declarations: [
        {
          type: "VariableDeclarator",
          id: {
            type: "Identifier",
            name: "a"
          },
          init: {
            type: "BinaryExpression",
            operator: "+",
            left: { type: "Literal", value: 1 },
            right: { type: "Literal", value: 2 }
          }
        }
      ]
    }
  ]
}
```

### 3.2 AST 常用节点类型

- `Identifier`: 标识符（变量名、函数名等）
- `Literal`: 字面量（字符串、数字等）
- `BinaryExpression`: 二元表达式
- `FunctionDeclaration`: 函数声明
- `CallExpression`: 函数调用
- `MemberExpression`: 成员表达式（obj.prop）

## 四、Babel 插件系统

### 4.1 插件的基本结构

```javascript
module.exports = function(babel) {
  const { types: t } = babel;

  return {
    name: "my-plugin",
    visitor: {
      Identifier(path) {
        // 访问 Identifier 节点
      }
    }
  };
};
```

### 4.2 Path 对象

Path 是对 AST 节点的封装，提供了丰富的操作方法：

```javascript
visitor: {
  Identifier(path) {
    // 获取节点
    const node = path.node;

    // 获取父节点
    const parent = path.parent;

    // 替换节点
    path.replaceWith(t.identifier('newName'));

    // 删除节点
    path.remove();
  }
}
```

### 4.3 常用插件示例

```javascript
// 将 var 转换为 let
module.exports = function({ types: t }) {
  return {
    visitor: {
      VariableDeclaration(path) {
        if (path.node.kind === 'var') {
          path.node.kind = 'let';
        }
      }
    }
  };
};
```

## 五、Babel 配置

### 5.1 babel.config.js

```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['> 1%', 'last 2 versions']
      }
    }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties'
  ]
};
```

### 5.2 .babelrc

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": []
}
```

## 六、常用 Preset

### 6.1 @babel/preset-env

根据目标环境自动转换 ES6+ 代码

```javascript
{
  targets: {
    chrome: "58",
    node: "12"
  },
  useBuiltIns: "usage",
  corejs: 3
}
```

### 6.2 @babel/preset-react

转换 React JSX

### 6.3 @babel/preset-typescript

转换 TypeScript

## 七、Polyfill 的使用

### 7.1 @babel/polyfill

已废弃，推荐使用 `core-js`

### 7.2 core-js

```javascript
import 'core-js/stable';
import 'regenerator-runtime/runtime';
```

### 7.3 useBuiltIns 配置

- `false`: 不自动引入 polyfill
- `'entry'`: 根据配置的浏览器兼容性，引入所有需要的 polyfill
- `'usage'`: 根据代码使用情况按需引入 polyfill

## 八、常见转换示例

### 8.1 箭头函数转换

```javascript
// 转换前
const add = (a, b) => a + b;

// 转换后
var add = function add(a, b) {
  return a + b;
};
```

### 8.2 解构赋值转换

```javascript
// 转换前
const { name, age } = person;

// 转换后
var name = person.name;
var age = person.age;
```

### 8.3 类转换

```javascript
// 转换前
class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
}

// 转换后
function Person(name) {
  this.name = name;
}
Person.prototype.say = function() {
  console.log(this.name);
};
```

## 九、Babel 宏

Babel 宏允许在编译时执行代码

```javascript
import styled from 'styled-components/macro';

const Button = styled.button`
  background: blue;
`;
```

## 十、调试技巧

### 10.1 AST Explorer

使用 [AST Explorer](https://astexplorer.net/) 查看代码的 AST 结构

### 10.2 Babel 在线工具

使用 [Babel 在线工具](https://babeljs.io/repl) 实时查看转换结果

### 10.3 插件调试

```javascript
module.exports = function(babel) {
  return {
    visitor: {
      Identifier(path) {
        console.log(path.node.name);
      }
    }
  };
};
```

## 十一、性能优化

### 11.1 缓存配置

```javascript
{
  cacheDirectory: true,
  cacheCompression: false
}
```

### 11.2 按需引入

只引入需要的 plugins 和 presets

### 11.3 并行处理

使用 `thread-loader` 或 `babel-loader` 的 `parallel` 选项
