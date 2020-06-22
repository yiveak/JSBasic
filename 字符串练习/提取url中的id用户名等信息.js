let url = 'https://www.xxx.com/directory/myFollow?id=2020&username=John&sex=male&age=25'

let arr = url.split('?');
// console.log(arr); // ['https://www.douyu.com/directory/myFollow', 'id=21&username=NNN&sex=male&age=25']
let str = arr[1];
// console.log(str); // 'id=21&username=NNN&sex=male&age=25'
let resultArr = str.split('&');
// console.log(resultArr); // [ 'id=21', 'username=NNN', 'sex=male', 'age=25' ]
let obj = {};
for (let i = 0; i < resultArr.length; i++) {
    // console.log(resultArr[i]);
    let result = resultArr[i].split('=');
    // console.log(result);
    obj[result[0]] = result[1];
}
console.log(obj);