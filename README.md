📚 Biblioteca API REST

Tecnologías: Node.js, Express, JavaScript
Control de versiones: Git

📝 Descripción

API REST para gestionar una colección de libros. Permite operaciones CRUD: crear, listar, obtener por ID, actualizar, marcar leído/no leído y eliminar libros.

Objetivo: Desarrollar un backend funcional que permita gestionar libros mediante operaciones CRUD, con almacenamiento temporal en memoria usando un array (data/books.js).

⚡ Funcionalidades

Crear un libro

Listar todos los libros

Obtener un libro por ID

Actualizar un libro

Marcar un libro como leído/no leído

Eliminar un libro

🛠 Tecnologías

Node.js + Express — Manejo rápido de JSON y rutas REST

Array en memoria (data/books.js) — Almacenamiento temporal de los libros

Opciones alternativas permitidas:

PHP con Laravel

Python con Flask o FastAPI

🚀 Instalación

Clonar el repositorio e instalar dependencias:

git clone https://github.com/ChamaAz/Biblioteca-API.git
cd Biblioteca-API
npm install
🖥 Uso

Ejecutar el servidor:

npm start

Endpoints principales:

GET /books → Listar todos los libros

GET /books/:id → Obtener un libro por ID

POST /books → Crear un libro

PUT /books/:id → Actualizar un libro

PATCH /books/:id/read → Marcar libro como leído/no leído

DELETE /books/:id → Eliminar un libro

🤝 Contribución

Si quieres colaborar:

Haz un fork del proyecto

Crea tu rama (git checkout -b feature/nueva-funcionalidad)

Haz commit de tus cambios (git commit -m 'Añadir nueva funcionalidad')

Haz push a la rama (git push origin feature/nueva-funcionalidad)

Abre un Pull Request

📄 Licencia

Este proyecto está bajo la MIT License
.
