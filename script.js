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

}