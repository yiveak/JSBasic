# JSBasic

JavaScript：控制网页内容，给网页增加动态效果，实现用户跟浏览器的交互。

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

   通常放置位置：`<body>`标签的最后

## 变量

存储操作数据的”容器“，根据变量名获取到”容器“内的数据。

* 变量的声明——var
* 变量的声明及初始化赋值
* 多个变量的声明赋值

变量名的命名规则

* 除了以字母、下划线开头，$也包括。
* 驼峰命名法：`var bigNumber=10;`
* 大小写敏感



## 数据类型

6种：

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

4. Null

5. Undefined

6. Object

NaN: not a number，与任何值都不等，包括他本身

所以，通过`isNaN()`验证其他值是不是、不是一个数值。



获取数据类型——`typeof()`

转义字符——`\`

字面量，直接量，固定值，直白地表示出数据内容



### 数据类型转换

1. 转换成Number
   * `parseInt()`
   * `parseFloat()`
   * `Number()`——严格地
     如果要转换的字符串中有任一非数值字符，则返回NaN
2. 转换成String
   * `toString()`
   * `String()`
     可适用于undefined, null
3. 转换成Boolean
   * `Boolean()`
     0、null、undefined、NaN转换后的值为：false，其他true。

## 操作符、操作数、表达式

操作符、运算符——operator

1. 算术运算符

   * 一元运算符
     * ++, --
   * 二元运算符
     * +, -, *, /, % 
   * 三元运算符

2. 逻辑运算符

   * 逻辑与
   * 逻辑或
   * 逻辑非

3. 关系运算符（比较运算符）

   * \>, \>=, <, <=, ==, !=
   * ===, !==：包括值、类型的比较

4. 赋值运算符

   * =, +=, -=, *=, /=, %=

   >运算符的优先级

操作数——operation

表达式：由操作数、操作符组成的式子，会有值。