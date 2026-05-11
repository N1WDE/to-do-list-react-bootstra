const express = require("express");
const router = express.Router();

let tasks = [
  {
    id: 1,
    title: "Estudiar Node",
    date: "2026-05-15"
  }
];

router.get("/getTasks", (req, res) => {
  res.status(200).json(tasks);
});

router.post("/addTask", (req, res) => {
  const { title, date } = req.body;

  if (!title || !date) {
    return res.status(400).json({
      message: "Datos incompletos"
    });
  }

  const newTask = {
    id: Date.now(),
    title,
    date
  };

  tasks.push(newTask);

  res.status(200).json({
    message: "Tarea agregada",
    task: newTask
  });
});

router.delete("/removeTask/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const taskExists = tasks.find((task) => task.id === id);

  if (!taskExists) {
    return res.status(400).json({
      message: "Tarea no encontrada"
    });
  }

  tasks = tasks.filter((task) => task.id !== id);

  res.status(200).json({
    message: "Tarea eliminada"
  });
});

module.exports = router;