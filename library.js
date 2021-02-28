// const Library = function (books = []) {
//   this.books = books;
// };

class Library{
  constructor(books = []){
    this.books = books;
  }
  printInventory() {
    this.books.forEach(({ author, title }) => {
      console.log(`${title} by ${author}`);
    });
  }
}

Library.prototype.bookCount = function () {
  return this.books.length;
};

Library.prototype.addBook = function (newBook) {
  this.books.push(newBook);
};

Library.prototype.addBooks = function (newBooks) {
  newBooks.forEach(book => this.books.push(book));
};

// Library.prototype.printInventory = function () {
//   this.books.forEach((book) => {
//     console.log(`${book.title} by ${book.author}`);
//   });
// };

// module.exports = Library;
export default Library;
