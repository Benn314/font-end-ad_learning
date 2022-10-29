/**
 * 
 * @param {Array} arr 
 * @param  {...any} args 
 */
function concat(arr, ...args) {
  // 声明一个空数组
  const result = [...arr]; // 展开
  // const result = arr; // 这样也行
  // 遍历数组
  args.forEach(item => {
    // 判断 item 是否为数组
    if (Array.isArray(item)) {
      // result.push(item) // 这么写的话是把数组往另一个数组里面压(因为第一个参数是数组形式的，同时我们是遍历args 所以第一个元素不展开的话就是压数组而不是压数组元素) 会形成二维数组 而我们是需要追加到一维数组里面去
      result.push(...item)
    } else {
      result.push(item);
    }
  });
  // console.log(result);
  return result;
}

/**
 * 
 * @param {Array} arr 
 * @param {Number} begin 
 * @param {Number} end 
 * @returns 
 */
function slice(arr, begin, end) {
  // 若arr数组长度为 0
  if (arr.length === 0) {
    return [];
  }

  // 判断 begin
  begin = begin || 0; // 如果没有传参begin 则设置默认值0
  if (begin >= arr.length) {
    return [];
  }

  // 判断 end
  end = end || arr.length; // 如果没有传参end 则设置默认值数组长度
  if (end < begin) {
    end = arr.length;
  }

  // 声明一个空数组
  const result = [];

  // 遍历对象
  for (var i = 0; i < arr.length; i++) {
    if (i >= begin && i < end) {
      // 将下标对应的元素压入数组
      result.push(arr[i]);
    }
  }

  return result;
}
