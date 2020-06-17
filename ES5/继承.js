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

// extends super(params)

class ITBook extends Book {
    constructor(title, pages, isbn, price) {
        super(title, pages, isbn);
        this.price = price;
    }
    printPrice() {
        console.log(this.price);
    }
}

let jsBook = new ITBook('JS', '666', '000000001', '$0.99')
console.log(jsBook.title);
jsBook.printPrice();