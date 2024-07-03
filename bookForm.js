const addBookButton = document.getElementById('addBookBtn');
addBookButton.addEventListener('click', addBookToLibrary());

function addBookToLibrary(){
    const form = document.getElementById('newBookForm');
    const title = form.elements['title'].value;
    const author = form.elements['author'].value;
    const pages = form.elements['pages'].value;
    const read = form.elements['read'].checked;
    // myLibrary.push(new Book(title, author, pages, read));
    window.location.href = 'index.html';
}