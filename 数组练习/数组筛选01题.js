/* 找出年龄大于18岁的用户
输出
[
    {age: 19, name:'Jack'},
    {age: 25, name:'David'}
]
 */
let arr = [{
        age: 19,
        name: 'Jack'
    },
    {
        age: 5,
        name: 'Apple'
    },
    {
        age: 12,
        name: 'Lynn'
    },
    {
        age: 25,
        name: 'David'
    }
];

/* // 1.
let ageOver18Users = arr.filter(item => item.age > 18);
console.log(ageOver18Users);
// console.log(typeof ageOver18Users); */

// 2. 编写函数filterAdult
function filterAdult(arr) {
    let newArr = [];
    arr.filter(function (item, index, array) {
        if (item.age >= 18) {
            newArr.push(item);
            /* console.log([item]);
            console.log(typeof [item]); */
        }
    });
    return newArr;
}
console.log(filterAdult(arr));
// filterAdult(arr);