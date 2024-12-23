// Select DOM elements for the form and the book list
const form = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const yearInput = document.getElementById('year');
const bookList = document.getElementById('book-list');

// Event listener for form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the values entered by the user
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const year = yearInput.value.trim();

  // Basic validation to check if fields are filled in
  if (title === '' || author === '' || year === '') {
    alert('Please fill in all fields.');
    return; // Stop the function if validation fails
  }

  // Create a new book entry (HTML structure for each book)
  const book = document.createElement('section');
  book.classList.add('book');

  // Add the book information to the new section
  book.innerHTML = `
    <div>${title}</div>
    <div>${author}</div>
    <div>${year}</div>
  `;

  // Append the new book section to the list of books
  bookList.appendChild(book);

  // Clear the input fields after adding the book
  titleInput.value = '';
  authorInput.value = '';
  yearInput.value = '';
});
