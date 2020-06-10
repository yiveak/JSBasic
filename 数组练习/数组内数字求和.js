/*
sum([1, 2, 3, 4]);  // 输出 10 
sum(['a', 1, 2, {a:3}, 3, 4, 1.2]);  // 输出 11.2 
*/

function getSum(arr){
    let sum = 0;
    for( let i = 0; i < arr.length; i++){
        if(Number(arr[i])){
            sum += arr[i];
        }
    }
    return sum;
}

console.log(getSum([1, 2, 3, 4]));
console.log(getSum(['a', 1, 2, {a:3}, 3, 4, 1.2]));