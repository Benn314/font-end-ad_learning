import { hi } from './m.js'
let a = 10;
// 这是一个注释
console.log(hi);
console.log(a);

// a = 'hello';

function fn(a: number, b: number){
    return a + b;
}

function fn2(this: Window){
    alert(this);
}

let box1 = document.getElementById('box1');

// if(box1 !== null){
//     box1.addEventListener('click', function (){
//         alert('hello');
//     });
// }

box1?.addEventListener('click', function (){ // 直接用问好运算符 比if判断语句书写更快 就写了个? 表示可选的
    alert('hello');
});

