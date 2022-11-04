// 引入 nodejs 内置模块 path （path可以将路径做一个处理）
const path = require('path')

// 对外暴露一个对象 交给webpack去使用 读取里面的参数 对代码进行打包 生成最后结果
module.exports = {
  // 模式
  mode: 'development', // 也可以使用 production（生产模块会对代码做一个压缩） development（开发模式会有注释和代码缩进）
  // 入口（打包入口文件）
  entry: './src/index.js',
  // 出口（打包后的输出位置）
  output: {
    // 打包文件夹
    path: path.resolve(__dirname, 'dist'), // 这里用到的一个功能是将相对路径转为绝对路径
    // 打包文件
    filename: 'atguigu-utils.js',
    // 向外暴露的（全局）对象的名称
    library: 'aUtils',
    // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
    libraryTarget: 'umd',
  },
}