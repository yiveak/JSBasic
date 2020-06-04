# JSBasic

JavaScript：描述网页的行为。

特点：脚本语言、动态的、弱类型、面向对象

JavaScript控制台（F12---Console）：可以直接输入JavaScript代码并运行出结果——简单实用的调试手段。

## JavaScript的组成

1. ECMAScript——JavaScript语法规范

2. DOM——Docment Object Model，文档对象模型

3. BOM——Browser Object Model，浏览器对象模型

   > DOM, BOM——WebAPI
   >
   > DOM：操作页面元素的API
   >
   > BOM：操作浏览器功能的API



JavaScript写入位置：

1. HTML标记标签内，或者说是行内

   ```html
   <input type="button" value="confirm" onclick="alert('Hello, world.')" />
   ```

   

2. `<script>`标签内，在`<head>`标签中的`<script>`标签中

   ```html
   <head>
       <script>
       	alert("Hello, world!");
       </script>
   </head>
   ```

   

3. 外部JavaScript文件引入——该`<script>`标签中不可再写任何JS代码

   ```html
   <script src="file.js"></script>
   ```

   通常放置位置：`<body>`标签的最后。

## 变量

注意：***JS中变量声明时并不声明变量的数据类型。***

存储操作数据的”容器“，根据变量名获取到”容器“内的数据。

* 变量的声明——var
* 变量的声明及初始化赋值
* 多个变量的声明赋值

变量名的命名规则

* 除了以字母、下划线开头，**$也包括**。
* 驼峰命名法：`var bigNumber=10;`
* 大小写敏感



## 数据类型

JavaScript分为2类数据类型：原始类型(primitive type)、对象类型(object type)。总共7种

### 原始类型

1. Number

2. String
   通过`.length`获取字符串的长度

   ```html
   <script>
   	var str="abc";
       console.log(str.length);
   </script>
   ```

   通过`+`拼接字符串

   * 只要有一个是字符串，则为字符串拼接功能
   * 只有都是数字，才进行加的算术运算

   ```html
   <script>
       console.log("a"+"b"+"c");
   </script>
   ```

3. Boolean

4. Symbol(primitive data type)

#### 2个特殊的原始值

通常分别代表了各自特殊类型的唯一的成员

1. Null
2. Undefined



### 对象类型

对象：属性(property)的集合，每个属性都由”名/值对“构成。

* ”名/值对“中的值可以是：原始值、对象。
* 特殊的对象：全局对象。

1. Object

NaN: not a number，与任何值都不等，包括他本身

所以，通过`isNaN()`验证其他值是不是、不是一个数值。





获取数据类型——`typeof()`

转义字符——`\`

字面量，直接量，固定值：程序中直接使用的数据值。



### 数据类型转换

1. 转换成Number
   * `parseInt()`
   * `parseFloat()`
   * `Number()`——严格地
     如果要转换的字符串中有任一非数值字符，则返回NaN
2. 转换成String
   * `toString()`——更常用的
   * `String()`——更保险的
     可适用于undefined, null
3. 转换成Boolean
   * `Boolean()`
     `0`、`''`、`null`、`undefined`、`NaN`、`false`转换后的值均为：false，其他true，比如：`[]`、`{}`。



### 【隐式类型转换】

参考链接：[Javascript 隐式类型转换，一篇就够了！](https://chinese.freecodecamp.org/news/javascript-implicit-type-conversion/)

#### 数学运算符中的类型转换

>  ***因为JS中并没有类型声明，这意味着任意2个变量或字面量，都可以做加减乘除——弱类型的体现***

##### 1. 减、乘、除

对各种**非`Number`类型**的进行减、乘、除时，**先将其转换成`Number`类型**

```javascript
1 - true //先将true转换成数字1，然后1 - 1，即结果为0
1 - null //先将null转换成数字0，然后1 - 0，即结果为1
1*undefined //将undefined转换成数字是NaN，然后1*NaN，即结果为NaN
2*['5'] //先将['5']拆箱得到'5'，然后'5'转换成数字5，所以2*5，结果为10
```

| 实数 | undefined | NaN  | null            | ture   | false           |
| ---- | --------- | ---- | --------------- | ------ | --------------- |
| 减   | NaN       | NaN  | 实数-0=实数     | 实数-1 | 实数-0          |
| 乘   | NaN       | NaN  | 实数*0=0        | 实数*1 | 实数*0          |
| 除   | NaN       | NaN  | 实数/0=Infinity | 实数/1 | 实数/0=Infinity |

```javascript
NaN*NaN //NaN
undefined*undefined //NaN
undefined*NaN //NaN
undefined/null //NaN
null-true //-1, 
false+true //1
true+true //2
false-null //0
```



##### 2. 特殊的加法

以下3种规则，优先级由高到低：

* 当一侧为`String`类型，则被识作字符串拼接，即将另一侧的转换成字符串类型。
* 当一侧为`Number`类型，另一侧为原始类型(`null`、`undefined`)，则将原始类型转换成`Number`类型。
* 当一侧为`Number`类型，另一侧为引用类型(`[]`、`{}`)，则将引用类型和`Number`类型转换成字符串后拼接。

```javascript
123+'123' //字符串'123123'，规则1
123+null //规则2，将null转换成数字0，即123+0，结果为数值123
123+true //规则2，将true转换成数字1，即123+1，结果为数值124
123+{} //规则3，将{}转换成字符串'[object Object]'，将123转换成'123'，拼接起来，得到的结果为字符串：123[object Object]
```



#### 逻辑语句中的类型转换

当使用`if`、`while`、`for`语句时，条件表达式的值为布尔值，即`Boolean`。

##### 1. 单个变量

:star:如果只有单个变量，则先将变量转换成布尔值

Tips：只有`0`、`''`、`null`、`undefined`、`NaN`、`false`转换后的值均为：false，其他true，比如：`[]`、`{}`。

##### 2. 使用==比较的5条规则

根据`==`两侧的数据类型，总结的5条规则：

* 规则1：`NaN`和其他任何数据类型比较，永远返回的是false（包括他自己本身）。

* 规则2：`Boolean`和其他任何数据类型比较时，`Boolean`首先被转换成`Number`类型。

* 规则3：`String`和`Number`比较，先将`String`类型转换成`Number`类型。

* 规则4：`null`==`undefined`比较结果是`true`，除此之外，`null`、`undefined`和其他任何数据类型比较的值都为`false`。

* 规则5：**原始类型**和**引用类型**做比较时，引用类型会依照`ToPrimitive`规则转换成原始类型。

  > `ToPrimitvie`规则：引用类型--->原始类型
  >
  > * 遵循先`valueOf`后`toString()`的模式，得到一个原始类型

  如果无法得到一个原始类型，则抛出`TypeError`。

#### 类型转换表

| 数据类型   | 值             | toBoolean | toNumber       | toString                |
| ---------- | -------------- | --------- | -------------- | ----------------------- |
| Boolean    | true           | true      | 1              | "true"                  |
| Boolean    | false          | false     | 0              | "false"                 |
| Number     | 123            | true      | 123            | "123"                   |
| Number     | Infinity       | true      | ***Infinity*** | "Infinity"              |
| Number     | 0              | false     | 0              | "0"                     |
| **Number** | ***NaN***      | false     | NaN            | "NaN"                   |
| String     | ""             | false     | ***0***        | ""                      |
| String     | "123"          | true      | 123            | "123"                   |
| String     | "123xyz"       | true      | NaN            | "123xyz"                |
| String     | "abc"          | true      | NaN            | "abc"                   |
| **Object** | ***null***     | false     | ***0***        | "null"                  |
| Undefined  | undefined      | false     | NaN            | "undefined"             |
| Function   | function(){}   | true      | NaN            | "function(){}"          |
| Object     | {}             | true      | NaN            | ***"[object Object]"*** |
| Array      | ["abc"]        | true      | NaN            | "abc"                   |
| Array      | ["123"]        | true      | 123(拆箱)      | "123"                   |
| Array      | ["123", "abc"] | true      | NaN            | "123abc"                |





## 操作符、操作数、表达式

操作符、运算符——operator

1. 算术运算符

   * 一元运算符
     * ++, --
   * 二元运算符
     * +, -, *, /, % 
   * 三元运算符

2. 逻辑运算符

   * 逻辑与 `&&`
   * 逻辑或`||`
   * 逻辑非`!`

3. 关系运算符（比较运算符）

   * \>, \>=, <, <=, ==, !=F
   * ===, !==：包括值、类型的比较

4. 赋值运算符

   * =, +=, -=, *=, /=, %=

   >运算符的优先级

操作数——operation

表达式：由操作数、操作符组成的式子，会有值。





## Objcts

JavaScript variable are **containers** for data values. 

**Objects are variables too**, they can contain many values.

 Think of an object as a list of  values: **name: value** pairs --- 名值对。

`name : value` 是对象的属性以及属性值。

JavaScript objects are containers for **named values**.

|     name      |         value         |
| :-----------: | :-------------------: |
| Property 属性 | Property Value 属性值 |
|     name      |      John Smith       |
|      sex      |         male          |
|      age      |          25           |
|    height     |          180          |



### Access properties 

获取属性的两种方式：

```javascript
objectName.propertyName
//or
objectName['propertyName']
```

```javascript
var person = {
    name: "John Smith", //注意：尾部逗号分隔
    sex: "male",
    age: 25,
    height: 180, //注意：最后一个属性的尾部不必写逗号
    run:function (){
        alert("Every Wednesday!");
    }
}; //别忘记这里的分号

//objectName.propertyName;
var x = person.name;
//objectName['propertyName']
var y = person['age'];

var z = person['run']();
//or var z = person["run"]();


//注意：alert() function只接收一个参数，所以下面后面的Age不能输出
alert("Name: "+x,"Age: "+y);

//正确形式
alert("Name: "+x);
alert("Age: "+y);
```

JavaScript's built-in **length** ***property*** is used to count the number of characters in a property or string.

```javascript
//输出指定属性的属性值字符串长度，即该具体字符串里字符的个数
//count the number of characters in an object's property
alert(person.sex.length);
```



### Object Methods

An object **method** is a **property** that contains a **function definition**.

> 一个对象的方法是一个属性，这个属性里包含了一个函数定义。

***Methods are functions that are stored as object properties.***

> method是一个funciton，这个function以对象的属性作为存储。
>
> method是将对象属性作为存储的function。

#### Access an object method

```javascript	
objectName.methodName();
```

eg.

```javascript
//output data
document.write("This is some text.");
//The write() function is actually a method of the document object.
```







### The Object Constructor

对象构造函数

***The Standard way to create an "object type" is to use an object constructor function.***

```javascript
function cat(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
}
//function (cat) is an object constructor, which takes parameters and assigns them to the object properties.
```

The **this** keyword refers to the **current object** , and **its value cannot be changed**.



创建对象的三种方式：

1. **调用系统的构造函数** 

   ```javascript
   //var 变量名 = new Object(); Object是系统的构造函数
   //实例化对象
   var obj = new Object();
   //对象有特征：属性和行为————方法
   
   //添加属性————对象名.对象属性名 = 对象该属性名的属性值 ————name: value 名值对
   obj.name = "The Doctor";
   obj.age = 1000000;
   obj.sex = "other";
   
   //添加方法————对象.属性名 = 函数
   obj.escape = function (){
       alert("LISTEN");
   };
   
   //获取指定对象的某个属性的属性值
   alert("My name is "+obj.name);
   
   //调用指定对象某个属性的行为？
   //调用指定对象的指定方法
   obj.escape();
   ```

   

2. **自定义构造函数**（工厂模式）

3. **字面量的方式** ---- the object literal( or initializer) syntax

   This allows you to create only **a  single object**.

   ```javascript
   var dog = {
       name: "cookie",
       age: 5,
       color: brown,
       size: big
   }
   ```











































### JavaScript提供三种类型的popup box

* **Alert()** ---function

  > An alert box is used when you want to ensure that information gets through to the user. When an alert box pops up, the user **must click OK to proceed**.
  >
  > The alert **function** takes **a single parameter**, which is the text displayed in the popup box.
  >
  > ```javascript
  > alert("Do you really want to leave this page?");
  > alert("1\n+\n2\n=\n3");
  > ```
  >
  > 

* **Prompt()** ---method

  > A prompt box is often used to have the user input a value before entering a page. 获取用户的输入
  >
  > * prompt  is for getting input from the user.
  >
  > 用户在输入数据后必须点击确定或者取消以进行下一步的进程。
  >
  > * If the user clicks OK, the box **return the input value**。
  > * 如果用户不输入任何数据，直接点击取消，那么the box **returns null**。
  >
  > The prompt() **method** takes **two parameters** : //注意：prompt()是method，而不是function。
  >
  > * 第一个是**the label**，which you want to display in the text box. //通常写第一个参数就可
  >
  > * 第二个是**a default string** to display in the text box(**optional**).
  >
  >   ```javascript
  >   var getPhoneNumber = prompt("Please enter your phone number","+1");
  >   alert("You phone number is: "+getPhoneNumber);
  >   ```
  >
  > 注意：Do not overuse this method, because it prevents the user from accessing other parts of the page until the box is closed.

* **Confirm** --- method , return true or false.

  > A confirm box is often used to have the user verify or accept something. /让用户确认其输入或者是accept something.
  >
  > 同样地，也必须要求用户在输入后点击确定或者取消，或不输入任何数据点击取消，以进行一下步的进程。
  >
  > * If the user clicks OK, the box returns **true** 
  > * if the user clicks Cancel, the box return **false**.
  >
  > ```javascript
  > var result = confirm("Do you really want to leave this page?")
  > if (result==true){
  >     alert("Thanks for visiting.");
  > } else {
  >     alert("Thanks for staying with us.");
  > }
  > 
  > ```
  >
  > 也是同样地，不能overuse this method，因为这会阻止用户获取页面上的其他部分，直到关闭这个box。

