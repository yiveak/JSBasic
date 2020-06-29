/* 
编写一个 range 函数，接受两个参数： start 和 end ，然后返回包含 start 到 end （包括 end ）之间的所有数字。
接着，编写一个 sum 函数，接受一个数字数组，并返回所有数字之和。运行示例程序，检查一下结果是不是 55。
附加题是修改 range 函数，接受第 3 个可选参数，指定构建数组时的步长（ step ）。
如果没有指定步长，构建数组时，每步增长 1，和旧函数行为一致。调用函数 range(1, 10, 2) ，
应该返回 [1, 3, 5, 7, 9] 。另外确保步数值为负数时也可以正常工作，因此 range(5, 2, -1) 应该产生 [5, 4, 3, 2] 。

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
*/

function range(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
// console.log(range(1, 10));

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum(range(1, 10)));

// 附加

function range2(start, end, step = 1) {
    let arr = [];
    if (step < 0) {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    for (let i = start; i <= end; i += step) {
        arr.push(i);
    }
    return arr;
}

console.log(range2(1, 10, 2));
console.log(range2(5, 2, -1));

console.log(sum(range2(1, 10)));
console.log(sum(range2(1, 10, 2)));
console.log(sum(range2(5, 2, -1)));