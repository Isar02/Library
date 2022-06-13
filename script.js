const newBtn = document.querySelector('#newBtn');
const addBtn = document.querySelector('#addBtn');
const popUpForm = document.querySelector('#popUp');
const closeBtn = document.querySelector('#close');
const overlay = document.querySelector('#overlay');

newBtn.addEventListener('click', () => overlay.classList.add('active'));

newBtn.addEventListener('click', () => popUpForm.classList.add('active'));


addBtn.addEventListener('click', addBookToLibrary);

closeBtn.addEventListener('click', closePopUp);

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
    popUpForm.classList.remove('active');
    overlay.classList.remove('active');
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    storeData();
    render();
    form.reset();
}

function closePopUp() {
    popUpForm.classList.remove('active');
    overlay.classList.remove('active');
}

// Renders the book in browser
function render() {
    const display = document.querySelector('#book-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for (let i = 0; i < myLibrary.length; i++) {
        domBook(myLibrary[i]);
    }
}

// DOM Elements
function domBook(item) {
    const library = document.querySelector('#book-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

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

    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);

    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        storeData();
        render();
    });

    readBtn.addEventListener('click', () => {
        item.read = !item.read;
        storeData();
        render();
    })
}

function storeData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function restore() {
    if (!localStorage.myLibrary) {
        render();
    } else {
        let object = localStorage.getItem(`myLibrary`);
        object = JSON.parse(object);
        myLibrary = object;
        render();
    }
}

restore();

//Overlay
