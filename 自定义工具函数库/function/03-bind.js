function bind(Fn, obj, ...args){
  // 返回一个新的函数
  return function(...args2){
    // 执行 call 函数
    return call(Fn, obj, ...args, ...args2); //这里的...args, ...args2不代表什么 就是实参传入的【位置以及调用】顺序而已
  }
}