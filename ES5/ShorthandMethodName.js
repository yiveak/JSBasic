// 简写方法名 shorthand method name
// 可以在对象中像属性一样声明函数
const hello = {
    name: "Eve",
    printHello() {
        console.log(`Hello, ${this.name}`);
    }
}
hello.printHello();

const hello = {
    name: "Villanelle",
    printHello: function printHello() {
        console.log('Hello, ' + this.name);
    }
};
hello.printHello();