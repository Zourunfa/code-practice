// 第二个参数是设置对象自己的属性，而且必须是一个对象descripter描述器
Object._create = function (proto, propertyObject = undefined) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError(
      'Object prototype may only be Object or null to Object',
    );
  }
  if (propertyObject == null) {
    new TypeError('cannot convert undefined or null to Object');
  }

  // 关键就这三行
  function F() {}
  F.prototype = proto;
  const obj = new F();

  if (propertyObject !== undefined) {
    Object.defineProperty(obj, propertyObject);
  }

  if (proto === null) {
    // 创建一个没有原型的对象 Object.create(null)
    obj._proto_ = null;
  }

  return obj;
};

// 面试题
// console.log(({} + {}).length);
// console.log(([] + []).length);
// console.log(function (a, b) {}.length);
