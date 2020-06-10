/*indexOf() lastIndexOf() includes()
============================================================================================================
arr.indexOf(item, from): 从索引from开始查找item，如果找到则返回item的索引值，反之则返回-1；
arr.lastIndexOf(item, from)：从索引from开始==由右向左==搜索，如果找到item，则返回该索引值，反之返回-1；
arr.includes(item, from)：从索引from开始查找item，如果找到，则返回true，反之返回false。

arr.includes(item) --- 是用来简单地检测该数组中是否包含这个元素的首选
============================================================================================================
*/

let arr = [1, 0, 2, 3, false, 'adam'];

console.log(arr.indexOf(0)); //1
console.log(arr.indexOf(3, 2)); //3
console.log(arr.indexOf(2, 3)); //-1

// console.log(arr.lastIndexOf(adam)); //Error
console.log(arr.lastIndexOf('adam')); // 5
console.log(arr.lastIndexOf(false, 2)); //-1
console.log(arr.lastIndexOf(3, -2)); //3

console.log(arr.includes(3)); //true
console.log(arr.includes(3, 5)); //false