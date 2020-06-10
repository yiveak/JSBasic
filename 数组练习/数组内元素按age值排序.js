/* 
sortAge([
    {age: 19, name:'Jack'},
    {age: 5, name:'Apple'},
    {age: 12, name:'Lynn'},
    {age: 25, name:'David'}
]);
// 输出
[
    {age: 5, name:'Apple'},
    {age: 12, name:'Lynn'},
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

let newArr = arr.sort(function (a, b) {
    return a.age - b.age;
});
console.log(newArr);