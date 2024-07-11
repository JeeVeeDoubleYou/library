const myLibrary = [
];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    switchReadStatus = function(){
        this.read = !this.read;
    }

    getBookInfo = function(){
        return `${title} by ${author}, ${pages} pages`;
    }

    return {switchReadStatus, getBookInfo, read};
}

function displayBooks(){
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    bookNumber = 0;
    const readBtns = document.getElementsByClassName('readBtn');
    myLibrary.forEach(book => {bookList.innerHTML += `<div class="book"><div class="bookInfo">${book.getBookInfo()}</div><button class="readBtn" onclick="changeReadStatus(this.id)" id="${bookNumber}"></button><button class="deleteBookBtn" onclick="deleteBook(this.id)" id="${bookNumber}">Delete Book</button></div>`; if(book.read){readBtns[bookNumber].innerHTML=`Read`}else{readBtns[bookNumber].innerHTML=`Not Read`};bookNumber++});
}

function showForm(){
    const form = document.getElementById('newBookForm');
    form.style.display = "";
    const library = document.getElementById('libraryPage');
    library.style.display = "none";
}

function hideForm(){
    const form = document.getElementById('newBookForm');
    form.style.display = "none";
    const library = document.getElementById('libraryPage');
    library.style.display = "";
}

document.getElementById('newBookForm').addEventListener('submit', function(e) {
    const form = document.getElementById('newBookForm');
    e.preventDefault();
    addBookToLibrary(); 
    hideForm();
    displayBooks();
    form.reset();
});

function addBookToLibrary(){
    const form = document.getElementById('newBookForm');
    const title = form.elements['title'].value;
    const author = form.elements['author'].value;
    const pages = form.elements['pages'].value;
    let read = form.elements['read'].checked;
    myLibrary.push(new Book(title, author, pages, read));
}

function deleteBook(clicked_id){
    myLibrary.splice(clicked_id, 1);
    displayBooks();
}

function changeReadStatus(clicked_id){
    myLibrary[clicked_id].switchReadStatus();
    displayBooks();
}

displayBooks();