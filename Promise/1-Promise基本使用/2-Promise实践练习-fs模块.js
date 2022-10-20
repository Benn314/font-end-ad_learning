//
const fs = require('fs');

//回调函数的形式 没有带Promise的形式
// fs.readFile('./resource/content.txt',(err,data)=>{
//   // 如果出错 则抛出错误
//   if(err) throw err;
//   //没有错误 输出文件内容
//   // console.log(data); // 只输出Buffer流
//   console.log(data.toString()); //将Buffer流转成字符串
// });

//Promise形式
let p = new Promise((resolve,reject) => {
  fs.readFile('./resource/content.txt',(err,data)=>{
    //如果出错
    if(err) reject(err);
    //如果成功
    resolve(data);
  });
});

//调用 then 对结果进行处理
// 第一个函数参数为成功情况
// 第二个函数参数为失败情况
p.then(value=>{
  console.log(value.toString());
},reason=>{
  console.log(reason);
});