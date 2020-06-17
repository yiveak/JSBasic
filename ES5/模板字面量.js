// 模板字面量：`${变量}` 使得创建字符串，不必再拼接值
// 多行字符串，直接识别Enter
const book = {
    name: 'JS'
}
console.log('正在阅读' + book.name + '\n新的一行');
console.log(`正在阅读${book.name}
新的一行`);