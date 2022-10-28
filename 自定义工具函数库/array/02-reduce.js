/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @param {*} initValue {}里代表数据类型
 * @returns 
 */
function reduce(arr, callback, initValue) {
  // 声明变量
  let result = initValue;
  // 执行回调
  for (var i = 0; i < arr.length; i++) {
    // 执行回调
    result = callback(result, arr[i]);
  }
  //返回最终的结果
  return result;
}