const shelf = document.querySelector('#shelf');

const textInputs = document.querySelectorAll('input[type="text"]');
const readInput = document.querySelector('#read');

const addBook = document.querySelector('#add-book');

addBook.addEventListener('click', () => {
    const newBook = new Book();
    textInputs.forEach(input => newBook[input.id] = input.value);
    newBook.read = readInput.checked;
    addNewBook(newBook);
    clear();
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

    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookPages = document.createElement('div');

    bookTitle.textContent = newBook.title;
    bookAuthor.textContent = newBook.author;
    bookPages.textContent = newBook.pages;

    bookContainer.classList.add('book');
    shelf.append(bookContainer);
    bookContainer.append(bookTitle, bookAuthor, bookPages);
}





// Quick test of the object constructor

const wutheringHeights = new Book('Wuthering Heights', 'Emily Bronte', 326, true);

console.log(wutheringHeights.info());