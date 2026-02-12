// app.js - Servidor principal de la API de la Biblioteca

// Importamos Express, framework para crear servidores y rutas HTTP
const express = require('express');

// Creamos una instancia de Express, que representa nuestra aplicación
const app = express();

// Middleware para interpretar JSON en el cuerpo de las peticiones
// Esto es necesario para usar req.body en POST o PUT
app.use(express.json());

// Middleware para logging de peticiones: muestra método, URL y fecha/hora
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Importamos las rutas definidas en routes/books.js
// Este archivo contiene todos los endpoints relacionados con libros
const booksRoutes = require('./routes/books');

// Conectamos las rutas de libros a nuestra aplicación bajo la ruta base
// Ejemplo: GET /api/books, POST /api/books, etc.
app.use('/api/books', booksRoutes);

// Endpoint principal para comprobar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('API Biblioteca funcionando');
});

// Endpoint de prueba adicional para verificar estado
app.get('/api/status', (req, res) => {
  res.json({ status: 'Servidor funcionando correctamente', time: new Date() });
});

// Definimos el puerto donde correrá el servidor
const PORT = 3000;

// Iniciamos el servidor escuchando en el puerto definido
// La función callback se ejecuta cuando el servidor arranca correctamente
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT} 🚀`);
});