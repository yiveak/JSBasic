let arr = [1, 2, 3, 4, 1, 2, 4, [23, 4, 21, 4, 154, 23],
    [2, 3, 4, 4, [2, 100, 244, 200]]
];
// let arr = [12, 34, 5, 8, 2, 98, 13, 67, 36];


//Array.flat(Infinity)
arr = arr.flat(Infinity);

console.log(quickSort(arr));

//pivot
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}