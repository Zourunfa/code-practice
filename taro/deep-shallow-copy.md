# 深浅拷贝原理复习

## 一、浅拷贝

浅拷贝只复制对象的引用，复制后的对象与原对象共享内存。

### 1.1 赋值操作

```javascript
const obj = { name: '张三', age: 18 };
const newObj = obj;

newObj.name = '李四';
console.log(obj.name); // '李四' - 原对象也被修改
```

### 1.2 浅拷贝方法

#### Object.assign()

```javascript
const obj = { name: '张三', info: { age: 18 } };
const newObj = Object.assign({}, obj);

newObj.name = '李四';
newObj.info.age = 20;

console.log(obj.name); // '张三' - 基本类型不受影响
console.log(obj.info.age); // 20 - 引用类型仍然被修改
```

#### 展开运算符

```javascript
const obj = { name: '张三', info: { age: 18 } };
const newObj = { ...obj };

newObj.info.age = 20;
console.log(obj.info.age); // 20
```

#### Array.slice()

```javascript
const arr = [1, { name: '张三' }];
const newArr = arr.slice();

newArr[1].name = '李四';
console.log(arr[1].name); // '李四'
```

## 二、深拷贝

深拷贝会递归复制所有嵌套对象，原对象与拷贝对象完全独立。

### 2.1 JSON 方法

```javascript
const obj = { name: '张三', info: { age: 18 } };
const newObj = JSON.parse(JSON.stringify(obj));

newObj.info.age = 20;
console.log(obj.info.age); // 18 - 不受影响
```

#### JSON 方法的限制

- 无法拷贝函数、undefined、Symbol
- 循环引用会报错
- 忽略原型链
- 丢失对象的 constructor

```javascript
const obj = {
  name: '张三',
  fn: function() {},
  date: new Date(),
  reg: /abc/
};
const newObj = JSON.parse(JSON.stringify(obj));

console.log(newObj.fn); // undefined
console.log(newObj.date); // 字符串，不是 Date 对象
console.log(newObj.reg); // {}
```

### 2.2 完整的深拷贝实现

```javascript
function deepClone(obj, hash = new WeakMap()) {
  // 处理基本类型和 null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 处理 Date 对象
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // 处理 RegExp 对象
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // 6. 处理循环引用（使用 WeakMap 存储已拷贝的对象）
  if (hash.has(obj)) return hash.get(obj);

  // 处理数组
  if (Array.isArray(obj)) {
    const newArr = [];
    hash.set(obj, newArr);
    obj.forEach((item, index) => {
      newArr[index] = deepClone(item, hash);
    });
    return newArr;
  }

  // 处理普通对象
  const newObj = {};
  hash.set(obj, newObj);
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key], hash);
    }
  }

  return newObj;
}
```

## 三、为什么使用 WeakMap 处理循环引用

### 3.1 循环引用的问题

```javascript
const obj = { name: '张三' };
obj.self = obj; // 对象引用自身

// 不使用 WeakMap 会陷入无限递归
function badDeepClone(obj) {
  if (typeof obj !== 'object') return obj;
  
  const newObj = {};
  for (let key in obj) {
    newObj[key] = badDeepClone(obj[key]);
  }
  return newObj;
}

// badDeepClone(obj); // 栈溢出：Maximum call stack size exceeded
```

### 3.2 使用 WeakMap 的解决方案

```javascript
function deepClone(obj, hash = new WeakMap()) {
  if (typeof obj !== 'object') return obj;
  
  // 6. 处理循环引用（使用 WeakMap 存储已拷贝的对象）
  if (hash.has(obj)) return hash.get(obj);
  
  const newObj = {};
  hash.set(obj, newObj); // 先存入 hash，防止后续递归时重复创建
  
  for (let key in obj) {
    newObj[key] = deepClone(obj[key], hash);
  }
  
  return newObj;
}

const obj = { name: '张三' };
obj.self = obj;
const newObj = deepClone(obj);

console.log(newObj === obj); // false
console.log(newObj.self === newObj); // true
```

### 3.3 为什么选择 WeakMap 而不是普通对象或 Map

#### 使用 WeakMap 的优势

```javascript
// 原因一：弱引用，不会阻止垃圾回收
function createClone() {
  const original = { data: 'some data' };
  const hash = new WeakMap();
  const cloned = deepClone(original, hash);
  
  // original 可以被垃圾回收，hash 不会阻止
  return cloned;
}

// 如果使用 Map
function createCloneWithMap() {
  const original = { data: 'some data' };
  const hash = new Map();
  const cloned = deepClone(original, hash);
  
  // original 无法被垃圾回收，因为 Map 保持强引用
  // 可能导致内存泄漏
  return cloned;
}
```

#### WeakMap vs Map 对比

| 特性 | WeakMap | Map |
|------|---------|-----|
| 键必须是对象 | 是 | 否 |
| 弱引用 | 是 | 否 |
| 可遍历 | 否 | 是 |
| 大小属性 | 无 | 有 |
| 阻止垃圾回收 | 否 | 是 |

### 3.4 循环引用处理的详细流程

```javascript
const obj = { name: '张三' };
obj.self = obj;
obj.info = { detail: obj };

const hash = new WeakMap();

// 第一次调用：deepClone(obj, hash)
// obj 不在 hash 中，创建 newObj = {}
// hash.set(obj, {})
// 遍历属性：name, self, info

// 处理 name
// deepClone('张三') -> 返回 '张三'
// newObj.name = '张三'

// 处理 self
// deepClone(obj, hash) 
// obj 在 hash 中，返回 hash.get(obj) = {}
// newObj.self = {}

// 处理 info
// deepClone({ detail: obj }, hash)
// 创建 newInfo = {}
// hash.set({ detail: obj }, newInfo)
// 处理 detail
// deepClone(obj, hash)
// obj 在 hash 中，返回 hash.get(obj) = {}
// newInfo.detail = {}
// newObj.info = newInfo
```

## 四、各种拷贝方式对比

### 4.1 性能对比

| 方法 | 深拷贝 | 性能 | 循环引用 | 函数支持 |
|------|--------|------|----------|----------|
| = 赋值 | 否 | 最快 | N/A | ✅ |
| Object.assign | 否 | 快 | ❌ | ❌ |
| ...展开 | 否 | 快 | ❌ | ❌ |
| JSON 方法 | 是 | 中 | ❌ | ❌ |
| 递归拷贝 | 是 | 慢 | ✅ | ✅ |
| lodash.cloneDeep | 是 | 快 | ✅ | ✅ |

### 4.2 选择建议

```javascript
// 简单对象，无嵌套
const simpleCopy = { ...obj };

// 需要深拷贝，但无函数和特殊对象
const jsonCopy = JSON.parse(JSON.stringify(obj));

// 完整深拷贝
const deepCopy = deepClone(obj);

// 生产环境推荐使用 lodash
import { cloneDeep } from 'lodash';
const lodashCopy = cloneDeep(obj);
```

## 五、实战案例

### 5.1 Vue 中深浅拷贝的应用

```javascript
// Vuex mutation 中
state.list = [...state.list, newItem]; // 浅拷贝触发响应

// 复杂对象修改
state.userInfo = { ...state.userInfo, name: newName };

// 深层修改需要深拷贝
state.nestedData = deepClone(state.nestedData);
```

### 5.2 React 中深浅拷贝的应用

```javascript
// setState 使用浅拷贝
const [user, setUser] = useState({ name: '张三', info: { age: 18 } });

setUser({ ...user, name: '李四' }); // 浅拷贝

// 深层修改
setUser({
  ...user,
  info: { ...user.info, age: 20 }
});

// 使用 immer 简化深拷贝
import { produce } from 'immer';
const nextState = produce(user, draft => {
  draft.info.age = 20;
});
```

## 六、总结

### 6.1 关键要点

1. **浅拷贝**：只复制第一层，嵌套对象仍共享引用
2. **深拷贝**：完全复制所有层级，创建独立副本
3. **WeakMap**：处理循环引用的最佳选择
   - 弱引用不阻止垃圾回收
   - 避免内存泄漏
   - 防止无限递归

### 6.2 WeakMap 处理循环引用的核心逻辑

```javascript
// 6. 处理循环引用（使用 WeakMap 存储已拷贝的对象）
if (hash.has(obj)) return hash.get(obj);
```

**为什么这样做？**

- 检测到已拷贝对象时，直接返回拷贝后的引用
- 避免重复拷贝导致的数据不一致
- 防止循环引用导致的栈溢出
- WeakMap 的弱引用特性避免内存泄漏
