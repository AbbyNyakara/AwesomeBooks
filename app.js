/* eslint disable no-unused-vars */

const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');
const loggedBooks = document.querySelector('.logged-books');
const addButton = document.querySelector('.add-book');

let books = [];

function showBook() {
  loggedBooks.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    loggedBooks.innerHTML += `
    <div>
      <p class="title">${books[i].title}</p>
      <p class="author">${books[i].author}</p>
      <button class="button" onclick="removeBook(${i})">remove</button>
      <hr/>
    </div>
   `;
    title.value = '';
    author.value = '';
  }
}

function removeBook(index) {
  books.splice(index, 1);
  showBook();
  localStorage.setItem('books', JSON.stringify(books));
}

window.onload = () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
  showBook();
};

addButton.addEventListener('click', () => {
  const book = {
    title: title.value,
    author: author.value,
  };
  books.push(book);
  showBook();
  localStorage.setItem('books', JSON.stringify(books));
});