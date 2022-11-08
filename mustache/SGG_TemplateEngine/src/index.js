import Scanner from './Scanner';
import parseTemplateToTokens from './parseTemplateToTokens';

// 全局提供SSG_TemplateEngine对象
window.SSG_TemplateEngine = {
  // 渲染方法
  render(templateStr, data) {

    /*
      实例化一个扫描器 构造函数提供一个参数 这个参数就是模板字符串
      也就是说这个扫描器就是针对这个模板字符串工作的
     */
    // var scanner = new Scanner(templateStr);
    // // console.log(templateStr);

    // // // 测试scanUntil
    // // var words = scanner.scanUntil('{{');
    // // console.log(scanner.pos);
    // // console.log(words);
    // // scanner.scan('{{');
    // // console.log(scanner.pos);

    // var word;
    // // while (scanner.pos != templateStr.length) { 改写成下面的形式
    // // 当scanner没有到头
    // while (!scanner.eos()) {
    //   word = scanner.scanUntil('{{');
    //   console.log(word);
    //   scanner.scan('{{');

    //   word = scanner.scanUntil('}}');
    //   console.log(word);
    //   scanner.scan('}}');
    // }

    // ----------分割线 上面代码是为了单元测试（单个函数测试功能）-----------

    // 调用parseTemplateToTokens函数 让模板字符串能够变为tokens数组
    var tokens = parseTemplateToTokens(templateStr);
    console.log(tokens);
  }
}
