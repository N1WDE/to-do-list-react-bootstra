
# Cambios realizados en Semana 5

## Persistencia de datos

Se eliminó el almacenamiento temporal en arreglos y se implementó una base de datos MongoDB.

---

## Modelos de MongoDB

Se agregaron modelos utilizando Mongoose:

* Task.js
* Goal.js

---

También se mantiene el middleware de autenticación utilizando API Key.

---

# Tecnologías utilizadas

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* Nodemon

---



## Conexión automática a la base de datos

La conexión a MongoDB se realiza automáticamente al iniciar el servidor.

Archivo utilizado:

```text
config/db.js
```

---

## CRUD conectado a base de datos

Los endpoints ahora realizan operaciones reales sobre MongoDB:

* GET -> consulta documentos
* POST -> inserta documentos
* DELETE -> elimina documentos

---

## Middleware de autenticación

Se mantiene el middleware Authorization mediante API Key.

Header requerido:

```text
Authorization: GIANCARLO_API_KEY
```

---

# Endpoints

## Tasks

### Obtener tareas

```http
GET /getTasks
```

### Agregar tarea

```http
POST /addTask
```

### Eliminar tarea

```http
DELETE /removeTask/:id
```

---

## Goals

### Obtener metas

```http
GET /getGoals
```

### Agregar meta

```http
POST /addGoal
```

### Eliminar meta

```http
DELETE /removeGoal/:id
```

---

# Variables importantes

En `config/db.js` se debe colocar la URI de MongoDB Atlas.

Ejemplo:

```text
mongodb+srv://usuario:password@cluster.mongodb.net/todolist
```

---

# Códigos HTTP

* 200 -> Solicitud correcta
* 400 -> Datos inválidos
* 401 -> Api key incorrecta

---
