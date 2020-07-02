# Object

对象：用来存储 **键值对** 和更复杂的实体。

可以通过使用带有可选 **属性列表** 的花括号 `{…}` 来创建对象。一个属性就是一个键值对（“key: value”），其中键（`key`）是一个字符串（也叫做属性名），值（`value`）可以是任何值。

可以用下面两种语法中的任一种来创建一个空的对象（“空柜子”）：

```javascript
let user = new Object(); // “构造函数” 的语法
let user = {};  // “字面量” 的语法
```

**文本和属性**

> 将属性以键值对的形式放到 `{...}` 中。且每个属性以逗号分隔，同时列表中的最后一个属性也应以逗号结尾：
>
> 这叫做尾随（trailing）或悬挂（hanging）逗号。这样便于我们添加、删除和移动属性，因为所有的行都是相似的。
>
> ```javascript
> let user = {     // 一个对象
>   name: "John",  // 键 "name"，值 "John"
>   age: 30,        // 键 "age"，值 30
> };
> ```
>
> 使用 **点符号** 访问属性值：
>
> ```javascript
> console.log(user.name); // John
> console.log(user.age); // 30
> ```
>
> 属性的值可以是任意类型，也包括函数，或者子对象。以下加个布尔类型：
>
> ```javascript
> user.isAdmain = true;
> ```
>
> 可以用 `delete` 操作符移除属性：
>
> ```javascript
> delete user.age;
> console.log(user.age); // undefined
> console.log(user.age); // 其中无age这个键，无属性名为age的属性
> ```
>
> 也可以用 **多字词语** 来作为属性名，但必须给它们加上引号：
>
> ```javascript
> let user = {
>   name: "John",
>   age: 30,
>   "likes birds": true  // 多词属性名必须加引号
> };
> ```

**方括号**

> 使用 **`[]`** 访问属性值，方括号里面直接写属性的属性名，即键，属性名包裹在引号里面：
>
> ```javascript
> // object['key']
> console.log(user['age']);
> ```
>
> 对于多词属性，点操作就不能用了：
>
> ```javascript
> // 这将提示有语法错误
> user.likes birds = true
> ```
>
> 点符号要求 `key` 是有效的变量标识符。这意味着：不包含空格，不以数字开头，也不包含特殊字符（允许使用 `$` 和 `_`）。
>
> 有另一种方法，就是使用方括号，可用于任何字符串：
>
> ```javascript
> let user = {};
> 
> // 设置
> user["likes birds"] = true;
> 
> // 读取
> alert(user["likes birds"]); // true
> 
> // 删除
> delete user["likes birds"];
> ```
>
> 方括号同样提供了一种可以通过任意表达式来获取属性名的方法 —— 跟语义上的字符串不同 —— 比如像类似于下面的变量：
>
> ```javascript
> let key = "likes cats";
> 
> // 跟 user["likes cats"] = true; 一样
> user[key] = true;
> ```
>
> 在这里，变量 `key` 可以是程序运行时计算得到的，也可以是根据用户的输入得到的。然后我们可以用它来访问属性。这给了我们很大的灵活性。
>
> ```javascript
> let user = {
>   name: "John",
>   age: 30
> };
> 
> let key = prompt("What do you want to know about the user?", "name");
> 
> // 访问变量
> console.log( user[key] ); // John（如果输入 "name"）
> ```
>
> 点符号不能以类似的方式使用：
>
> ```javascript
> let user = {
>   name: "John",
>   age: 30
> };
> 
> let key = "name";
> alert( user.key ) // undefined
> ```



**计算属性**

> 在对象字面量中使用方括号。这叫做 **计算属性**。
>
> ```javascript
> let fruit = prompt("Which fruit to buy?", "apple");
> 
> let bag = {
>   [fruit]: 5, // 属性名是从 fruit 变量中得到的
> };
> 
> alert( bag.apple ); // 5 如果 fruit="apple"
> ```
>
> 计算属性的含义很简单：`[fruit]` 含义是属性名应该从 `fruit` 变量中获取。
>
> 所以，本质上，这跟下面的语法效果相同：
>
> ```javascript
> let fruit = prompt("Which fruit to buy?", "apple");
> let bag = {};
> 
> // 从 fruit 变量中获取值
> bag[fruit] = 5;
> ```
>
> 可以在方括号中使用更复杂的表达式：
>
> ```javascript
> let fruit = 'apple';
> let bag = {
>   [fruit + 'Computers']: 5 // bag.appleComputers = 5
> };
> ```
>
> **方括号比点符号更强大。它允许任何属性名和变量，但写起来也更加麻烦。所以大部分时间里，当属性名是已知且简单的时候，就是用点符号。如果我们需要一些更复杂的内容，那么就用方括号。**



**属性值简写**

> 在实际开发中，我们通常用已存在的变量当做属性名。
>
> 例如：
>
> ```javascript
> function makeUser(name, age) {
>   return {
>     name: name,
>     age: age,
>     // ……其他的属性
>   };
> }
> 
> let user = makeUser("John", 30);
> alert(user.name); // John
> ```
>
> 在上面的例子中，属性名跟变量名一样。这种通过变量生成属性的应用场景很常见，在这有一种特殊的 **属性值缩写** 方法，使属性名变得更短。
>
> 可以用 `name` 来代替 `name:name` 像下面那样：
>
> ```javascript
> function makeUser(name, age) {
>   return {
>     name, // 与 name: name 相同
>     age,  // 与 age: age 相同
>     // ...
>   };
> }
> ```
>
> 我们可以把属性名简写方式和正常方式混用：
>
> ```javascript
> let user = {
>   name,  // 与 name:name 相同
>   age: 30
> };
> ```



**属性名称限制**

> 属性名（key）必须是字符串或 Symbol（标识符的一种特殊类型）。其它类型将被自动地转化为字符串。
>
> **保留字段可以被用作属性名。**
>
> 正如我们所知道的，像 “for”、“let” 和 “return” 等保留字段不能用作变量名。
>
> 但是对于对象的属性，没有这些限制。任何名字都可以：
>
> 我们可以将任意字符串作为属性键（key），只有一个特殊的：`__proto__` 因为历史原因要特别对待。
>
> 比如，我们不能把它设置为非对象的值：
>
> ```javascript
> let obj = {
>   for: 1,
>   let: 2,
>   return: 3
> }
> 
> alert( obj.for + obj.let + obj.return );  // 6
> ```
>
> 我们可以将任意字符串作为属性键（key），只有一个特殊的：`__proto__` 因为历史原因要特别对待。
>
> 比如，我们不能把它设置为非对象的值：
>
> ```javascript
> let obj = {};
> obj.__proto__ = 5; // 分配一个数字
> alert(obj.__proto__); // [object Object] — 值为对象，与预期结果不同
> ```
>
> 我们从代码中可以看出来，把它赋值为 `5` 的操作被忽略了。
>
> 到目前为止，重要的是要知道，如果我们打算将用户提供的密钥存储在对象中，则 `__proto__` 的这种行为可能会成为错误甚至漏洞的来源。
>
> 因为用户可能会选择 `__proto__` 作为键，这个赋值的逻辑就失败了（像上面那样）。
>
> 有两个解决该问题的方法：
>
> 1. 修改对象的行为，使其将 `__proto__` 作为常规属性对待。我们将在 [原型方法，没有 __proto__ 的对象](https://zh.javascript.info/prototype-methods) 一章中学习如何进行修改。
> 2. 使用支持任意键的数据结构 [Map](https://zh.javascript.info/map-set)。我们将在 [Map and Set（映射和集合）](https://zh.javascript.info/map-set) 章节学习它。



