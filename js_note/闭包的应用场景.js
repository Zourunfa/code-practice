/*
 * @Author: wangfeng wangfeng15@yfpharmacy.com
 * @Date: 2025-09-23 17:58:35
 * @LastEditors: wangfeng wangfeng15@yfpharmacy.com
 * @LastEditTime: 2025-09-29 09:41:56
 * @FilePath: /code-practice/js_note/闭包的应用场景.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// setTimeOut

// (function(i){})(i)
// for (var i = 1; i <= 5; i++) {

//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   })(i)
// }

// 回调函数

// for (var i = 0; i < aLi.length; i++) {
//   (function (a) {
//     aLi[a].onclick = function () {
//       console.log(a);
//     }
//   })(i)
// }

// 创建私有变量

// function createPrivate(value) {
//   let _private = value;

//   return {
//     getValue: () => {
//       return _private;
//     },
//     setValue: (value) => {
//       return (_private = value);
//     },
//   };
// }
function createPrivate(value) {
  let _private = value;
  return {
    getValue: () => {
      return _private;
    },
    setValue: () => {
      return (_private = value);
    },
  };
}

function Fn(value) {
  let _private = value;

  return {
    getValue: () => {
      return _private;
    },
    setValue: (value) => {
      return (_private = value);
    },
  };
}

let data = new Fn('af');

console.log(data);

console.log(data.value);
console.log(data.getValue());
data.setValue('bzd');
console.log(data.getValue());


/**
 * 
实际业务中的私有变量应用：购物车系统
让我用一个实际的电商购物车业务场景来展示私有变量的应用
 */

// 创建一个购物车工厂函数，返回一个购物车实例
function createShoppingCart() {
  // 私有变量 - 存储购物车中的商品列表，外部无法直接访问
  let _items = [];
  // 私有变量 - 存储购物车总金额，外部无法直接访问
  let _total = 0;
  // 私有变量 - 存储折扣率（0-1之间的小数），外部无法直接访问
  let _discount = 0;
  // 私有变量 - 存储税率（0.1表示10%），外部无法直接访问
  let _taxRate = 0.1; // 10%税率

  // 私有方法 - 计算购物车总金额，只能在内部使用
  const _calculateTotal = () => {
    // 计算商品小计（折扣前）：所有商品的价格乘以数量的总和
    _total = _items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    // 应用折扣和税费：小计 * (1 - 折扣率) * (1 + 税率)
    _total = _total * (1 - _discount) * (1 + _taxRate);
  };

  // 私有方法 - 验证商品信息是否有效
  const _validateItem = (item) => {
    // 检查商品是否存在，并且具有必需的属性
    return item && 
           typeof item.id === 'string' && // ID必须是字符串
           typeof item.price === 'number' && // 价格必须是数字
           item.price > 0 && // 价格必须大于0
           typeof item.quantity === 'number' && // 数量必须是数字
           item.quantity > 0; // 数量必须大于0
  };

  // 私有方法 - 根据商品ID查找商品在数组中的索引位置
  const _findItemIndex = (itemId) => {
    // 使用数组的findIndex方法查找匹配的商品
    return _items.findIndex(item => item.id === itemId);
  };

  // 返回一个对象，包含所有公开的方法（购物车的公共API）
  return {
    // 公开方法 - 向购物车添加商品
    addItem: (newItem) => {
      // 验证商品信息是否有效
      if (!_validateItem(newItem)) {
        // 如果商品无效，输出错误信息到控制台
        console.error('无效的商品信息');
        // 返回false表示添加失败
        return false;
      }

      // 查找商品是否已经存在于购物车中
      const existingIndex = _findItemIndex(newItem.id);
      
      // 如果商品已存在（索引大于-1表示找到）
      if (existingIndex > -1) {
        // 商品已存在，增加现有商品的数量
        _items[existingIndex].quantity += newItem.quantity;
      } else {
        // 商品不存在，将新商品添加到购物车
        // 使用扩展运算符创建新对象的副本，避免引用问题
        _items.push({ ...newItem });
      }
      
      // 重新计算购物车总金额
      _calculateTotal();
      // 输出成功信息到控制台
      console.log(`已添加商品: ${newItem.name}`);
      // 返回true表示添加成功
      return true;
    },

    // 公开方法 - 从购物车移除商品
    removeItem: (itemId) => {
      // 查找要移除的商品在数组中的位置
      const index = _findItemIndex(itemId);
      // 如果找到商品（索引大于-1）
      if (index > -1) {
        // 从数组中移除商品，并获取被移除的商品
        const removedItem = _items.splice(index, 1)[0];
        // 重新计算购物车总金额
        _calculateTotal();
        // 输出移除成功信息
        console.log(`已移除商品: ${removedItem.name}`);
        // 返回true表示移除成功
        return true;
      }
      // 如果商品不存在，输出错误信息
      console.error('商品不存在');
      // 返回false表示移除失败
      return false;
    },

    // 公开方法 - 更新商品数量
    updateQuantity: (itemId, newQuantity) => {
      // 如果新数量小于等于0，则移除该商品
      if (newQuantity <= 0) {
        // 调用removeItem方法移除商品
        return this.removeItem(itemId);
      }

      // 查找要更新的商品在数组中的位置
      const index = _findItemIndex(itemId);
      // 如果找到商品
      if (index > -1) {
        // 更新商品数量
        _items[index].quantity = newQuantity;
        // 重新计算购物车总金额
        _calculateTotal();
        // 返回true表示更新成功
        return true;
      }
      // 如果商品不存在，返回false表示更新失败
      return false;
    },

    // 公开方法 - 应用折扣
    applyDiscount: (discountPercent) => {
      // 验证折扣率是否在有效范围内（0-100）
      if (discountPercent >= 0 && discountPercent <= 100) {
        // 将百分比转换为小数（例如：10% -> 0.1）
        _discount = discountPercent / 100;
        // 重新计算购物车总金额
        _calculateTotal();
        // 输出折扣应用成功信息
        console.log(`已应用 ${discountPercent}% 折扣`);
        // 返回true表示折扣应用成功
        return true;
      }
      // 如果折扣率无效，输出错误信息
      console.error('折扣率必须在 0-100 之间');
      // 返回false表示折扣应用失败
      return false;
    },

    // 公开方法 - 获取购物车摘要信息（只读）
    getCartSummary: () => {
      // 返回购物车的摘要信息对象
      return {
        // 返回商品的副本数组，防止外部直接修改内部数据
        items: _items.map(item => ({ ...item })),
        // 计算商品小计（折扣和税费前）
        subtotal: _items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        // 返回折扣百分比
        discount: _discount * 100,
        // 返回税率百分比
        tax: _taxRate * 100,
        // 返回最终总金额
        total: _total,
        // 计算商品总数量
        itemCount: _items.reduce((count, item) => count + item.quantity, 0)
      };
    },

    // 公开方法 - 清空购物车
    clearCart: () => {
      // 重置商品数组为空数组
      _items = [];
      // 重置总金额为0
      _total = 0;
      // 重置折扣为0
      _discount = 0;
      // 输出清空成功信息
      console.log('购物车已清空');
    },

    // 公开方法 - 结账
    checkout: () => {
      // 检查购物车是否为空
      if (_items.length === 0) {
        // 如果购物车为空，输出错误信息
        console.error('购物车为空，无法结账');
        // 返回false表示结账失败
        return false;
      }

      // 创建订单对象
      const order = {
        // 生成订单ID（使用时间戳确保唯一性）
        orderId: 'ORD_' + Date.now(),
        // 保存商品信息的副本
        items: _items.map(item => ({ ...item })),
        // 保存订单总金额
        total: _total,
        // 保存订单时间
        timestamp: new Date().toISOString()
      };

      // 输出订单信息到控制台
      console.log('订单已生成:', order);
      
      // 模拟结账过程：清空购物车
      this.clearCart();
      // 返回订单对象
      return order;
    }
  };
}

// ============ 使用示例 ============

// 创建购物车实例
const cart = createShoppingCart();

// 添加第一个商品到购物车
cart.addItem({
  id: 'prod_001',        // 商品ID
  name: 'iPhone 15',     // 商品名称
  price: 7999,           // 商品价格
  quantity: 1            // 商品数量
});

// 添加第二个商品到购物车
cart.addItem({
  id: 'prod_002',        // 商品ID
  name: 'AirPods Pro',   // 商品名称
  price: 1899,           // 商品价格
  quantity: 2            // 商品数量
});

// 应用10%的折扣
cart.applyDiscount(10);

// 获取购物车摘要信息并打印
const summary = cart.getCartSummary();
console.log('购物车概览:', summary);

// 尝试直接访问私有变量（这些操作会失败，返回undefined）
console.log(cart._items); // 输出: undefined
console.log(cart._total); // 输出: undefined

// 更新商品数量：将AirPods Pro的数量从2改为1
cart.updateQuantity('prod_002', 1);

// 执行结账操作
const order = cart.checkout();