// 第一个参数是回调 第二个参数是等待间隔
function throttle(callback, wait){
  // 定义开始时间
  let start = 0;
  // 返回结果是一个函数
  return function(e){
    // console.log('iloveyou');
    // 获取当前的时间戳
    let now = Date.now();
    // 判断
    if(now - start >= wait){
      // 若满足条件 则执行回调函数
      callback.call(this, e);
      // 修改开始时间
      start = now;
    }
  }
}