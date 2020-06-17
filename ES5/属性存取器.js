// get() set()

class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}

let lotrChar = new Person('Frodo');
console.log(lotrChar.name); // 'Frodo'
lotrChar.name = 'Gandalf';
console.log(lotrChar.name); // 'Gandalf'
lotrChar._name = 'Sam'; // 并非是真正的私有属性，仍然可以被引用
console.log(lotrChar.name); // 'Sam'