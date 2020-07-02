/* 
写一个函数 ucFirst(str)，并返回首字母大写的字符串 str
例如：ucFirst("john") == "John";
*/
function ucFirst(str){
    str = str.toLowerCase();
    let temp = '';
    temp = str[0].toUpperCase();
    for(let i = 1; i < str.length; i++){
        temp = temp.concat(str[i]);
    }
    return temp;
}
console.log(ucFirst('john'));

// 原答案
/* 
如果 str 是空的，那么 str[0] 就是 undefined，但由于 undefined 并没有 toUpperCase() 方法，因此我们会得到一个错误。
存在如下两种变体：
1. 使用 str.charAt(0)，因为它总是会返回一个字符串（可能为空）。
2. 为空字符添加测试。
*/

function ucFirst(str){
    if(!str)return str;
    return str[0].toUpperCase()+str.slice(1);
}
console.log(ucFirst('john'));
