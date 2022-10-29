/**
 * 
 * @param {Array} arr 
 * @returns 
 */
function unique(arr) {
  // 声明一个空数组
  const result = [];
  // 遍历原始数组
  arr.forEach(item => {
    // 检测 result 数组中是否包含这个元素
    if (result.indexOf(item) === -1) {
      // 若没有该元素 则插入到result中
      result.push(item);
    }
  });
  // 返回
  return result;
}

// 把item值当作对象属性进行存储
function unique2(arr) {
  // 声明一个空数组
  const result = [];
  // 声明空对象
  const obj = {};
  // 遍历数组
  arr.forEach(item => {
    if (obj[item] === undefined) {
      // 将 item 作为下标存储在 obj 中
      obj[item] = true;
      result.push(item);
    }
  });
  // 返回
  return result;
}

// 用es6语法 set去做去重
function unique3(arr) {
  // // 数组转化为集合 Set
  // let set = new Set(arr);
  // // 将 set 展开创建一个数组
  // let array = [...set];
  // return array;

  // 一步到位
  return [...new Set(arr)];
}

