/**
 * 
 * @param {Array} arr 
 * @param  {...any} args 
 */
function pull(arr, ...args) {
  // 声明空数组 保存删除的元素
  const result = [];
  // 遍历 arr
  for (var i = 0; i < arr.length; i++) {
    // 判断当前元素是否存在于 args 数组中
    if (args.includes(arr[i])) {
      // 将当前元素的值存入到 result 中
      result.push(arr[i]);
      // 删除当前的元素
      arr.splice(i, 1); // 删除用splice删除 因为splice可以改变原数组
      // 下标自减
      i--; // 不 i-- 的话 会跳过一位数没有检测 （可以自己思考一下~）
    }
  }
  // 返回
  return result;
}

function pullAll(arr, values) {
  return pull(arr, ...values)
}