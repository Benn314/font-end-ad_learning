// 也可以直接使用字面量进行类型声明
var a;
a = 10;
// 可以使用 | 来连接多个类型（联合类型）
var b;
b = "male";
b = "female";
var c;
c = true;
c = 'hello';
// any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let d: any;
// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
var d;
d = 10;
d = 'hello';
d = true;
// unknown 表示未知类型的值
var e;
e = 10;
e = "hello";
e = true;
var s;
s = '茵仔';
// d的类型是any，它可以赋值给任意变量
// s = d;
e = 'hello 百变小茵';
console.log('第一次检测：');
// console.log(typeof e === "string"); //truelog
console.log(typeof e);
e = 521;
console.log(typeof e);
// s = e;
// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
if (typeof e === "string") { //怎么这句if把e从uknown变为string了？
    s = e;
}
// console.log('s = '+ s);
// console.log('第二次检测：');
// console.log(typeof e === "string");
// s = e; e还是unknown
// 类型断言，可以用来告诉解析器变量的实际类型
/*
* 语法：
*   变量 as 类型
*   <类型>变量
*
* */
s = e;
s = e;
// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn() {
}
// never 表示永远不会返回结果
function fn2() {
    throw new Error('报错了！');
}
