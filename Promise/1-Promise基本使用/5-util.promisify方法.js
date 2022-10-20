/**
 * util.promisify 方法  (node.js内置的方法)
 * 也就是错误优先的回调
 */
//引入 util 模块
const util = require('util');
//引入 fs 模块
const fs = require('fs');
// 返回一个新的函数
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./resource/content.txt').then(value=>{
  console.log(value.toString());
})

/**
 * 对于以后使用promise 我们不需要每一个都手动封装 
 * 而是可以借助于util.promisify这个方法 将原来那种回调函数风格的方法转变成一个promise风格的函数
 * 这样使用起来会更加方便一些
 */
