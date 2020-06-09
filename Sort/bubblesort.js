let arr = [1, 2, 3, 4, 1, 2, 4, [23, 4, 21, 4, 154, 23],
    [2, 3, 4, 4, [2, 100, 244, 200]]
];
// let arr = [12, 34, 5, 8, 2, 98, 13, 67, 36];


//Array.flat(Infinity)
arr = arr.flat(Infinity);

console.log(bubbleSort(arr));

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) { //arr.length - 1
        for (let j = 0; j < arr.length - 1 - i; j++) { // arr.length - 1 -i
            if (arr[j] > arr[j + 1]) { // from min to max , arr[j]<arr[j+1] ---> from max to min
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}