# TDZ 暂时性死区

> TDZ：**Temporal Dead Zone**，即一进入当前作用域，变量其实就已存在，但不能访问获取，只有等到声明变量的那行代码出现，才能访问获取，否则在此之前尝试进行的访问获取，都会抛出Reference Error。
>
> ES6之前，JavaScript的scope2种：**全局作用域**、**局部(函数)作用域**。而ES2015(ES6)新增**块级作用域**，通过`let` 、`const` 定义块级作用域。
>
> * 通过 `let` 定义的变量、`const` 定义的常量，如果在其变量声明前进行获取访问，则抛出：Reference Error，在语法上称为"TDZ"。
> * 通过 `var` 定义的变量，如果在其变量声明前进行获取访问，则得到undefined。
>
> ```javascript
> console.log(a); // Reference Error 暂时性死区 块级作用域 变量不提升
> let a;
> 
> console.log(b); // undefined
> var b;
> 
> var c = 2;
> (function(){
>     c = 11;
>     console.log(c); // ReferenceError: Cannot access 'c' before initialization
>     let c;
> })()
> // c跟当前的块级作用域绑定，不受外部全局变量c的影响，同时let无变量提升，所以在let声明这个变量前尝试赋值是非法的。
> ```
>
> ES6规定的暂时性死区、`let`  和`const` 不变量提升，是为了减少运行时错误，防止在变量声明前就使用这个变量。
>
> **typeof 死区陷阱**
>
> ```javascript
> typeof x;
> let x; 
> // Reference Error
> typeof y; // undefined
> ```
>
> **函数传参的死区陷阱**
>
> ```javascript
> (function sum(a = b, b = 1){
>     return a + b; // Reference Error
> })()
> 
> (function sum(a = 2, b = a){
>     return a + b; // 4
> })()
> ```



**参考链接**

[ES6中let暂时性死区详解][https://segmentfault.com/a/1190000015603779]

[理解ES6中的TDZ（暂时性死区）][https://juejin.im/post/5c309d41f265da6112052a39]

[有赞: 介绍暂时性死区(一面) #12][https://github.com/frontend9/fe9-interview/issues/12]