const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
const registeredBooks = document.querySelector('.logged-books');
const addButton = document.querySelector('.add-book');


class BookClass {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = [];
  }

  addbook = (book) => {
    books.push(book);
  };

  removeBook = (index) => {
    books.splice(index, 1);
  };
}

const booksArr = new BookClass();
let { books } = booksArr;


function displayBook() {
  registeredBooks.innerHTML = '';
  for (let i = 0; i < books.length; i++) {
    registeredBooks.innerHTML += `
    <div class="card">
      <p class="title">"${books[i].title}" by ${books[i].author}</p>
      <button class="button" onclick="remove(${i})">Remove</button>
    </div>
   `;
    title.value = '';
    author.value = '';
  }
}

function remove(index) {
  const book = new BookClass();
  book.removeBook(index);
  displayBook();
}


window.onload = () => {
  displayBook();
};

addButton.addEventListener('click', () => {
  const book = new BookClass(title.value, author.value);
  book.addbook(book);
  displayBook();
});