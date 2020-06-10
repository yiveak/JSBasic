/* 箭头函数对单行行为尤其方便
============================================================================================================
let func = (arg1, arg2, ..., argN) => expression
相当于
let func = function(arg1, arg2,...,argN){
    return expression
}

如果只有一个参数，参数外的圆括号可以省略
let func = arg => expression

如果没有参数，要保留圆括号
let func = () => expression

箭头函数可以像函数表达式一样使用。

多行箭头函数
将右侧的expression改为花括号包裹的代码，同时显式地通过return返回值
let func = () =>{
    //函数体
    return result;
}
============================================================================================================
*/


/* function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function () {
        alert("You agreed.");
    },
    function () {
        alert("You canceled the execution.");
    }
); */

// 用箭头函数的方式重写上述代码

let ask = (question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);