# To Do List - Control de Tareas y Metas

Este proyecto es una aplicación web backend desarrollada con Node.js y Express para gestionar tareas y metas personales.

## Requisitos previos
- Node.js (Versión LTS recomendada)

## Instrucciones de ejecución

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Instala las dependencias necesarias ejecutando el siguiente comando:
   \`\`\`bash
   npm install
   \`\`\`
4. Inicia el servidor ejecutando:
   \`\`\`bash
   node server.js
   \`\`\`
5. El backend estará corriendo en `http://localhost:3000`.
6. Para probar la aplicación de manera visual, abre el archivo `index.html` directamente en tu navegador web.

## Consideraciones del API
Todas las peticiones a los endpoints requieren un header de autorización:
- **Key**: `Authorization`
- **Value**: `mi_apikey_secreta_123`

Los datos se guardan en arreglos en memoria temporalmente, por lo que se reiniciarán si se detiene la ejecución del servidor.
