const loggedBooks = document.querySelector('.logged-books');
const authorInput = document.querySelector('.author-input');
const titleInput = document.querySelector('.title-input');
const addButton = document.querySelector('.add-book');

// addButton.addEventListener('click', ()=>{
//     // Once the button is clicked, create a new book 
//     // Add the book to the book arrays 
// })

// Create the book class
class Book {
    constructor(titleInput, authorInput){
        this.titleInput = titleInput;
        this.authorInput = authorInput;
        this.bookList = [];
    }

    // Add a removeBook function to remove a book from the booklist 
    removeBook(index) {
        bookList.splice(index, 1)   // This is the entire booklist array
    }

    // Add a fucntion to add a book to the array
    addBook(book){
        bookList.push(book)
    }
}

const booksArray = new Book();
let { bookList } = booksArray;


// Create a function to display all the books dynamically

function showBooks (){
    loggedBooks.innerHTML = '';
    for (let i=0; i<bookList.length; i++){
        loggedBooks.innerHTML += `
        <div class="card">
            <p>"${loggedBooks[i].titleInput}" by ${loggedBooks[i].authorInput}</p>
            <button type="button" onclick="removeBook(${i})">Remove</button>
        </div>
        `;

        // Reset the user input to null again 
        titleInput.value = '';
        authorInput.value = '';
    }
}

