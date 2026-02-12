// Array en memoria que almacena los libros de la biblioteca.
// Cada libro tiene un id único, título, autor, estado de lectura y fecha de creación.
const books = [
  {
    id: "1", // ID único del libro
    title: "Don Quijote", // Título del libro
    author: "Miguel de Cervantes", // Autor del libro
    isRead: false, // Indica si el libro ha sido leído
    createdAt: new Date().toISOString() // Fecha de creación en formato ISO
  }
];

// Exportamos el array para que pueda ser usado en otras partes del proyecto
module.exports = books;
