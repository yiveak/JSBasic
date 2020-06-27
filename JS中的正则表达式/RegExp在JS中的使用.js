/* RegExp在JS中的使用 */

// 1. 通过RegExp对象的构造函数来创建 正则表达式：let 变量名 = new RegExp(/表达式/);
let regexp1 = new RegExp(/abc/);
// console.log(regexp1);

// 2. 通过字面量的方式创建
let regexp2 = /123/;
// console.log(regexp2);

// 通过regexObj.test(str)来测试字符串是否匹配表达式的规则 返回值是true or false
// console.log(regexp2.test('abc'));

let regexp5 = /^[abc]$/;
console.log(regexp5.test('alex')); // true
console.log(regexp5.test('babe')); // true
console.log(regexp5.test('color')); // true
console.log(regexp5.test('john'));

let regexp6 = /^a*$/;
console.log(regexp6.test(''));
console.log(regexp6.test('a'));
console.log(regexp6.test('abc')); //false
console.log(regexp6.test('b'));
console.log(regexp6.test('area')); //false
console.log(regexp6.test('aa')); // true

let regexp7 = /^a{3}$/; // a重复3次

let regexp8 = /^a{3, }$/; // a重复>=3次

let regexp9 = /^a{3, 6}$/; // a重复[3,6]次

//用户名的表单验证的正则表达式：限定用户名只能由6到16的字母、数字、下划线、-组成。花括号里面不能有空格。
let regexp10 = /^[a-z0-9_-]{6,16}$/; 

let regexp11 = /^abc{3}$/; // 只是让c重复3次
let regexp12 = /^(abc){3}$/; // 让abc都重复3次 abcabcabc () 表示优先级