// 弹出对话框
// alert("Hello, world!");
//信息输出到控制台
console.log("Hello, world!")

//1、变量：8种数据类型 ---- Number, BigInt, String, Boolean, Symbol, null, undefined, Object
let num; //变量的声明
num = 3; //变量的赋值
let str = "Hello"; //变量声明并初始化
let flag = true;
let nll = null;
let undef = undefined;
let obj = new Object();

console.log(num); //注意控制台中数字的显示的颜色：蓝
console.log(str); //而字符串在控制台中显示的颜色：黑
console.log(flag); //布尔值：蓝
console.log(nll); //空值：灰
console.log(undef); //未定义的：灰
console.log(obj);

//输出变量的类型：typeof()
console.log(typeof (num));
console.log(typeof (str));
console.log(typeof (flag));
console.log(typeof (nll)); //注意：空值的类型————对象 JavaScript遗留的错误
console.log(typeof (undef));
console.log(typeof (object)); //undefined 变量声明时，未被赋初始值，那么其值为undefined