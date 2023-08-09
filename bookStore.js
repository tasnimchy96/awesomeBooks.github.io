let books = JSON.parse(localStorage.getItem('books')) || [];

function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';
  // Define the removeBook function before it is called
  function removeBook(index) {
    books = books.filter((book, i) => i !== index);
    localStorage.setItem('books', JSON.stringify(books));
    displayBooks();
  }
  books.forEach((book, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <hr>
    `;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      removeBook(index);
    });
    li.appendChild(removeBtn);
    bookList.appendChild(li);
  });
}

displayBooks();
