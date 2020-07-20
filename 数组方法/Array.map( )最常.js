/* 
============================================================================================================
当需要遍历一个数组时，forEach(), for, for..of
而当需要遍历一个数组的同时要返回每个元素的数据时，map()

The map() method creates a new array with the results of calling a function for every array element.
The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.
Note: this method does not change the original array.

Syntax: array.map(function(currentValue, index, arr), thisValue)

Array.map()返回一个新的数组，该数组的元素是为原数组的每个元素通过指定函数执行后得到的值，原数组并没有发生改变。
============================================================================================================
*/

// Get the full name for each person in the array:
let persons = [{
        firstname: "Malcom",
        lastname: "Reynolds"
    },
    {
        firstname: "Kaylee",
        lastname: "Frye"
    },
    {
        firstname: "Jayne",
        lastname: "Cobb"
    }
];

function getFullName(item) {
    // return item.firstname + ' ' + item.lastname;
    return [item.firstname, item.lastname].join(' ');
}

console.log(persons.map(getFullName));