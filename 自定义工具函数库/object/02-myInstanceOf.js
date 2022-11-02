//这个函数还是理解不透彻！
function myInstanceOf(obj, Fn) {
  // 获取函数的显式原型
  let prototype = Fn.prototype;
  // 获取 obj 的隐式原型对象
  let proto = obj.__proto__;
  // 遍历原型链
  while (proto) { // 原型链到了最上层 === null 就会终止while循环
    // 检测原型对象是否相等
    if (prototype === proto) {
      return true;
    }
    // 如果不等于
    proto = proto.__proto__;
  }
  return false;
}