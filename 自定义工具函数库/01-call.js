/**
 * 第一个参数 我们要执行的函数
 * 第二个参数 函数运行时this指向的对象
 * 第三个参数起 函数运行时的参数
 */
function call(Fn,obj,...args){
  // 判断
  if(obj === undefined || obj === null){
    obj = globalThis; //全局对象 globalThis es11的特性 用它来指向全局对象
  }
  // 为 obj 添加临时方法
  obj.temp = Fn;
  // 调用 temp 方法
  let result = obj.temp(...args);
  // 删除 temp 方法
  delete obj.temp;
  // 返回执行结果
  return result;
}