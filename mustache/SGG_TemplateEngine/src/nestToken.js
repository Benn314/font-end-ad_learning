/**
 * 函数的功能是折叠tokens 将#和/之间的tokens能够整合起来 作为他的下标为3的项
 * @param {*} tokens 
 */
export default function nestedTokens(tokens) {
  // 结果数组
  var nestedTokens = [];
  // 栈结构 存放小tokens 栈顶（靠近端口的 最新进入的）的tokens数组中当前操作的这个小tokens小数组
  var sections = []; //因为是push进元素 所以队尾是栈口(length-1的索引位置) 第0项是栈底

  console.log(tokens);

  for (var i = 0; i < tokens.length; i++) {
    let token = tokens[i];

    switch (token[0]) {
      case '#':
        // 给这个token下标为2的项创建一个数组 以收集子元素
        token[2] = [];
        // 压栈（入栈）
        sections.push(token);
        // console.log(token[1] + '入栈了');
        nestedTokens.push(token);
        break;
      case '/':
        // 出栈 pop()会返回刚刚弹出的项
        let section_pop = sections.pop();
        // 刚刚弹出的项还没有加入到结果数组中
        nestedTokens.push(section_pop);
        // console.log(section[1] + '出栈了');
        break;
      default:
        // 判断 栈队列当前情况
        if (sections.length == 0) {
          nestedTokens.push(token);
        } else {
          sections[sections.length - 1][2].push(token);
        }
    }
  }

  return nestedTokens;
}
