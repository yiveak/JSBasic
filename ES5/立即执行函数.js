// 立即执行函数：不需要调用，自执行函数。
// 语法1. (function (){})()
(function (a, b) {
    console.log(a + b);
})(2, 9);

// 多个立即函数，分号隔开。

// 语法2. (function(){}())
(function (a, b) {
    let max = a > b ? a : b;
    console.log(max);
}(3, 9));

// 立即执行函数的最大作用是：创建了独立的作用域。立即执行函数内的变量都是局部变量，无命名冲突的问题。