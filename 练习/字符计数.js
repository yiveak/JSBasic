/* 
字符计数
你可以通过编写 "string"[N] ，来从字符串中得到第 N 个字符或字母。 
返回的值将是只包含一个字符的字符串（例如 "b" ）。 第一个字符的位置为零，这会使最后一个字符在 string.length - 1 。 
换句话说，含有两个字符的字符串的长度为2，其字符的位置为 0 和1。
编写一个函数 countBs ，接受一个字符串参数，并返回一个数字，表示该字符串中有多少个大写字母 "B" 。
接着编写一个函数 countChar ，和 countBs 作用一样，唯一区别是接受第二个参数，指定需
要统计的字符（而不仅仅能统计大写字母 "B" ）。并使用这个新函数重写函数 countBs 。 

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
*/

/* function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            count++;
        }
    }
    return count;
}
console.log(countBs("BBC")); */


function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

function countBs(str) {
    return countChar(str, 'B');
}
console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));