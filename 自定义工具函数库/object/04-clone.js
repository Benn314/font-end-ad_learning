/**
 * 
 * @param {*} target 
 */
function clone1(target) {
  // 类型判断 {} [] null
  if (typeof target === 'object' && target !== null) {
    // 判断数据是否为数组
    if (Array.isArray(target)) {
      return [...target]; // 创建一个新数组 然后把内容展开
    } else {
      return { ...target };
    }
  } else {
    return target;
  }
}

function clone2(target) {
  // 类型判断 {} [] null
  if (typeof target === 'object' && target !== null) {
    // 创建一个容器 （因为需要往里边一个一个去写）
    const result = Array.isArray(target) ? [] : {};
    // 遍历 target 数据 （因为target有可能是数组有可能是对象 我们遍历要选择数组和对象都适用的遍历方式 最终选择for in循环）
    // 如果你使用for循环只能遍历数组 使用 for of 只能遍历具有迭代器接口的数据
    // for in不仅能遍历当前对象生产属性  还能够遍历它原型上边的属性 而对于原型上的属性不需要 所以需要判断一下
    for (const key in target) {
      if (target.hasOwnProperty(key)) { // 这里相当于是限制只在对象身上判断有没有属性 不然它的原型对象属性也会进行判断 而我们是不需要原型对象属性的 所以我们通过这句if语句将原型对象属性排除在外 只判断对象本身
        // 将属性设置到 result 结果数据中
        result[key] = target[key];
      }
    }
    return result;
  } else {
    return target;
  }
}


function deepClone1(target) {
  // 通过数据创建 JSON 格式的字符串
  let str = JSON.stringify(target);
  // console.log(str); // {"a":1,"b":["e","f","g"],"c":{"h":20}}
  // 将 JSON 字符串创建为 JS 数据
  let data = JSON.parse(str);
  // console.log(data);
  return data;
}

// 能克隆方法了 但还是解决不了循环引用的问题 会报栈溢出
function deepClone2(target) {
  // 检测数据的类型
  if (typeof target === 'object' && target !== null) {
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {};
    // 遍历对象
    for (let key in target) {
      // 检测该属性是否为对象本身的属性（不能拷贝原型对象的属性）
      if (target.hasOwnProperty(key)) {
        // 拷贝
        result[key] = deepClone2(target[key]);
      }
    }
    return result;
  } else { // 如果是数字/字符串 直接返回该值 递归出口 从这里出 解决浅拷贝问题->变成深拷贝了
    return target;
  }
}

// 解决循环引用问题
// map 的键值可以是任意类型
function deepClone3(target, map = new Map()) {
  // 检测数据的类型
  if (typeof target === 'object' && target !== null) {
    // 克隆数据之前 进行判断 数据之前是否克隆过
    let cache = map.get(target);
    if (cache) {
      return cache;
    }
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {};
    // 将新的结果存入到容器中
    map.set(target, result);
    // 遍历对象
    for (let key in target) {
      // 检测该属性是否为对象本身的属性（不能拷贝原型对象的属性）
      if (target.hasOwnProperty(key)) {
        // 拷贝
        result[key] = deepClone3(target[key], map);
      }
    }
    return result;
  } else { // 如果是数字/字符串 直接返回该值 递归出口 从这里出 解决浅拷贝问题->变成深拷贝了
    return target;
  }
}

// 最终版 面试版 可以克隆方法、循环引用、性能优化
function deepClone4(target, map = new Map()) {
  // 检测数据的类型
  if (typeof target === 'object' && target !== null) {
    // 克隆数据之前 进行判断 数据之前是否克隆过
    let cache = map.get(target);
    if (cache) {
      return cache;
    }
    // 创建一个容器
    let isArray = Array.isArray(target);
    const result = isArray ? [] : {};
    // 将新的结果存入到容器中
    map.set(target, result);
    // 如果目标数据为数组
    if (isArray) { //重复代码不反复写 定义一个isArray接收Array.isArray(target) 减少(重复)计算量
      // forEach遍历
      target.forEach((item, index) => {
        result[index] = deepClone4(item, map);
      });
    } else {
      // 如果是对象 获取所有的键名 然后forEach遍历
      Object.keys(target).forEach(key => {
        result[key] = deepClone4(target[key], map);
      });
    }
    return result;
  } else { // 如果是数字/字符串 直接返回该值 递归出口 从这里出 解决浅拷贝问题->变成深拷贝了
    return target;
  }
}