makeStartNewButton();

const shelf = document.querySelector('#shelf');

const bookArray = [];

function makeStartNewButton() {
        // Re-add the '+' button to the page.

        const startNew = document.createElement('button');
        startNew.type = 'button';
        startNew.id = 'start-new';
        startNew.textContent = '+'

        startNew.addEventListener('click', () => {
            makeForm();
            startNew.remove()
        })
    
        document.body.prepend(startNew);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author} is ${this.pages} long.`
    }
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

    let textInputs = [makeFormElement('title', formContainer), 
                    makeFormElement('author', formContainer), 
                    makeFormElement('pages', formContainer)];
    console.log(textInputs);
    const readInput = makeFormRead(formContainer);

    const addBookButton = document.createElement('button');
    addBookButton.type = 'button';
    addBookButton.id = 'add-book';
    addBookButton.textContent = 'Add Book';

    const clearButton = document.createElement('button');
    clearButton.type = 'button';
    clearButton.id = 'clear';
    clearButton.textContent = 'Clear';

    clearButton.addEventListener('click', () => clear());

    formContainer.append(addBookButton, clearButton);

    const body = document.querySelector('body');
    body.prepend(formContainer);

    addBookButton.addEventListener('click', () => addBook());

    function addBook() {
        const newBook = new Book();
        textInputs.forEach(input => newBook[input.id] = input.value);
        newBook.read = readInput.checked;
        addNewBook(newBook);
        bookArray.push(newBook);
    
        formContainer.remove();
        makeStartNewButton();
    }    

    function clear() {
        textInputs.forEach(input => input.value = '');
        readInput.checked = false;
    }    
}

function makeFormElement(element, formContainer) {
    const label = document.createElement('label');
    label.setAttribute('for', element);
    label.textContent = `${element}:`; // Capitalized in CSS

    const input = document.createElement('input');
    input.type = 'text';
    input.id = element;

    formContainer.append(label, input);

    return input;
}

function makeFormRead(formContainer) {
    const label = document.createElement('label');
    label.setAttribute('for', 'read');
    label.textContent = 'Read:';
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'read';

    formContainer.append(label, input);

    return input;
}



// Quick test of the object constructor

const wutheringHeights = new Book('Wuthering Heights', 'Emily Bronte', 326, true);

console.log(wutheringHeights.info());