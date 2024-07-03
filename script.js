const myLibrary = [
    new Book('The Hobbit', 'J.R.R. Tolkien', 295, true),
    new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 398, true),
    new Book('The Two Towers', 'J.R.R. Tolkien', 327, false),
    
];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read ? 'already read' : 'not read yet'}`;
    }
}

function displayBooks(){
    const bookList = document.getElementById('bookList');
    myLibrary.forEach(book => {bookList.innerHTML += `<div class="book">${book.info()}</div>`});
}

displayBooks();
