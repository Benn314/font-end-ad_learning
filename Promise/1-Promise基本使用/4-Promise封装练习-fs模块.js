/**
 * 封装一个函数 mineReadFile 读取文件内容
 * 参数：path 文件路径
 * 返回：promise 对象
 */
function mineReadFile(path){
  return new Promise((resolve,reject)=>{
    //读取文件 这里用用一个来变量接收实例化对象比较好 这里懒了 没接收直接写
    require('fs').readFile(path,(err,data)=>{
      //判断
      if(err) reject(err);
      //成功
      resolve(data);
    })
  })
}

mineReadFile('./resource/content.txt') //then可以回车到下一行 可以的
.then(value=>{
  //输出文件内容
  console.log(value.toString());
},reason=>{
  console.log(reason);
}); // 直接跟.then 因为它返回的结果是一个promise对象
