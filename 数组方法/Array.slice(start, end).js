Array.slice()

/*
Array.slice(start, end) --- 对array中的一段元素做浅复制
[start, end)
end是可选的,默认值是array.length
如果参数中的任一个是负数,那么array.length会和它们相加,让它们成为一个非负数
如果start的值大于array.length,那么复制到的是一个新的空数组
*/

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log("arr.slice(-4, -1): " + arr.slice(-4, -1)); //arr.slice(-4, -1): b,c,d
//所以,console.log("arr.slice(-4, -1): "+arr.slice(1, 4));

//因为:如果两个参数中的任一个是负数,那么array.length会和它们相加,试图让它们成为非负数
console.log("arr.slice(-1, -4): " + arr.slice(-1, -4)); //空值, nothing
//所以, console.log("arr.slice(-1, -4): "+arr.slice(4, 1)); //空值, nothing