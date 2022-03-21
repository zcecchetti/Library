
// create array to store book data and create initial book object
let myLibrary = [];

function book(bookName, author, review, hasRead) {

    this.bookName = bookName;
    this.author = author;
    this.review = review;
    this.hasRead = hasRead;
};

// add book to array
book.prototype.addBook = function() {
    
    myLibrary.push(this);
    let index = myLibrary.findIndex(x => x.bookName === this.bookName);
    myLibrary[index].addBookCard();
};

// removes book from array
function removeBook() {

    title = prompt("what is the book name? ")
    let index = myLibrary.findIndex(x => x.bookName === title);
    myLibrary.splice(index, 1);
    removeCard(title);
};


// add book card with information to DOM
book.prototype.addBookCard = function() {

    const divContainer = document.getElementById("bookCards");
    const newCard = document.createElement('div');
    newCard.classList.add("book");
    newCard.setAttribute("id", this.bookName);

    divContainer.appendChild(newCard);

    const bookName = document.createElement('div');
    bookName.classList.add("nameRow");
    bookName.textContent = this.bookName;
    newCard.appendChild(bookName);

    const authorName = document.createElement('div');
    authorName.classList.add("authorRow");
    authorName.textContent = this.author;
    newCard.appendChild(authorName);

    const userReview = document.createElement('div');
    userReview.classList.add("review");
    userReview.textContent = this.review;
    newCard.appendChild(userReview);

    const userActions = document.createElement('div');
    userActions.classList.add("actions");
    newCard.appendChild(userActions);

    if (this.hasRead) {
        newCard.classList.add("hasRead");
        const editButton = document.createElement('button');
        editButton.textContent = "Read";
        userActions.appendChild(editButton);
    } else {
        const editButton = document.createElement('button');
        editButton.textContent = "Not Read";
        userActions.appendChild(editButton);
    };

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    userActions.appendChild(removeButton);
}; 

// iterate through myLibrary array and display book cards on page
function showBooks(myLibrary) {


    for (i = 0; i < myLibrary.length; i++) {

        myLibrary[i].addBookCard();
    }
}; 

// creates new book object
let createBook = function() {

    bookName = prompt("name? ");
    author = prompt("author? ");
    review = prompt("what did you think of it?");
    hasRead = prompt("have you read this yet? ")

    const newBook = new book(bookName, author, review, hasRead)
    newBook.addBook();
}

// removes the card of an item that was deleted from the array
function removeCard(title) {

    const removeTitle = document.getElementById(title);
    const divContainer = document.getElementById("bookCards");
    divContainer.removeChild(removeTitle);
};