function map(arr, callback){
  // 声明一个空的数组
  let result = [];
  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
     // 执行回调
     result.push(callback(arr[i], i));
  }
  // 返回结果
  return result;
}