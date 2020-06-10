/* Array.join() 数组转字符串
============================================================================================================
join()方法 将数组中的每个元素 通过指定的分隔符分割 然后放入一个字符串中
Array.join(separator) 参数separator是可选的
如果参数separator为空，则默认以逗号分割每个元素
如果参数separator为''，注意中间并无空格，则将每个元素直接连起来
如果参数separator为' '，则每个元素之间的分隔符就是一个空格 
============================================================================================================
 */

let arr = ['a', 'b', 'c', 'd', '9', '8', '7', '6'];
let str = arr.join();
console.log(arr.join()); //a,b,c,d,9,8,7,6
console.log(str); //string
console.log(arr.join(".")); //a.b.c.d.9.8.7.6


//要想做到无间隔的连接，我们可以使用空字符串作为separator。
//如果参数separator是''
console.log(arr.join('')); //abcd9876
console.log(arr.join("")); //abcd9876

//如果参数separator是' '
console.log(arr.join(" ")); //a b c d 9 8 7 6
console.log(arr.join(' ')); //a b c d 9 8 7 6