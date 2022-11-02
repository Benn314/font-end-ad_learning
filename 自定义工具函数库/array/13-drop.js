/**
 * 
 * @param {Array} arr 
 * @param {Number} size 
 */
function drop(arr, size) {
  // 过滤原数组 产生新数组
  // return arr.filter((value, index) => {
  //   //
  //   return index >= size;
  // })
  return arr.filter((value, index) => index >= size); // 用来测试数组中每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。它接
}

function dropRight(arr, size) {
  // return arr.filter((value, index) => {
  //   return index < arr.length - size;
  // })
  return arr.filter((value, index) => index < arr.length - size);
}