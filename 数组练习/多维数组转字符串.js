/* 多维数组转字符串
=== === === === === === === === === == flat(), join() === === === === === === === === === === === === === 
 */    let arr = [
        [1, 2, 3, 4], 34, '456', ['bjk', 'b', 'e', ],
        [2, 'd', 'g', ['f', 'd', 12, '23ef']]
    ];

//console.log(arr.flat(Infinity)); //(16) [1, 2, 3, 4, 34, "456", "bjk", "b", "e", 2, "d", "g", "f", "d", 12, "23ef"]

let str = (arr.flat(Infinity)).join('');
console.log(str); // 123434456bjkbe2dgfd1223ef