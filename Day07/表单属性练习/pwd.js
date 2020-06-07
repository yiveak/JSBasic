alert("实现：密码框输入内容的显示与隐藏");

var btn = document.querySelector('button');
var input = document.querySelector('input')

var flag = 0;
btn.onclick = function (){
    if(flag == 0){
        input.type = 'text';
        flag = 1;
    }else {
        input.type = 'password';
        flag = 0;
    }
}