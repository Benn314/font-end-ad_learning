"use strict";
exports.__esModule = true;
var m_js_1 = require("./m.js");
var a = 10;
// 这是一个注释
console.log(m_js_1.hi);
console.log(a);
// a = 'hello';
function fn(a, b) {
    return a + b;
}
function fn2() {
    alert(this);
}
var box1 = document.getElementById('box1');
// if(box1 !== null){
//     box1.addEventListener('click', function (){
//         alert('hello');
//     });
// }
box1 === null || box1 === void 0 ? void 0 : box1.addEventListener('click', function () {
    alert('hello');
});
