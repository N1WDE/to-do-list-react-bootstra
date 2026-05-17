const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

router.get("/getTasks", async (req, res) => {
  const tasks = await Task.find();

  res.status(200).json(tasks);
});

router.post("/addTask", async (req, res) => {
  const { title, date } = req.body;

  if (!title || !date) {
    return res.status(400).json({
      message: "Datos incompletos"
    });
  }

  const newTask = new Task({
    title,
    date
  });

  await newTask.save();

  res.status(200).json({
    message: "Tarea agregada"
  });
});

router.delete("/removeTask/:id", async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  if (!task) {
    return res.status(400).json({
      message: "Tarea no encontrada"
    });
  }

  await Task.findByIdAndDelete(id);

  res.status(200).json({
    message: "Tarea eliminada"
  });
});

module.exports = router;