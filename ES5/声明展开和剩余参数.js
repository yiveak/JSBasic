// 展开运算符：...
// 1. 声明展开
const sum = (x, y, z) => x + y + z;
let params = [1, 2, 3];
console.log(sum(...params));

// apply()函数，将数组转为参数
console.log(sum.apply(undefined, params));

// 2. 剩余参数 代替arguments
function restParameterFunction(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 'hello', true, 7));

// or
function restParameterFunction(x, y) {
    var a = Array.prototype.slice.call(arguments, 2); // ? call() slice()
    return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 'hello', true, 7));