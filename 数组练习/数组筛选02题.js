//找出工资大于3000的

let arr = [4000, 3500, 2900, 3400, 2750, 3010, 2690, 4020, 10000];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3000) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);