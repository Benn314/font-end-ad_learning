
function mergeObject(...objs) { //因为参数数量不定个 所以用展开运算符来表示
  // 声明一个空对象
  const result = {};
  // 遍历所有的参数对象
  objs.forEach(obj => {
    Object.keys(obj).forEach(key => {
      // 检测 result 中是否存在key属性
      if (result.hasOwnProperty(key)) { // 如果有这个属性则做拼接(追加)操作
        result[key] = [].concat(result[key], obj[key]);
      } else {
        // 如果没有 则直接写入
        result[key] = obj[key];
      }
    });
  });
  return result;
}