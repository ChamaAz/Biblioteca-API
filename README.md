## 📚 Biblioteca API REST

**🖥 Tecnologías:** Node.js, Express, JavaScript  
**🔧 Control de versiones:** Git  

---

## 👋 Descripción
API REST para gestionar una colección de libros.  
Permite realizar operaciones CRUD: crear, listar, obtener por ID, actualizar, marcar leído/no leído y eliminar libros.  

#### 🎯 Objetivo
Desarrollar un backend funcional que gestione libros usando un array en memoria (`data/books.js`).  

---

## ⚡ Funcionalidades
#### 📖 Crear un libro  
#### 📚 Listar todos los libros  
#### 🔍 Obtener un libro por ID  
#### ✏️ Actualizar un libro  
#### ✅/❌ Marcar libro como leído/no leído  
#### 🗑 Eliminar un libro  

---

## 🛠 Tecnologías
#### Node.js + Express
Manejo rápido de JSON y rutas REST  

#### Array en memoria (`data/books.js`)
Almacenamiento temporal de los libros  

💡 **Opciones alternativas:** PHP con Laravel o Python con Flask/FastAPI  

---

## 🚀 Instalación
Clonar el repositorio e instalar dependencias:  
```bash
git clone https://github.com/ChamaAz/Biblioteca-API.git
cd Biblioteca-API
npm install

Endpoints principales:

GET /books → Listar todos los libros

GET /books/:id → Obtener un libro por ID

POST /books → Crear un libro

PUT /books/:id → Actualizar un libro

PATCH /books/:id/read → Marcar libro como leído/no leído

DELETE /books/:id → Eliminar un libro
