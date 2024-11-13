function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.info = function () {
        return this.title + " by " + this.author + ", " + this.numberOfPages + " pages, " + (this.read ? "read" : "not read yet");
    }
}

const TheHobbit = new Book("The Hobbit", "JRR Tolkien", 295, false);
const TheLordOfTheRings = new Book("The Lord of the Rings", "JRR Tolkien", 1178, true);
const TheTwoTowers = new Book("The Two Towers", "JRR Tolkien", 320, true);

Book.prototype.isBoringBook = function () {
    console.log(this.title + " is a boring book");
}

console.log(TheLordOfTheRings.valueOf());
