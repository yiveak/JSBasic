/* find() findIndex() 
============================================================================================================
arr.find(function(item, index, array){ //依次对数组中的每个元素调用该函数
    //如果返回true，则停止迭代，并且返回item
    //对于falsy，则返回undefined
});
找到具有特定条件的对象 针对数组的元素是对象的话 find()方法非常有用

arr.findIndex() 是返回的找到元素的索引，而不是元素本身。如果未找到，则返回-1
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

//找到id是2的用户的名字
arr.find(function (item, index, array) {
    //这里的item是一个对象 Object
    //如何获取对象的属性值？objectName.propertyName or objectName[propertyName]
    if (item.id == 2) {
        console.log(item.name);
    }
});
//ES6
let user = arr.find(item => item.id == 3);
console.log(user.name);

/* 
在上述的例子中，给arr.find()传了一个单参数函数 --- item => item.id == 2 ，这很典型，并且find()方法的其他参数很少使用。
*/


let index = arr.findIndex(item => item.id == 2);
console.log(index);
console.log(arr.findIndex(item => item.id == 4));