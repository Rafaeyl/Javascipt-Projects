const myLibrary = [];

class Book {
    constructor(title, author, year, pages, isRead) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.isRead = isRead;
    }
}

let Book1 = new Book('Hakdog', "tender", 2019, 50, "Yes");
let Book2 = new Book('Hakdogf', "tendder", 2019, 50, "Yes");


function addBookToLibrary(array) {
  myLibrary.push(array);
}

addBookToLibrary(Book1);
addBookToLibrary(Book2);

myLibrary.forEach(function(a){
    console.log(a.author);
});



// console.log(myLibrary);