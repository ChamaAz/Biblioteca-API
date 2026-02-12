# 📚 Biblioteca API REST

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![REST API](https://img.shields.io/badge/API-REST-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/ChamaAz/Biblioteca-API?style=for-the-badge)

API REST para gestionar una colección de libros.  
Permite operaciones CRUD: crear, listar, obtener por ID, actualizar, marcar leído/no leído y eliminar libros.

---

## 🎯 Objetivo

Desarrollar un servicio backend que permita gestionar libros mediante operaciones CRUD:

- Crear un libro  
- Listar todos los libros  
- Obtener un libro por ID  
- Actualizar un libro  
- Marcar un libro como leído/no leído  
- Eliminar un libro  

> ⚠️ Nota: Los datos se almacenan en memoria usando un array (`data/books.js`).

---

## 🛠 Tecnologías

- **Node.js + Express** — Rapidez y facilidad para manejar JSON y rutas REST.
- **Array en memoria (`data/books.js`)** — Almacenamiento temporal de los libros.

### Opciones alternativas permitidas
- PHP con Laravel  
- Python con Flask o FastAPI  

---

## 🚀 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/ChamaAz/Biblioteca-API.git
cd Biblioteca-API
npm install
