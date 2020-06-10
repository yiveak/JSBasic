/* filter() 匹配更多
============================================================================================================
find()搜索的是：使函数返回返回true的第一(单个)元素。
如果需要匹配的有更多，可以使用filter()方法。--- 返回的是所有匹配元素组成的数组
arr.filter(fn);
arr.filter(function(item, index, array){
    //如果true，item被push()到results，迭代继续
    //如果一个都没有匹配到，那么返回空数组
});
============================================================================================================
*/

let arr = [{
        id: 1,
        name: "john"
    },
    {
        id: 2,
        name: "adam"
    },
    {
        id: 3,
        name: "peter"
    }
];
//返回前2个用户的数组
let someUser = arr.filter(function (item, index, array) {
    if (index < 2) {
        return item;
    }
});
console.log(someUser);
console.log(someUser.length);

//ES6
console.log(arr.filter(item => item.id < 3))