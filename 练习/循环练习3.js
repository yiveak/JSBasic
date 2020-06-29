/* 
棋盘：
编写一个程序，创建一个字符串，用于表示 8×8 的网格，并使用换行符分隔行。网格中的每个位置可以是空格或字符 "#" 。
这些字符组成了一张棋盘。将字符串传递给 console.log 将会输出以下结果：
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
当程序可以产生这样的输出后，请定义绑定 size=8 ，并修改程序，使程序可以处理任意尺寸
（长宽由 size 确定）的棋盘，并输出给定宽度和高度的网格。
*/

// 8x8棋盘
/* for( let i = 0; i < 8; i++ ){
    if(i%2==0){
        // console.log(' # # # #');
        let str = ' #'
        for(let j = 0; j < 2; j++){
            str += str;
        }
        console.log(str)
    }else{
        // console.log('# # # #');
        let str = '# '
        for(let j = 0; j < 2; j++){
            str += str;
        }
        console.log(str);
    }
}
 */

// 封装成函数
/* function printChessBoard(size) {
    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) {
            let str = ' #'
            // 判断条件应该是 字符串的长度小于棋盘的长度
            for (let j = 0; str.length < size; j++) {
                str += str;
            }
            console.log(str)
        } else {
            let str = '# '

            for (let j = 0; str.length < size; j++) {
                str += str;
            }
            console.log(str);
        }
    }
}
printChessBoard(8);
printChessBoard(16);
 */

// 提取公共的部分，重新封装
function printLine(str, size) {
    for (let j = 0; str.length < size; j++) {
        str += str;
    }
    console.log(str)
}

function printChessBoard(size) {
    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) {
            printLine(' #', size);
        } else {
            printLine('# ', size);
        }
    }
}
printChessBoard(8);
printChessBoard(16);

console.log('\n');
// 原答案
let size = 16;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        // 妙啊
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);