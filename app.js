const form = document.querySelector('form');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const addButton = document.querySelector('.add-book');
const loggedBooksContainer = document.querySelector('.logged-books');
let title = titleInput.value;
let book = authorInput.value;s

let bookList = [
    {
        title: "The tales of mia", 
        author: "Abby Nyakara"
    }
];

function addBook(){
    loggedBook.innerHTML = ''; // for single book
    for (let i=0; i<bookList.lenght; i++){
        loggedBook += `
        <div>
            <p>${bookList[i].title}</p>
            <p>${bookList[i].author}</p>
            <button type="button">Remove</button>
            <hr>
        </div>
        `;
    }
    loggedBooksContainer.innerHTML += loggedBook;
}

function remove(index) {
    bookList.splice(index, 1);
    addBook();
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

window.onload = () => {
if (localStorage.getItem('bookList')) {
    bookList = JSON.parse(localStorage.getItem('bookList'));
}
addBook();
};

addButton.addEventListener('click', () => {
    const onebook = {
      title: title,
      author: author,
    };
    bookList.push(onebook);
    addBook();
    localStorage.setItem('bookList', JSON.stringify(bookList));
  });
