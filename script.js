function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read == true) return `${title} by ${author} is ${pages} long and you have read it.`;
        else if (read == false) return `${title} by ${author} is ${pages} long and you have not read it yet.`;
    }
}

// Quick test of the object constructor

const wutheringHeights = new Book('Wuthering Heights', 'Emily Bronte', 326, true);

console.log(wutheringHeights.info());