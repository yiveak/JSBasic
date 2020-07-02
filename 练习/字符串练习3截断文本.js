/* 
创建函数 truncate(str, maxlength) 来检查 str 的长度
如果超过 maxlength —— 应使用 "…" 来代替 str 的结尾部分，长度仍然等于 maxlength。
函数的结果应该是截断后的文本（如果需要的话）。
形如：
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
truncate("Hi everyone!", 20) = "Hi everyone!"
*/
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength - 1);
        str = str.concat('...');
    }
    return str;
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

// 原答案
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}