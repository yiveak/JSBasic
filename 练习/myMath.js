/* 
利用对象封装自己的数学函数对象
*/

let myMath = {
    PI: 3.1415926,
    max: function (arr) {
        let max = 0;
        for (let i = 0; i < arr.length; i++) {
            max = max > arr[i] ? max : arr[i];
        }
        return max;
    }
}

let arr = [1, 4, 23, 2, 5, 78, 34, 62, 98, 100, 35, 76, 100];
console.log(myMath.max(arr));