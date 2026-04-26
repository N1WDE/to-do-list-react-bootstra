# Actividad Unidad II - React + Redux Toolkit

## Descripción

Aplicación web tipo **To Do List** desarrollada con **React**, **Redux Toolkit**, **React Bootstrap** y **SASS (SCSS)**.

El objetivo de la aplicación es permitir al usuario gestionar tareas y metas personales, pudiendo:

* Agregar nuevas tareas
* Definir una fecha límite
* Visualizar tareas en una lista
* Eliminar tareas
* Actualizar la interfaz en tiempo real mediante manejo de estado global con Redux

**Nota:** La aplicación no utiliza base de datos ni backend, por lo que la información no persiste al recargar o cerrar la aplicación.

---

## Tecnologías utilizadas

* React
* Redux Toolkit
* React Redux
* React Bootstrap
* Bootstrap 5
* SASS / SCSS

---

## Estructura del proyecto

```text
src/
 ├── components/
 │    ├── NavbarComponent.jsx
 │    ├── TaskForm.jsx
 │    ├── TaskItem.jsx
 │    └── TaskList.jsx
 │
 ├── redux/
 │    ├── store.js
 │    └── taskSlice.js
 │
 ├── styles/
 │    └── main.scss
 │
 ├── App.jsx
 └── index.jsx
```

---

## Instalación y ejecución

### 1. Clonar repositorio

```bash
git clone https://github.com/TU-USUARIO/TU-REPOSITORIO.git
```

### 2. Entrar al proyecto

```bash
cd TU-REPOSITORIO
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar proyecto

```bash
npm run dev
```

---

## Dependencias principales

```json
{
  "react": "18.2.0",
  "react-dom": "18.2.0",
  "bootstrap": "5.3.8",
  "react-bootstrap": "2.10.10",
  "react-redux": "9.2.0",
  "@reduxjs/toolkit": "2.11.2",
  "sass": "1.77.2"
}
```

---

## Funcionalidades implementadas

* Gestión de estado global con Redux Toolkit
* Creación dinámica de tareas
* Eliminación dinámica de tareas
* Interfaz responsive
* Diseño moderno oscuro
* Arquitectura modular basada en componentes
* Estilos implementados con SCSS

---

## Rama de desarrollo

La actividad fue desarrollada en la rama:

```bash
semana2
```

---

## Autor

Edwin Granados
