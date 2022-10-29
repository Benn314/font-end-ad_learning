/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @returns 
 */
function every(arr, callback) {
  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
    // 执行回调 如果回调执行返回结果为 false
    if (!callback(arr[i], i)) {
      return false;
    }
  }
  // 如果都满足条件则返回 true
  return true;
}

function some(arr, callback) {
  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
    // 执行回调 如果回调执行返回结果为 false
    if (callback(arr[i], i)) {
      return true;
    }
  }
  // 如果都满足条件则返回 true
  return false;
}