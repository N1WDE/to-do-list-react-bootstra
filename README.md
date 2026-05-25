 Integración Frontend y Backend

## Descripción

En esta actualización se integró el frontend desarrollado en React con el backend desarrollado en Node.js y Express.

La aplicación ahora permite administrar tareas y metas desde la interfaz gráfica utilizando Redux Toolkit y peticiones HTTP hacia la API.

También se mejoró la estructura del backend agregando variables de entorno reales y manejo de errores.

---

# Tecnologías utilizadas

## Frontend

* React
* Redux Toolkit
* SCSS
* React Bootstrap

## Backend

* Node.js
* Express
* MongoDB
* Mongoose
* dotenv

---

# Cambios realizados en Semana 6

## Integración completa frontend-backend

Ahora las tareas y metas son consumidas desde MongoDB mediante endpoints REST.

---

## Redux Toolkit

Se implementaron reducers para:

* agregar tareas
* eliminar tareas
* agregar metas
* eliminar metas

---

## Variables de entorno

Se agregó dotenv para manejar:

* URI de MongoDB
* Puerto del servidor
* API Key

---

## Manejo de errores

Se agregaron bloques try/catch en los endpoints para evitar fallos del servidor ante errores de base de datos.

---

# Variables de entorno

Archivo `.env`

```env
MONGO_URI=TU_URI
PORT=3000
API_KEY=GIANCARLO_API_KEY
```

---

# Scripts

## Backend

```bash
npm run dev
```

## Frontend

```bash
npm run dev
```

---

# Endpoints

## Tasks

* GET /getTasks
* POST /addTask
* DELETE /removeTask/:id

## Goals

* GET /getGoals
* POST /addGoal
* DELETE /removeGoal/:id

---

