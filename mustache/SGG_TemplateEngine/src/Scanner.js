/**
 * 扫描器类
 */
export default class Scanner {
  constructor(templateStr) {
    // console.log(templateStr);
    // 将模板字符串写到实例身上
    this.templateStr = templateStr;
    // 指针
    this.pos = 0;
    // 尾巴（指针后面未扫描的部分(包括指针当前的那一位),一开始就是模板字符串的原文）这里设计还是很精妙的
    this.tail = templateStr;
  }

  // 功能弱 就是走过指定内容 没有返回值
  scan(tag) {
    if (this.tail.indexOf(tag) == 0) { // 保险起见 加个if语句比较好
      // tag有多长 比如{{长度是2 就让指针后移多少位
      this.pos += tag.length;
      // 尾巴也要变 改变尾巴为从当前指针这个字符开始 到最后的全部字符
      this.tail = this.templateStr.substring(this.pos);
    }
  }

  // 让指针进行扫描 直到遇见指定内容结束 并且能够返回结束之前路过的文字
  scanUntil(stopTag) {
    // 记录一下执行本方法的时候pos值
    const pos_backup = this.pos;
    // 当尾巴的开头不是stopTag的时候 就说明还没有扫描到stopTag
    // 写&&很有必要 因为防止找不到 那么寻找到最后也要停止下来
    // eos()写在前面效率性能更高
    while (!this.eos() && this.tail.indexOf(stopTag) != 0) { // 这里等于0才是寻找到 -1是未寻找到 不写&& this.pos<this.templateStr.length容易死循环
      this.pos++;
      // 改变尾巴为从当前指针这个字符开始 到最后的全部字符
      this.tail = this.templateStr.substring(this.pos);
    }

    return this.templateStr.substring(pos_backup, this.pos); // 左闭右开区间 不包括this.pos索引位置
  }

  // 指针是否到头 返回布尔值 end of string
  eos() {
    return this.pos >= this.templateStr.length;
  }
}