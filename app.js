const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
const loggedBooks = document.querySelector('.logged-books');
const addButton = document.querySelector('.add-book');

if (localStorage.getItem('books')) {
  if (localStorage.getItem('books').length > 2) {
    loggedBooks.classList.add('loggedBooks-books2');
  }
}

class Book {
constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = [];
    }

    addbook = (book) => {
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    };

    removeBook = (index) => {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    };
}
    
const booksArray = new Book();
let { books } = booksArray;

function showBooks() {
    loggedBooks.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        loggedBooks.innerHTML += `
        <div class="card">
            <p class="title">"${books[i].title}" by ${books[i].author}</p>
            <button class="button" onclick="remove(${i})">Remove</button>
        </div>
        `;

        // Reset the values 
        title.value = '';
        author.value = '';
        }
}

function remove(index) {
    const book = new Book();
    book.removeBook(index);
    showBooks();
}


window.onload = () => {
    if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
    }
    showBooks();
};

addButton.addEventListener('click', () => {
    const book = new Book(title.value, author.value);
    book.addbook(book);
    showBooks();
    localStorage.setItem('books', JSON.stringify(books));
}); 