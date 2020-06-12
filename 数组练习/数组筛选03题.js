//找出薪水大于5000的，并输出姓名
let arr = [{
        name: 'john',
        age: 26,
        salary: 3500
    },
    {
        name: 'alice',
        age: 35,
        salary: 5500
    },
    {
        name: 'dasha',
        age: 28,
        salary: 4500
    },
    {
        name: 'kenny',
        age: 24,
        salary: 6500
    },
    {
        name: 'zoe',
        age: 36,
        salary: 8700
    },
    {
        name: 'rick',
        age: 29,
        salary: 4800
    },
];

function filterSalaryOver5K(arr) {
    //通过一个新的数组存储需要输出的值
    let newArr = [];
    arr.filter(function (item, index, array) {
        if (item.salary > 5000) {
            newArr.push(item.name);
        }
    });
    return newArr;
}

console.log(filterSalaryOver5K(arr));