/* 
function checkAge(age){
    if(age>18){
        return true;
    }
    return confirm('Do you have your parents permission to access this page?')
}
使用 ？或者 || 重写函数
*/

function checkAge(age) {
    return age > 18 ? true : confirm('Do you have your parents permission to access this page?');
}
checkAge(18);

function checkAge(age) {
    return (age > 18) || confirm('Do you have your parents permission to access this page?');
}