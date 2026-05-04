const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON y habilitar CORS
app.use(express.json());
app.use(cors());

// Arreglos para almacenar datos en memoria (se reinician si la app se detiene)
let tasks = [];
let goals = [];

// API Key definida por el estudiante[cite: 1]
const API_KEY = "mi_apikey_secreta_123";

// Middleware de autenticación[cite: 1]
const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (authHeader === API_KEY) {
        next();
    } else {
        res.status(401).json({ error: "No autorizado. API Key inválida o ausente." });
    }
};

// Aplicar el middleware a todas las rutas debajo de esta línea
app.use(authMiddleware);

// --- ENDPOINTS GET ---[cite: 1]
app.get('/getTasks', (req, res) => {
    res.json(tasks);
});

app.get('/getGoals', (req, res) => {
    res.json(goals);
});

// --- ENDPOINTS POST ---[cite: 1]
app.post('/addTask', (req, res) => {
    const { title, deadline } = req.body;
    const newTask = { id: Date.now().toString(), title, deadline, type: 'task' };
    tasks.push(newTask);
    res.status(201).json({ message: "Tarea agregada exitosamente", data: newTask });
});

app.post('/addGoal', (req, res) => {
    const { title, deadline } = req.body;
    const newGoal = { id: Date.now().toString(), title, deadline, type: 'goal' };
    goals.push(newGoal);
    res.status(201).json({ message: "Meta agregada exitosamente", data: newGoal });
});

// --- ENDPOINTS DELETE ---[cite: 1]
app.delete('/removeTask', (req, res) => {
    const { id } = req.body;
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    
    if (tasks.length < initialLength) {
        res.json({ message: "Tarea eliminada exitosamente" });
    } else {
        res.status(404).json({ error: "Tarea no encontrada" });
    }
});

app.delete('/removeGoal', (req, res) => {
    const { id } = req.body;
    const initialLength = goals.length;
    goals = goals.filter(goal => goal.id !== id);
    
    if (goals.length < initialLength) {
        res.json({ message: "Meta eliminada exitosamente" });
    } else {
        res.status(404).json({ error: "Meta no encontrada" });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});