/* 
FizzBuzz
编写一个程序，使用 console.log 打印出从 1 到 100 的所有数字。
不过有两种例外情况：
当数字能被 3 整除时，不打印数字，而打印 "Fizz" 。
当数字能被 5 整除时（但不能被 3 整除），不打印数字，而打印 "Buzz" 。
当以上程序可以正确运行后，请修改你的程序，让程序在遇到能同时被 3 与 5 整除的数字时，打印出 "FizzBuzz" 。
*/

function print() {
    for (let i = 1; i < 101; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            console.log('FizzBuzz');
            continue;
        }
        if (i % 3 == 0) {
            console.log('Fizz');
            continue;
        }
        if (i % 5 == 0 && i % 3 != 0) {
            console.log('Buzz');
            continue;
        }
        
        console.log(i);
    }
}
print();


// 原答案
for (let n = 1; n <= 100; n++) {
    let output = "";
    // += 给空字符串赋值
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    // 短路运算 妙啊
    console.log(output || n);
}