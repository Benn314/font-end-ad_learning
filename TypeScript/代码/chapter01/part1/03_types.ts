// 也可以直接使用字面量进行类型声明
let a: 10;
a = 10;

// 可以使用 | 来连接多个类型（联合类型）
let b: "male" | "female";
b = "male";
b = "female";

let c: boolean | string;
c = true;
c = 'hello';

// any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let d: any;

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let d;
d = 10;
d = 'hello';
d = true;

// unknown 表示未知类型的值
let e: unknown;
e = 10;
e = "hello";
e = true;

let s:string;
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
if(typeof e === "string"){ //怎么这句if把e从uknown变为string了？
    s = e;
}
// console.log('s = '+ s);
// console.log('第二次检测：');
// console.log(typeof e === "string");

// s = e; // e还是unknown

// 类型断言，可以用来告诉解析器变量的【实际】类型 不再报错处理 但ts对下面变量e的自动检测还是unknown 这是一开始就定好的
/*
* 语法：
*   变量 as 类型   （用法一）
*   <类型>变量     （用法二）
*
* */
s = e as string;
s = <string>e;
// 上面两行表达的都是一样的

// void 用来表示空，以函数为例，就表示没有返回值的函数 返回（空值）undefined、null 实际上也是一种返回值 下面never类型才是什么都没有
function fn(): void{
}

// never 表示永远不会返回结果 这种函数我们通常用来当作进行报错的程序执行 因为报错是不用返回任何值的
// never 用的比较少
function fn2(): never{
    throw new Error('报错了！');
}
