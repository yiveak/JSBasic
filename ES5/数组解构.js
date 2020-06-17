// 数组结构
// 1. 一次初始化多个变量
let [x, y] = ['a', 'b'];
/* 等同于
let x = 'a';
let y = 'b';
*/
console.log(x);
console.log(y);

// 2. 用于值的互换，而不需要创建临时变量
[x, y] = [y, x];
console.log(x);
console.log(y);

let arr = [3, 5, 2, 1, 8, 9, 0, 3, 5];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort(arr));