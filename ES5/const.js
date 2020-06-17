const jsFramework = {
    name: "Angular"
};
jsFramework.name = 'React';
console.log(jsFramework.name); //React

/* 
当遇到对象时，只读的const允许修改或重新赋值对象的属性
但，变量本身的引用不能被修改(内存中的引用地址仍旧固定不变)，也就是不能对这个变量重新赋值。
*/
// 对于非对象类型的变量(且使用const声明时)，不可以修改其变量的值，比如数字、字符串、布尔值
// 用const定义的变量是只读的，read-only，也就是常量。

// 如果尝试给jsFramework这个对象做以下修改，则抛出异常："jsFramework"is read-only or TypeError: Assignment to constant variable.
jsFramework = {
    name: "Vue"
};