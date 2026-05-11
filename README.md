# Cambios realizados en esta actualización (Semana 4)

En esta versión se realizaron varias mejoras respecto a la entrega anterior:

* Separación de rutas utilizando Express Router
* Creación de middleware para autenticación mediante API Key
* Implementación de códigos de respuesta HTTP
* Validación de parámetros enviados por el cliente
* Separación entre lógica de tareas y metas
* Mejor organización del proyecto
* Uso de endpoints REST

También  corrigi la estructura general del backend para evitar tener toda la lógica dentro de un solo archivo.

---
# Códigos de respuesta HTTP

## 200

Se retorna cuando la solicitud fue realizada correctamente.

## 400

Se retorna cuando los parámetros enviados son incorrectos o faltan datos.

Ejemplo:

* title vacío
* date vacío
* id inexistente

## 401

Se retorna cuando la API Key es incorrecta o no fue enviada.

---

# Estructura del proyecto

```text
todo-list-app/
 ├── middleware/
 │    └── auth.js
 │
 ├── routes/
 │    ├── tasks.js
 │    └── goals.js
 │
 ├── node_modules/
 ├── package.json
 ├── package-lock.json
 ├── server.js
 ├── .gitignore
 └── README.md
```

---


# Middleware de autenticación

El backend cuenta con un middleware que valida el header Authorization.

Si la API Key no es enviada o es incorrecta, el servidor responde con:

```text
401 Unauthorized
```

API Key utilizada:

```text
GIANCARLO_API_KEY
```

Ejemplo de header:

```text
Authorization: GIANCARLO_API_KEY
```

---

# Endpoints disponibles

## Tasks

### Obtener tareas

```http
GET /getTasks
```

### Agregar tarea

```http
POST /addTask
```

Body:

```json
{
  "title": "Estudiar Express",
  "date": "2026-05-20"
}
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

Body:

```json
{
  "title": "Aprender Backend",
  "date": "2026-06-01"
}
```

### Eliminar meta

```http
DELETE /removeGoal/:id
```

---

# Instalación del proyecto

## 1. Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## 2. Entrar al proyecto

```bash
cd todo-list-app
```

---

## 3. Instalar dependencias

```bash
npm install
```

---

## 4. Ejecutar servidor

Modo normal:

```bash
npm start
```

Modo desarrollo:

```bash
npm run dev
```

---

# Puerto utilizado

El servidor corre en:

```text
http://localhost:3000
```
