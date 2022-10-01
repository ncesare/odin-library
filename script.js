
// Force run the function to test

makeForm();


const shelf = document.querySelector('#shelf');

const textInputs = document.querySelectorAll('input[type="text"]');
const readInput = document.querySelector('#read');

const addBook = document.querySelector('#add-book');

const bookArray = [];

addBook.addEventListener('click', () => {
    const newBook = new Book();
    textInputs.forEach(input => newBook[input.id] = input.value);
    newBook.read = readInput.checked;
    addNewBook(newBook);
    clear();
    bookArray.push(newBook);
})

document.querySelector('#clear').addEventListener('click', () => clear());

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author} is ${this.pages} long.`
    }
}

function clear() {
    textInputs.forEach(input => input.value = '');
    readInput.checked = false;
}

function addNewBook(newBook) {
    const bookContainer = document.createElement('div');

    // Create on-page elements for each new book

    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookPages = document.createElement('div');
    const hasRead = document.createElement('input');
    const readLabel = document.createElement('label');
    
    hasRead.setAttribute('type', 'checkbox');

    // 'Read' checkbox updates information in the books array

    hasRead.addEventListener('click', () => {
        let thisBook = bookArray.find(book => book.title == newBook.title);
        thisBook.read = hasRead.checked;
    })

    bookTitle.textContent = 'Title: ' + newBook.title;
    bookAuthor.textContent = 'Author: ' + newBook.author;
    bookPages.textContent = 'Pages: ' + newBook.pages;
    hasRead.checked = newBook.read;
    readLabel.textContent = 'Read: '

    bookContainer.classList.add('book');
    shelf.append(bookContainer);
    bookContainer.append(bookTitle, bookAuthor, bookPages, readLabel, hasRead);
}

function makeForm() {
    const formContainer = document.createElement('div');
    formContainer.id = 'entry-form';

    makeFormElement('title', formContainer);
    makeFormElement('author', formContainer);
    makeFormElement('pages', formContainer);
    makeFormRead(formContainer);

    const addBookButton = document.createElement('button');
    addBookButton.type = 'button';
    addBookButton.id = 'add-book';
    addBookButton.textContent = 'Add Book';

    const clearButton = document.createElement('button');
    clearButton.type = 'button';
    clearButton.id = 'clear';
    clearButton.textContent = 'Clear';

    formContainer.append(addBookButton, clearButton);

    const body = document.querySelector('body');
    body.prepend(formContainer);
}

function makeFormElement(element, formContainer) {
    const label = document.createElement('label');
    label.setAttribute('for', element);
    label.textContent = `${element}:`; // Capitalized in CSS

    const input = document.createElement('input');
    input.type = 'text';
    input.id = element;

    formContainer.append(label, input);
}

function makeFormRead(formContainer) {
    const label = document.createElement('label');
    label.setAttribute('for', 'read');
    label.textContent = 'Read:';
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'read';

    formContainer.append(label, input);
}



// Quick test of the object constructor

const wutheringHeights = new Book('Wuthering Heights', 'Emily Bronte', 326, true);

console.log(wutheringHeights.info());