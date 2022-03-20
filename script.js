
// create array to store book data and create initial book object
let myLibrary = [];

function book(name, author, review, hasRead) {

    this.name = name;
    this.author = author;
    this.review = review;
    this.hasRead = hasRead;
};

book.prototype.addBook = function() {

    
    myLibrary.push(this);
    showBooks(myLibrary);
};

book.prototype.removeBook = function() {

    let index = myLibrary.findIndex(x => x.name === this.name);
    myLibrary.splice(index, 1);
};


// add book card with information to DOM
book.prototype.addBookCard = function() {

    const divContainer = document.getElementById("bookCards");
    const newCard = document.createElement('div');
    newCard.classList.add("book");

    divContainer.appendChild(newCard);

    const bookName = document.createElement('div');
    bookName.classList.add("nameRow");
    bookName.textContent = this.name;
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

    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    userActions.appendChild(editButton);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    userActions.appendChild(removeButton);

    if (this.hasRead) {
        newCard.classList.add("hasRead");
    };
}; 

// iterate through myLibrary array and display book cards on page
function showBooks(myLibrary) {

    for (i = 0; i < myLibrary.length; i++) {

        myLibrary[i].addBookCard();
    }
}; 