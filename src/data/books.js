// Generador simple de ID único
const generateId = () => Date.now().toString();

// Array en memoria que almacena los libros
const books = [
  {
    id: generateId(),
    title: "Don Quijote",
    author: "Miguel de Cervantes",
    isRead: false,
    createdAt: new Date().toISOString()
  }
];

// 📌 Crear un nuevo libro
const addBook = (title, author) => {
  const newBook = {
    id: generateId(),
    title,
    author,
    isRead: false,
    createdAt: new Date().toISOString()
  };

  books.push(newBook);
  return newBook;
};

// 📌 Obtener todos los libros
const getAllBooks = () => books;

// 📌 Buscar libro por ID
const getBookById = (id) => {
  return books.find(book => book.id === id);
};

// 📌 Marcar libro como leído / no leído
const toggleReadStatus = (id) => {
  const book = books.find(book => book.id === id);

  if (!book) return null;

  book.isRead = !book.isRead;
  return book;
};

// 📌 Eliminar libro por ID
const deleteBook = (id) => {
  const index = books.findIndex(book => book.id === id);

  if (index === -1) return false;

  books.splice(index, 1);
  return true;
};

module.exports = {
  books,
  addBook,
  getAllBooks,
  getBookById,
  toggleReadStatus,
  deleteBook
};
