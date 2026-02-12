// Importamos Express, que nos permite crear rutas y servidores HTTP
const express = require('express');

// Creamos un Router de Express para agrupar las rutas de libros
const router = express.Router();

// Importamos el array de libros desde el archivo de datos
// Este array actua como nuestra "base de datos en memoria"
const books = require('../data/books');
// GET /api/books — obtener todos los libros
// *********************************************
router.get('/', (req, res) => {
  // Extraemos posibles filtros de la URL title y author
  const { title, author } = req.query;
  // Comenzamos con todos los libros
  let result = books;
  // Si se envio el filtro title, filtramos los libros que contienen el texto
  if (title) {
    result = result.filter(b =>
      b.title.toLowerCase().includes(title.toLowerCase())
    );
  }
  // Si se envio el filtro author filtramos los libros por autor
  if (author) {
    result = result.filter(b =>
      b.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  // Devolvemos el resultado (filtrado o todos los libros) como JSON
  res.json(result);
});
// GET /api/books/:id  obtener un libro por ID
// ===============================
router.get('/:id', (req, res) => {
  // Buscamos el libro cuyo id coincida con el parámetro enviado en la URL
  const book = books.find(b => b.id === req.params.id);

  // Si no se encuentra el libro, devolvemos un error 404
  if (!book) return res.status(404).json({ error: "Book not found" });

  // Si se encuentra, devolvemos el libro en formato JSON
  res.json(book);
});
// POST /api/books  crear un libro nuevo
// ===============================
router.post('/', (req, res) => {
  // Extraemos title y author del cuerpo de la petición (JSON)
  const { title, author } = req.body;

  // Validación básica: ambos campos son obligatorios
  if (!title || !author) {
    return res.status(400).json({ error: "title y author son requeridos" });
  }
  // Creamos un nuevo libro con un ID unico (timestamp)
  const newBook = {
    id: Date.now().toString(), // Genera un ID unico basado en la fecha/hora
    title,
    author,
    isRead: false, // Por defecto, el libro no está leido
    createdAt: new Date().toISOString() // Fecha de creación en formato ISO
  };

  // Añadimos el nuevo libro al array de libros
  books.push(newBook);

  // Respondemos con el libro creado y código HTTP 201 (creado)
  res.status(201).json(newBook);
});

// PUT /api/books/:id — actualizar un libro
// ===============================
router.put('/:id', (req, res) => {
  // Buscamos el libro a actualizar por su ID
  const book = books.find(b => b.id === req.params.id);

  // Si no existe, devolvemos error 404
  if (!book) return res.status(404).json({ error: "Book not found" });

  // Extraemos los campos enviados en el body
  const { title, author, isRead } = req.body;

  // Solo actualizamos los campos que hayan sido enviados
  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;
  if (isRead !== undefined) book.isRead = isRead;

  // Devolvemos el libro actualizado
  res.json(book);
});
// PATCH /api/books/:id/read — alternar leído/no leído
// ===============================
router.patch('/:id/read', (req, res) => {
  // Buscamos el libro por ID
  const book = books.find(b => b.id === req.params.id);

  // Si no existe, devolvemos 404
  if (!book) return res.status(404).json({ error: "Book not found" });

  // Alternamos el valor booleano de isRead
  book.isRead = !book.isRead;

  // Devolvemos el libro actualizado
  res.json(book);
});
// DELETE /api/books/:id — eliminar libro
// ===============================
router.delete('/:id', (req, res) => {
  // Buscamos la posición del libro en el array
  const index = books.findIndex(b => b.id === req.params.id);
  // Si no existe, devolvemos 404
  if (index === -1) return res.status(404).json({ error: "Book not found" });
  // Eliminamos el libro del array usando splice
  books.splice(index, 1);
  // Respondemos con 204 No Content (eliminado correctamente, sin contenido)
  res.status(204).send();
});
// Exportamos el router para poder usarlo en app.js
module.exports = router;
