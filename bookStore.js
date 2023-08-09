class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList = document.getElementById('bookList');
    this.addForm = document.getElementById('addForm');
    this.addForm.addEventListener('submit', this.addBook.bind(this));
    this.displayBooks();
  }

  displayBooks() {
    this.bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>"${book.title}" by ${book.author}</td>
      `;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        this.removeBook(index);
      });

      removeBtn.classList.add('removeBtn');
      tr.appendChild(removeBtn);
      this.bookList.appendChild(tr);
    });
  }
}

const bookStore = new BookCollection();

bookStore();
