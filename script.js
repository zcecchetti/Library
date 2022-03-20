
let myLibrary = [];

function book(name, author, pageCount, hasRead) {

    this.name = name
    this.author = author
    this.pageCount = pageCount
    this.hasRead = hasRead
};

book.prototype.addBook = function() {

    
    myLibrary.push(this)
};

book.prototype.removeBook = function() {

    let index = myLibrary.findIndex(x => x.name === this.name)
    myLibrary.splice(index, 1)
};