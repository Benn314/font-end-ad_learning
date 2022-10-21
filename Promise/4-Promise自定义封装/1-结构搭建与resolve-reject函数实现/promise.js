// 只要这么一声明 index.html new的就是我这里的promise
// 声明构造函数
function Promise(executor){
  // 属性需要自己添加 函数里什么都没有
  //添加属性
  this.PromiseState = 'pending'; //pending:未决定的状态
  this.PromiseResult = null;

  // console.log(this); //实例对象的this
  // 保存实例对象的 this 的值
  const self = this; // self 潜规则命名为self
  
  //resolve 函数
  function resolve(data){
    // console.log(this); //如果上面没有保存实例对象的this 那么这里的this是属于window全局对象的
    // 所以下面赋值不能用this了 要用保存了实例对象this的self
    // 1. 修改对象的状态 (promiseState)
    // this.PromiseState = 'fulfilled'; // resolved 【fulfilled和resolved】这两个表示的都是成功的意思
    self.PromiseState = 'fulfilled'; // resolved 【fulfilled和resolved】这两个表示的都是成功的意思
    // 2. 设置对象结果值 (promiseResult)
    // this.PromiseResult = data;
    self.PromiseResult = data;
  }
  // reject 函数
  function reject(data){
    self.PromiseState = 'rejected';
    self.PromiseResult = data;
  }

  // 同步调用 【执行器函数】
  executor(resolve,reject);
}

// index.html:17 Uncaught TypeError: p.then is not a function
// 所以我们要添加 then 方法
Promise.prototype.then = function(onResolved, onRejected){

}