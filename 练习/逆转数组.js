/* 
数组有一个 reverse 方法，它可以逆转数组中元素的次序。在本题中，编写两个函数， reverseArray 和 reverseArrayInPlace 。
第一个函数 reverseArray 接受一个数组作为参数，返回一个新数组，并逆转新数组中的元素次序。
第二个函数 reverseArrayInPlace 与第一个函数的功能相同，但是直接将数组作为参数来进行修改，逆转数组中的元素次序。
两者都不能使用标准的 reverse 方法。

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/

function reverseArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[arr.length - 1 - i];
    }
    return newArr;
}
console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray([1, 2, 3, 4, 5]));


function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.ceil((arr.length - 1) / 2); i++) {
        let temp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
console.log(reverseArrayInPlace(["A", "B", "C"]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]));