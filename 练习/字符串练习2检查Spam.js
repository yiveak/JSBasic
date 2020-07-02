/* 
写一个函数 checkSpam(str)，如果 str 包含 viagra 或 XXX 就返回 true，否则返回 false。
函数必须不区分大小写：
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/
function checkSpam(str) {
    str = str.toLowerCase();
    const spam1 = 'viagra'.toLowerCase();
    const spam2 = 'XXX'.toLowerCase();
    // orz
    if (str.indexOf(spam1) != -1 || str.indexOf(spam2) != -1) return true;
    return false;
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

// 原答案
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    // nice nice
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));