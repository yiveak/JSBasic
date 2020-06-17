const circleArea = function circleArea(r) {
    const PI = 3.14;
    const area = PI * r * r;
    return area;
}
console.log(circleArea(3).toFixed(2));


// 1. =>
/* 
const 函数名 = (parameters) => {
    函数体
    return result;
};
*/
const circleArea = r => {
    const PI = 3.14;
    const area = PI * r * r;
    return area;
}
console.log(circleArea(3).toFixed(2));


// 2. 如果函数就一条语句，即省略/无return
const circleArea = r => Math.PI * r * r;
console.log(circleArea(3).toFixed(2));

// 3. 如果函数无参数，则保留一对()
const hello = () => console.log('Hello, world.');
hello();