/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 */
function findIndex(arr, callback) {
  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
    // 执行回调
    let res = callback(arr[i], i);
    // 判断
    if (res) {
      // 返回当前正在遍历的元素的下标
      return i;
    }
  }
  // 如果没有遇到满足条件的 返回 -1
  return -1;
}