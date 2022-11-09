import lookup from "./lookup";
import renderTemplate from "./renderTemplate";
/**
 * 处理数组 结合renderTemplate实现递归
 * 注意 这个函数收的参数是token！而不是tokens！
 * token是什么 就是一个简单的['#', 'students', []]
 * 
 * 这个函数要递归调用renderTemplate函数 调用多少次由data决定
 * 比如data的形式是这样的
 * {
      students: [
        { name: '小明', hobbies: ['游泳', '羽毛球'] },
        { name: '小红', hobbies: ['编程', '写作文', '看报纸'] },
        { name: '小强', hobbies: ['打台球'] },
      ]
    }
    那么parseArray()函数就要递归调用renderTemplate函数3次 因为数组的长度是3
 */
export default function parseArray(token, data) {
  // console.log(token, data);
  // 得到整体数据data中这个数组要使用的部分
  var v = lookup(data, token[1]);
  // console.log(v);
  // 结果字符串
  var resultStr = '';
  // 遍历v数组 v一定是数组（因为我们这里不对布尔值进行考虑 我们做的是简易版mustache 源码mustache #后面可以加布尔值 但这我们不考虑这种情况）
  // 注意 下面这个循环可能是整个包中最难思考的一个循环
  // 它是遍历数据 而不是遍历tokens 数据中数据有几条 就要遍历几条
  for (var i = 0; i < v.length; i++) {
    // 这里要补一个'.'属性
    // 拼接
    resultStr += renderTemplate(token[2], {
      ...v[i],
      '.': v[i]
    });
  }
  return resultStr;
};
