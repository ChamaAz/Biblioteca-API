# Biblioteca API REST
API REST para gestionar una colección de libros.  
Permite operaciones CRUD: crear, listar, obtener por ID, actualizar, marcar leído/no leído y eliminar libros.
## Objetivo
Crear un servicio backend que permita gestionar libros con operaciones CRUD:
- Crear un libro
- Listar todos los libros
- Obtener un libro por ID
- Actualizar un libro
- Marcar un libro como leído/no leído
- Eliminar un libro
**Nota:** Los datos se almacenan en memoria usando un array (`data/books.js`).
## Tecnologías
- **Node.js + Express** — rapidez y facilidad para manejar JSON y rutas REST.  
- **Array en memoria (`data/books.js`)** — almacenamiento temporal de los libros.
Opciones alternativas permitidas:
- PHP con Laravel  
- Python con Flask o FastAPI  
##Instrucciones de instalación
1. Clonar el repositorio:
bash
git clone <URL-del-repositorio> 
## Como ejecutar el proyecto
-Levantar el servidor
node src/app.js
-Probar los endpoints en otra ventana de PowerShell
** Crear un libro (POST)
Invoke-RestMethod -Uri http://127.0.0.1:3000/api/books -Method POST -Body (@{title="1984";author="George Orwell"} | ConvertTo-Json) -ContentType "application/json"
**Listar todos los libros (GET)
Invoke-RestMethod -Uri http://127.0.0.1:3000/api/books -Method GET
**Actualizar un libro (PUT)
Invoke-RestMethod -Uri http://127.0.0.1:3000/api/books/<id-del-libro> -Method PUT -Body (@{title="1984 Updated";author="George Orwell";isRead=$true} | ConvertTo-Json) -ContentType "application/json"
**Marcar un libro como leído/no leído (PATCH)
Invoke-RestMethod -Uri http://127.0.0.1:3000/api/books/<id-del-libro>/read -Method PATCH
**Eliminar un libro (DELETE)
Invoke-RestMethod -Uri http://127.0.0.1:3000/api/books/<id-del-libro> -Method DELETE
# Siempre reemplaza <id-del-libro> con el ID real que obtienes al crear el libro
Probar con navegador, Postman, Insomnia o curl.
## Decisiones técnicas que he tomado 
-- Node.js + Express
Elegido por su rapidez, facilidad para manejar JSON y crear rutas REST.
Permite modularizar el proyecto y mantenerlo escalable.
--Almacenamiento temporal en memoria
Usé un array (data/books.js) para guardar los libros.
Evita complicaciones de instalar base de datos, enfocado en la lógica de la API y manejo de errores.
--Separación de responsabilidades
app.js → servidor principal y conexión de rutas
routes/books.js → endpoints CRUD
data/books.js → almacenamiento de datos
Esto mejora claridad, mantenimiento y escalabilidad futura.
--Manejo de errores
404 → libro no encontrado
400 → datos incompletos al crear un libro
## Explicación de la estructura del proyecto
biblioteca-api/
├── src/
│   ├── app.js   Servidor principal y conexión de rutas
│   ├── routes/
│   │   └── books.js  Endpoints CRUD de libros
│   └── data/
│       └── books.js   Array de libros en memoria
├── package.json        Dependencias y scripts de npm
├── package-lock.json   Bloqueo de versiones
└── README.md           Documentación del proyecto
## Qué mejoraría si tuviera más tiempo
Implementar persistencia real con base de datos (MongoDB o MySQL)
Añadir validación avanzada de datos con librerías como Joi o express-validator
Documentar la API con Swagger / OpenAPI.
Agregar autenticación y autorización para proteger los endpoints


