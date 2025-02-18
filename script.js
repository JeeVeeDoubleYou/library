
class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    getReadStatus(){
        return this.read;
    }

    displayRead(){
        if (this.read == 'notStarted'){
            return 'Not Started';
        } else if (this.read == 'started'){
            return 'Started';
        }else if (this.read == 'finished'){
            return 'Finished';
        }
    }

    switchReadStatus(){
        if (this.read == 'notStarted'){
            this.read = 'started';
        } else if (this.read == 'started'){
            this.read = 'finished';
        }else if (this.read == 'finished'){
            this.read = 'notStarted';
        }
    }

    getBookInfo(){
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

class Library{
    constructor(){
        this.books = [];
    }

    changeReadStatus(clicked_id){
        this.books[clicked_id].switchReadStatus();
        this.displayBooks();
    }

    addBook(){
        const form = document.getElementById('newBookForm');
        const title = form.elements['title'].value;
        const author = form.elements['author'].value;
        const pages = form.elements['pages'].value;
        let read = form.elements['read'].value;
        this.books.push(new Book(title, author, pages, read));
    }

    deleteBook(clicked_id){
        this.books.splice(clicked_id, 1);
        this.displayBooks();
    }

    displayBooks(){
        if (this.books.length === 0){
            const bookList = document.getElementById('bookList');
            bookList.innerHTML = `<div>No books in library yet</div>`;
            return;
        }
        const bookList = document.getElementById('bookList');
        bookList.innerHTML = '';
        let bookNumber = 0;
        const readBtns = document.getElementsByClassName('readBtn');
        this.books.forEach(book => {bookList.innerHTML += `<div class="book"><div class="bookInfo">${book.getBookInfo()}</div><button class="readBtn" onclick="myLibrary.changeReadStatus(this.id)" id="${bookNumber}"></button><button class="deleteBookBtn" onclick="myLibrary.deleteBook(this.id)" id="${bookNumber}">Delete Book</button></div>`; readBtns[bookNumber].innerHTML=book.displayRead();bookNumber++});
    }
}

const myLibrary = new Library();

class Form{
    constructor(){
        this.form = document.getElementById('newBookForm');
        this.library = document.getElementById('libraryPage');
    }

    showForm(){
        this.form.style.display = "";
        this.library.style.display = "none";
    }

    hideForm(){
        this.form.style.display = "none";
        this.library.style.display = "";
    }
}

const myForm = new Form();

document.getElementById('newBookForm').addEventListener('submit', function(e) {
    const form = document.getElementById('newBookForm');
    e.preventDefault();
    myLibrary.addBook(); 
    myForm.hideForm();
    myLibrary.displayBooks();
    form.reset();
});

myLibrary.displayBooks();