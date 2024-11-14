const sampleBook1 = new Book("Narnia and the Lion, the Witch and the Wardrobe", "JRR Tolkien", 295, true);
const sampleBook2 = new Book("The Lord of the Rings", "JRR Tolkien", 1178, false);
const sampleBook3 = new Book("The Two Towers", "JRR Tolkien", 320, true);

const myLibrary = [sampleBook1, sampleBook2, sampleBook3];

function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.info = function () {
        return this.title + " by " + this.author + ", " + this.numberOfPages + " pages, " + (this.read ? "read" : "not read yet");
    }
}



function populateLibrary() {
    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
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
        document.querySelector(".content").appendChild(bookCard);
    });
}

function getTallestBookCard() {
    const bookCards = document.querySelectorAll(".book-card");
    let tallestBookCard = 0;
    bookCards.forEach(bookCard => {
        if (bookCard.offsetHeight > tallestBookCard) {
            tallestBookCard = bookCard.offsetHeight;
        }
    });

    return tallestBookCard;
}

const statsToggle = document.querySelector(".stats-for-nerds-toggle input");

statsToggle.addEventListener("change", () => {
    if (statsToggle.checked) {
        document.querySelector(".stats-for-nerds").style.opacity = "1";
        populateNerdStats();
    } else {
        document.querySelector(".stats-for-nerds").style.opacity = "0";
    }
});

let nerdStats = document.querySelector(".stats-for-nerds");

if (!nerdStats) {
    nerdStats = document.createElement("div");
    nerdStats.classList.add("stats-for-nerds");
    document.body.appendChild(nerdStats);
}

function populateNerdStats() {
    nerdStats.classList.add("stats-for-nerds");
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

const content = document.querySelector(".content");

document.querySelector(".sort select").addEventListener("focus", () => {
    content.classList.add("content-disabled");
});

document.querySelector(".sort select").addEventListener("blur", () => {
    content.classList.remove("content-disabled");
});

document.querySelector(".sort select").addEventListener("change", () => {
    content.classList.remove("content-disabled");
});


populateLibrary();
populateNerdStats();