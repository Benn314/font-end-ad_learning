//声明构造函数
function Promise(executor){
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性
    this.callback = {};
    //保存实例对象的 this 的值
    const self = this;// self _this that
    //resolve 函数
    function resolve(data){
        //判断状态
        if(self.PromiseState !== 'pending') return;
        //1. 修改对象的状态 (promiseState)
        self.PromiseState = 'fulfilled';// resolved
        //2. 设置对象结果值 (promiseResult)
        self.PromiseResult = data;
        //调用成功的回调函数
        if(self.callback.onResolved){
            self.callback.onResolved(data);
        }
    }
    //reject 函数
    function reject(data){
        //判断状态
        if(self.PromiseState !== 'pending') return;
        //1. 修改对象的状态 (promiseState)
        self.PromiseState = 'rejected';// 
        //2. 设置对象结果值 (promiseResult)
        self.PromiseResult = data;
        //执行回调
        if(self.callback.onRejected){
            // self.callback.onResolved(data); //这里这么写当然也一样能输出相同的结果 果然是很底层的东西 但我们需要由规范 什么状态输出then的什么回调函数（成功或失败）
            self.callback.onRejected(data);
        }
    }
    try{
        //同步调用『执行器函数』
        executor(resolve, reject);
    }catch(e){
        //修改 promise 对象状态为『失败』
        reject(e);
    }
}

//添加 then 方法
Promise.prototype.then = function(onResolved, onRejected){
    //调用回调函数  PromiseState
    if(this.PromiseState === 'fulfilled'){
        onResolved(this.PromiseResult);
    }
    if(this.PromiseState === 'rejected'){
        onRejected(this.PromiseResult);
    }
    // 因为异步的话 then方法无法进入上面两个if 无结果输出 我们需要对pending也做一下判断处理
    //判断 pending 状态
    if(this.PromiseState === 'pending'){
        //保存回调函数
        this.callback = {
            onResolved, //可以简写
            onRejected: onRejected
        }
    }
}