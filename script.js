//Sample Books
const sampleBook1 = new Book("Narnia and the Lion, the Witch and the Wardrobe", "JRR Tolkien", 295, true);
const sampleBook2 = new Book("The Lord of the Rings", "JRR Tolkien", 1178, false);
const sampleBook3 = new Book("The Two Towers", "JRR Tolkien", 320, true);

//Library
const myLibrary = [];

//Book Constructor
function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = parseInt(numberOfPages);
    this.read = read;
    this.info = function () {
        return this.title + " by " + this.author + ", " + this.numberOfPages + " pages, " + (this.read ? "read" : "not read yet");
    }
}

//Populate the library with sample books easter egg
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
    myLibrary.push(sampleBook1);
    myLibrary.push(sampleBook2);
    myLibrary.push(sampleBook3);
    populateLibrary();
    populateNerdStats();
    setupEventListeners();
});

// Create dialog element once and store it
const addBookDialog = document.createElement('dialog');
addBookDialog.className = 'add-book-dialog';
document.body.appendChild(addBookDialog);

//Select the nerd stats toggle checkbox
const statsToggle = document.querySelector(".stats-for-nerds-toggle input");



//Function to populate the webpage with the books stored in myLibrary
function populateLibrary() {
    const content = document.querySelector(".content");

    //Reset the content every time the function is called
    document.querySelector(".content").innerHTML = `

        <div class="add-book">
            <button class="add-book-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM15.75 12.75H12.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H11.25V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75Z"
                        fill="currentColor" />
                </svg>
                Add book
            </button>
        </div>
    `;

    // Update dialog content
    addBookDialog.innerHTML = `
        <form method="dialog">
            <img src="./resources/icons/logo.svg">
            <div class="input-container">
                <textarea class="text-input" id="title" name="title" placeholder="Title" required></textarea>
                <label for="title" class="text-label">Title</label>
            </div>
            <div class="input-container">
                <textarea class="text-input" id="author" name="author" placeholder="Author" required></textarea>
                <label for="author" class="text-label">Author</label>
            </div>
            <div class="input-container">
                <input type="number" class="text-input" id="numberOfPages" name="numberOfPages" placeholder="Number of pages" min="1" required>
                <label for="numberOfPages" class="text-label">Number of pages</label>
            </div>
            <div class="checkbox-container">
                <label for="read">Have you read this book?</label>
                <input id="read" type="checkbox" name="read">
            </div>
            <button type="submit" class="add-book-button-form">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM15.75 12.75H12.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H11.25V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75Z"
                        fill="currentColor" />
                </svg>
                Add Book
            </button>
        </form>
    `;

    //Loop through all the books in myLibrary and create a book card for each
    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add(`book-card`);
        bookCard.innerHTML = `
            <h2 class="book-title">${book.title}</h2>
            <p class="book-author">by ${book.author}</p>
            <p class="book-pages">${book.numberOfPages} pages</p>
            <p class="book-read ${book.read ? "green" : "red"}">
                <img src="./resources/icons/${book.read ? "book-read" : "book-not-read"}.svg">
                ${book.read ? "Read" : "Not read yet"}
            </p>
            <div class="book-action-buttons">
                <button class="read-book-button ${book.read ? "red" : "green"}">
                    <img src="./resources/icons/${book.read ? "book-not-read" : "book-read"}.svg">
                    <p>Mark as ${book.read ? "not read" : "read"}</p>
                </button>
                <button class="edit-book-button orange">
                    <img src="./resources/icons/edit-book.svg">
                    <p>Edit Book</p>
                </button>
                <button class="remove-book-button red">
                    <img src="./resources/icons/remove-book.svg">
                    <p>Remove Book</p>
                </button>
            </div>
        `;

        // Add event listeners for this specific card's buttons
        const readButton = bookCard.querySelector(".read-book-button");
        const editButton = bookCard.querySelector(".edit-book-button");
        const removeButton = bookCard.querySelector(".remove-book-button");

        readButton.addEventListener("click", () => {
            book.read = !book.read;
            populateLibrary();
            populateNerdStats();
            setupEventListeners();
        });

        editButton.addEventListener("click", () => {

            addBookDialog.querySelector('form').removeEventListener('submit', addNewBook());

            //setupEventListeners();

            addBookDialog.showModal();
            document.querySelector("#title").value = book.title;
            document.querySelector("#author").value = book.author;
            document.querySelector("#numberOfPages").value = book.numberOfPages;
            document.querySelector("#read").checked = book.read;

            // Form submission
            addBookDialog.querySelector('form').addEventListener('submit', (event) => {
                event.preventDefault();
                book.title = document.querySelector("#title").value;
                book.author = document.querySelector("#author").value;
                book.numberOfPages = document.querySelector("#numberOfPages").value;
                book.read = document.querySelector("#read").checked;
                populateLibrary();
                populateNerdStats();
                setupEventListeners();
                addBookDialog.close();
            });

            // Auto resize textarea in dialog form
            document.querySelectorAll("textarea").forEach(textarea => {
                textarea.style.height = textarea.scrollHeight + 'px';
            });
        });

        removeButton.addEventListener("click", () => {
            myLibrary.splice(book, 1);
            populateLibrary();
            populateNerdStats();
            setupEventListeners();
        });

        //Append the book cards to the content
        content.appendChild(bookCard);
    });
}

// Set up event listeners once
function setupEventListeners() {
    // Add book button click
    document.addEventListener('click', (event) => {
        const addBookButton = event.target.closest('.add-book-button');
        if (addBookButton) {
            addBookDialog.showModal();
            addBookDialog.querySelector('form').reset();
        }
    });

    // Dialog click outside
    addBookDialog.addEventListener('click', (event) => {
        const rect = addBookDialog.getBoundingClientRect();
        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        ) {
            addBookDialog.close();
            addBookDialog.querySelector('form').reset();
        }
    });

    // Form submission
    addBookDialog.querySelector('form').addEventListener('submit', addNewBook());

    //Sort z-index issues
    document.querySelector(".sort select").addEventListener("focus", () => {
        content.classList.add("content-disabled");
    });

    document.querySelector(".sort select").addEventListener("blur", () => {
        content.classList.remove("content-disabled");
    });

    document.querySelector(".sort select").addEventListener("change", () => {
        content.classList.remove("content-disabled");
    });


    //Show or hide nerd stats
    statsToggle.addEventListener("change", () => {
        console.log("Working");
        if (statsToggle.checked) {
            document.querySelector(".stats-for-nerds").style.opacity = "1";
            populateNerdStats();
        } else {
            document.querySelector(".stats-for-nerds").style.opacity = "0";
        }
    });

    // Auto resize textarea in dialog form
    document.querySelectorAll("textarea").forEach(textarea => {
        textarea.addEventListener("input", e => {
            const el = e.target;
            el.style.height = "3rem";
            el.style.height = el.scrollHeight + 'px';
        });
    });

}






let nerdStats = document.querySelector(".stats-for-nerds");

//Create the nerd stats div
if (!nerdStats) {
    nerdStats = document.createElement("div");
    nerdStats.classList.add("stats-for-nerds");
    document.body.appendChild(nerdStats);
}

function populateNerdStats() {
    nerdStats.innerHTML = `
    <div class="cell two-column">
        <p>Total Books Added</p><p class="bold green">${myLibrary.length}</p>
    </div>
    <div class="cell">
        <p>Books Read</p><p class="bold green">${myLibrary.filter(book => book.read).length}</p>
    </div>
    <div class="cell">
        <p>Books Not Read</p><p class="bold red">${myLibrary.filter(book => !book.read).length}</p>
    </div>
    <div class="cell">
        <p>Pages Read</p><p class="bold green">${myLibrary.reduce((acc, book) => book.read ? acc + book.numberOfPages : acc, 0)}</p>
    </div>
    <div class="cell">
        <p>Pages Not Read</p><p class="bold red">${myLibrary.reduce((acc, book) => !book.read ? acc + book.numberOfPages : acc, 0)}</p>
    </div>
    <div class="cell two-column">
        <p class="">Total Pages Added</p><p class="bold green">${myLibrary.reduce((acc, book) => acc + book.numberOfPages, 0)}</p>
    </div>
    `;
}

function addNewBook() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const numberOfPages = document.querySelector("#numberOfPages").value;
    const read = document.querySelector("#read").checked;

    const newBook = new Book(title, author, numberOfPages, read);
    myLibrary.push(newBook);
    addBookDialog.querySelector('form').submit();
    populateLibrary();
    populateNerdStats();
    setupEventListeners();
    addBookDialog.close();
}

/* const submitButton = document.querySelector(".add-book-dialog button");
submitButton.addEventListener("click", addNewBook); */


populateLibrary();
populateNerdStats();
setupEventListeners();