
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
function removeBook(title) {

    let index = myLibrary.findIndex(x => x.bookName === title);
    myLibrary.splice(index, 1);
    removeCard(title);
};


// add book card with information to DOM
book.prototype.addBookCard = function() {

    const divContainer = document.getElementById("bookCards");
    const newCard = document.createElement('div');
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

    const editButton = document.createElement('button');
    editButton.classList.add("editButton");

    if (this.hasRead) {
        newCard.classList.add("readBook");
        editButton.textContent = "Read";
        userActions.appendChild(editButton);
    } else {
        newCard.classList.add("notReadBook")
        editButton.textContent = "Not Read";
        userActions.appendChild(editButton);
    };

    editButton.addEventListener("click", () => {

        let title = this.bookName;
        changeRead(title);
        let text = editButton.textContent;
        changeReadText(text, title);
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    userActions.appendChild(removeButton);

    removeButton.addEventListener("click", () => {

        let title = this.bookName;
        removeBook(title);
    });

    formCount--;
}; 

// change hasRead status
function changeRead(title) {

    const getCard = document.getElementById(title);
    if (getCard.className === "readBook") {
        getCard.classList.remove("readBook");
        getCard.classList.add("notReadBook");
    } else {
        getCard.classList.remove("notReadBook");
        getCard.classList.add("readBook");
    };
};

// change text in editButton
function changeReadText(text, title) {

    // const getCard = document.getElementById("#"+title)
    const cardContainer = document.querySelector(`#${title}`);
    const actions = cardContainer.querySelector(".actions");
    const editButton = actions.querySelector(".editButton");
    if (text === "Read") {

        editButton.textContent = "Not Read"
    } else {
        editButton.textContent = "Read"
    };
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

// get button elements, call functions when clicked, and ensure only one form can be opened at a time
const addBookButton = document.getElementById("addNewBook");

let formCount = 0;

addBookButton.addEventListener("click", () => {

    if (formCount != 0) {
        return alert("Only one book can be added at a time.");
    }
    formCount++;
    createForm();
    // createBook();
});

// create form so user can input information regarding book
function createForm () {

    const divContainer = document.getElementById("bookCards");
    const newCard = document.createElement('div');
    newCard.setAttribute("id", 'bookForm');

    divContainer.appendChild(newCard);

    const userForm = document.createElement("form");
    userForm.setAttribute("id", "bookData");
    userForm.setAttribute("onsubmit", "createBook(); return false");
    newCard.appendChild(userForm);

    const nameDiv = document.createElement("div");
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "bookName")
    nameInput.setAttribute("placeholder", "Book Name");
    nameInput.setAttribute("required", "");
    nameDiv.appendChild(nameInput);
    userForm.appendChild(nameDiv);

    const authorDiv = document.createElement("div");
    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("name", "Author")
    authorInput.setAttribute("placeholder", "Author");
    authorDiv.appendChild(authorInput);
    userForm.appendChild(authorDiv);

    const reviewDiv = document.createElement("div");
    const reviewInput = document.createElement("textarea");
    reviewInput.setAttribute("name", "Author")
    reviewInput.setAttribute("rows", "10");
    reviewInput.setAttribute("cols", "25");
    reviewInput.setAttribute("placeholder", "What do you think about this book?");
    reviewDiv.appendChild(reviewInput);
    userForm.appendChild(reviewDiv);
    
    const readDiv = document.createElement("div");
    const fieldset = document.createElement("fieldset");
    readDiv.appendChild(fieldset);

    const legend = document.createElement("legend");
    legend.textContent = "Have you read this book?"
    fieldset.appendChild(legend);

    const radioYes = document.createElement("input");
    const labelYes = document.createElement("label");
    radioYes.setAttribute("type", "radio");
    radioYes.setAttribute("id", "yes");
    labelYes.setAttribute("for", "yes");
    radioYes.setAttribute("name", "hasRead");
    radioYes.setAttribute("value", true);
    radioYes.setAttribute("required", "");
    labelYes.textContent = "Yes";
    fieldset.appendChild(labelYes);
    fieldset.appendChild(radioYes);

    const radioNo = document.createElement("input");
    const labelNo = document.createElement("label");
    radioNo.setAttribute("type", "radio");
    radioNo.setAttribute("id", "No");
    labelNo.setAttribute("for", "No");
    radioNo.setAttribute("name", "hasRead");
    radioNo.setAttribute("value", false);
    labelNo.textContent = "No";
    fieldset.appendChild(labelNo);
    fieldset.appendChild(radioNo);

    userForm.appendChild(readDiv);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Add Book!";
    userForm.appendChild(submitButton);

};

