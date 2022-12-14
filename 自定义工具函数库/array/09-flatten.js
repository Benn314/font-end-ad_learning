/**
 * 数组扁平化
 * @param {Array} arr 
 */
function flatten1(arr) {
  // 声明空数组
  let result = []; //用来接收最后的结果
  // 遍历数组
  arr.forEach(item => {
    // 判断
    if (Array.isArray(item)) {
      // 单纯...展开 是不行的 因为可能不止嵌套一次
      // flatten1(item); //这样写是拼接不到item的 因为拼接的result是局部的局部的局部... 等等 就是我们是要凭借在第一个定义的result 也就是最外层的result
      result = result.concat(flatten1(item)); // [1,2,3,4,5,6,7]
    } else {
      result = result.concat(item); // 这里没有重新赋值的话 原数组这一块就是空的 它是返回一个新数组 需要变量来进行接收
    }
  });

  // 返回结果
  return result;
}

function flatten2(arr) {
  // 声明数组 我们希望对一个新数组进行操作 而不是对原数组进行操作
  let result = [...arr];
  //循环判断
  while (result.some(item => Array.isArray(item))) {
    // 循环前：[1, 2, [3, 4, [5, 6]], 7]
    // result = [].concat([1, 2, [3, 4, [5, 6]], 7]); // 第一次循环：[1, 2, 3, 4, [5, 6], 7]
    // result = [].concat([1, 2, 3, 4, [5, 6], 7]); // 第二次循环：[1, 2, 3, 4, 5, 6, 7]
    result = [].concat(...result);
    console.log(result); // 我们还可以看中间展开的结果值
  }
  // console.log(result);
  return result;
}