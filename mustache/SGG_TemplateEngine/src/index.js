import Scanner from './Scanner';
import parseTemplateToTokens from './parseTemplateToTokens';
import renderTemplate from './renderTemplate';

import lookup from './lookup';

// 全局提供SSG_TemplateEngine对象
window.SSG_TemplateEngine = {
  // 渲染方法
  render(templateStr, data) {
    // 调用parseTemplateToTokens函数 让模板字符串能够变为tokens数组
    var tokens = parseTemplateToTokens(templateStr);
    // 调用renderTemplate函数 让tokens数组变为dom字符串
    var domStr = renderTemplate(tokens, data);
    // console.log(tokens);

    // 测试数据
    // lookup({
    // m: {
    //   n: {
    //     p: 123
    //   }
    // }
    // }, 'm.n.p')

    return domStr;
  }
}
