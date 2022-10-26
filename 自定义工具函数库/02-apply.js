// 这里就不用res参数了（... 表示多个参数吗？查一下） 直接用args普通参数就可以了
function apply(Fn, obj, args){ // 因为这里args只传一个数组参数 所以写一个args就行
  //判断
  if(obj === undefined || obj === null){ // 如果对象是未定义或为空
    obj = globalThis; //让对象等于全局对象（chrome里全局对象是window对象 IE里的全局对象是global对象）
  }
  // 为 obj 添加临时方法
  obj.temp = Fn;
  // 执行方法
  let result = obj.temp(...args); // ...是扩展运算符 要把它（数组）展开
  // 删除临时属性
  delete obj.temp;
  // 返回结果
  return result;
}