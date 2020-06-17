/* function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}
Book.prototype.printTitle = function(){
    console.log(this.title);
} */

// class ES2015的类是基于原型语法的语法糖
class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printISBN() {
        console.log(this.isbn);
    }
}

let book = new Book('Math', 180, 123456789);
console.log(book.title);
book.title = 'Physics'
console.log(book.title);
book.isbn = 987654321;
book.printISBN();