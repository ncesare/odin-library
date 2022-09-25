function Book(title, author, pages, read) {
    this.title = 'test';
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (this.read == true) return `${title} by ${author} is ${pages} long and you have read it.`;
        else if (this.read == false) return `${title} by ${author} is ${pages} long and you have not read it yet.`;
        else return `${this.title} by ${this.author} is ${this.pages} long.`
    }
}

const textInputs = document.querySelectorAll('input[type="text"]');
const readInput = document.querySelector('#read');

const addBook = document.querySelector('#add-book');
addBook.addEventListener('click', () => {
    const newBook = new Book();
    textInputs.forEach(input => newBook[input.id] = input.value);
    newBook.read = readInput.checked;
    console.log(newBook.info());
})



// Quick test of the object constructor

const wutheringHeights = new Book('Wuthering Heights', 'Emily Bronte', 326, true);

console.log(wutheringHeights.info());