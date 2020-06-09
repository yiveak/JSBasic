let arr = [1, 2, 3, 4, 1, 2, 4, [23, 4, 21, 4, 154, 23],
    [2, 3, 4, 4, [2, 100, 244, 200]]
];
// let arr = [12, 34, 5, 8, 2, 98, 13, 67, 36];


//Array.flat(Infinity)
arr = arr.flat(Infinity);

console.log(selectionSort(arr));

function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}