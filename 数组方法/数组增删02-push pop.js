/* 添加、数组元素
============================================================================================================
Array.push(item...) Array.unshift(item...)
Array.push(item...)：在数组的末尾添加元素，即将item插入数组的尾部。
Array.unshift(item...)：在数组的开头添加元素，即将item插入数组的头部。
二者的返回值都是：新数组的长度 newArray.length
============================================================================================================
 */
let  arr = [2, 4, 13, 45, 23, 67, 34, 90, 'gleipnir', 'shuichi','claire'];
console.log("arr.push(item..): "+arr.push("towerofgod", '小林')); //返回的是新数组的长度
console.log("arr: "+arr); //原数组被改变，在原数组尾部添加元素
console.log("arr.push(): "+arr.push()); //返回原数组的长度

console.log("arr.unshift(item..): "+arr.unshift("towerofgod", '小林')); //返回的是新数组的长度
console.log("arr: "+arr); //原数组被改变，在原数组头部添加元素
console.log("arr.unshift(): "+arr.unshift()); //返回原数组的长度


/* 删除、数组元素
============================================================================================================
Array.pop()     Array.shift()
Array.pop()，无参数，每次从数组的尾部删除一个元素
Array.shift()，无参数，每次从数组的头部删除一个元素
二者的返回值都是：被删除的元素
============================================================================================================
 */
console.log("arr.pop(): "+arr.pop()); //返回从数组尾部被删除的元素
console.log("arr: "+arr); //原数组被改变
console.log("arr.shift(): "+ arr.shift()); //返回从头部被删除的元素
console.log("arr: "+arr); //原数组被改变