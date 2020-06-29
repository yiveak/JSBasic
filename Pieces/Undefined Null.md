# Undefined Null

**null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。**

```javascript
typeof undefined; // undefined
typeof null; // object

Number(undefined); // NaN
Number(null); // 0

undefined == null; // true
undefined === null; // false

if (!undefined) 
    console.log('undefined is false');
// undefined is false

if (!null) 
    console.log('null is false');
// null is false

/* 隐式地给undefined、null进行了Boolean()类型转换 */
// Boolean(undefined); // false
// Boolean(null); // false
```



**Undefined**

> **只有一个值，即为undefined**。
>
> 得到undefined的几种情形：
>
> > 1. 声明了一个变量，但未赋值，那么这个变量的值即为undefined。
> >
> >    ```javascript
> >    let x;
> >    console.log(x); // undefined
> >    console.log(x === undefined); // true
> >    ```
> >
> >    那么显式地把一个变量初始化为undefined？Yes.
> >
> >    ```javascript
> >    let x = undefined;
> >    console.log(x === undefined); // true
> >    console.log(x); // undefined
> >    let y = 0;
> >    y = x;
> >    console.log(y); // undefined;
> >    ```
> >
> > 2. 对未定义的变量，执行`typeof` 也返回undefined。
> >
> >    ```javascript
> >    console.log(typeof x); // undefined
> >    
> >    /* 这里不使用===来进行判断，因为对于未声明的变量，只能执行一项操作，即typeof，其他操作都返回报错 */
> >    ```
> >
> > 3. 如果一个函数未使用return指定返回值，那么其返回值默认是undefined。
> >
> >    ```javascript
> >    function sum(a, b){
> >        a + b
> >    }
> >    sum(2, 4); // undefined
> >    ```
> >
> > 4. 如果一个需要传入参数的函数未传入相应的参数，那么该函数的返回值默认是undefined。
> >
> >    ```javascript
> >    function max(a, b, c){
> >        return a>b?a>c?a:c:b>c?b:c;
> >    }
> >    console.log(max(3, 6)); // undefined
> >    ```
> >    
> > 5. 如果一个对象的属性未赋属性值，则其值为undefined。
> >
> >    ```
> >    let obj = {};
> >    console.log(obj.name);
> >    ```
> >
> >    
>
> **全局属性 window.undefined**
>
> 由上可知，无论是否声明了一个变量，或者未初始化，都可以给该变量赋值为undefined。这里用于赋值的undefined不是一个值，而是一个属性名，undefined是全局对象的一个属性。或者说，这个undefined是全局作用域的一个变量，即`window.undefined`，而这个`window.undefind` 属性的值就是前面所说的原始值undefined。`let x = undefined;` 可以被视为将`window.undefined`这个属性的属性值undefined，赋给了x。在多数情况下，指的都是`window.undefined` ，而原始值undefined多数情况只存在于文档或规范中，不存在于JS代码中。
>
> ```javascript
> console.log(window.undefined); // 原始值undefined
> ```
>
> `window.undefined` 在ES5之后，是一个不可写、不可配置的数据属性，其值永远是undefined。
>
> **局部属性 undefined**
>
> 因为undefined并不是一个保留字，这意味着：可以将undefined作为一个局部变量来使用，就如同局部作用域内的普通变量一样，可以对赋予任何值。
>
> ```javascript
> (function(){
>     let undefined = 'hello';
>     console.log(undefined); // 'hello'
>     console.log(typeof undefined); // string
> })()
> ```
>
> **undefined判断**
>
> > 判断一个变量的值是否为undefined：
> >
> > 1. `===` ，如果使用`==` ，那么`undefined == null` 是为true。
> > 2. `typeof` ，包括对于未声明的变量可以执行该操作。
>
> **void 0**
>
> ```
> The void operator evaluates the given expression and then returns undefined.
> void运算符对给定表达式求值，然后返回undefined
> 即表示，无论表达式的值是多少，返回的结果都是undefined
> 
> let x;
> console.log(x === void 0); // true
> ```



**Null**

> **只有一个值，即为null**。
>
> ```
>console.log(typeof null); // object
> ```
> 
> **null判断** ：`===`
>
> ```javascript
>let a = null;
> console.log( a === null ); // true;
> 
> if(b === null){
> console.log("b中未保存对象引用"); // Error，b is not defined
> }
>  
> if(c == null){
> console.log('未声明的变量，如果跟null进行不严格相等比较，那么先报错。'); // Error, c is not defined
> }
>  
> let d;
> if( d == null ){
> console.log('声明但未初始化的变量，其值为undefined，跟null进行不严格相等比较，其值为true。');
> }
>  ```
> 
> **null使用**
>
> > 1. 如果一个变量将要保存一个对象，那么在将其初始化时可以赋值为null，即`let/const 变量名 = null;`
>>
> > 2. 当一个变量不再使用时，最好将其设置重设为null，即解除引用。解除一个值的引用并不意味着自动回收值所占用的内存。解除引用，让值脱离执行环境，以便垃圾收集器在下次运行时将其回收，也有助于消除有可能出现的循环引用的情况，这一做法适用于大多数全局变量、全局对象的属性。局部变量在离开自身的执行环境时(函数执行完后)就自动被解除引用。
> >
> > 3. 作为对象原型链的终点。
> >
> >    ```javascript
> >    Object.getPrototypeOf(Object.prototype); // null
> >    ```



**参考链接**

[JavaScript深入理解之undefined与null][https://juejin.im/post/5aa4f7cc518825557e780256]

[undefined与null的区别][https://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html]

