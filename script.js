const newBtn = document.querySelector('#newBtn');
const addBtn = document.querySelector('#addBtn');
const popUpForm = document.querySelector('#popUp');
const closeBtn = document.querySelector('#close');

newBtn.addEventListener('click', () => popUpForm.style.display = 'block');

addBtn.addEventListener('click', addBookToLibrary);

closeBtn.addEventListener('click', () => popUpForm.style.display = 'none');

// Constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value;
        this.read = form.read.checked;
    }
}

let myLibrary = [];
let newBook;

function addBookToLibrary() {
    event.preventDefault();
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

}

// DOM Elements
function domBook(item) {
    const library = document.querySelector('book-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    bookDiv.classList.add('.book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(author);

    pagesDiv.textContent = item.pages;
    pagesDiv.classList.add('pages');
    bookDiv.appendChild(pagesDiv);

    readBtn.classList.add('readBtn');
    bookDiv.appendChild(readBtn);
    if (item.read === false) {
        readBtn.textContent = 'Not Read';
    } else {
        readBtn.textContent = 'Read';
    }

    library.appendChild(bookDiv);
}