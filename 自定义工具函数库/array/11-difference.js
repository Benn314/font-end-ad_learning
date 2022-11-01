/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function difference(arr1, arr2 = []) {
  // slice是返回一个新数组 而不是返回原数组 我们不希望原数组被影响
  // 判断参数
  if (arr1.length === 0) {
    return [];
  }
  if (arr2.length === 0) {
    return arr1.slice();
  }
  const result = arr1.filter(item => !arr2.includes(item));
  return result;
}