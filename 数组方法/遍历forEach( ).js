/* array.forEach()方法 允许为数组的每个元素都运行一个函数
============================================================================================================
arr.forEach(function(item, index, array){
    //...do something with every item
});
============================================================================================================
*/

//遍历输出数组的元素 ES6
let arr = ["bob", "john", "alex", "eve", "sam"];
arr.forEach(function(item, index, array){
    console.log(`${item} is at index ${index} in [${array}]`);
});
