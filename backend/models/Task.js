const express = require("express");

const router = express.Router();

const Task = require("../models/Task");

router.get("/getTasks", async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Error obteniendo tareas"
    });
  }
});

router.post("/addTask", async (req, res) => {
  try {
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
      message: "Tarea agregada",
      newTask
    });
  } catch (error) {
    res.status(500).json({
      message: "Error agregando tarea"
    });
  }
});

router.delete("/removeTask/:id", async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      message: "Error eliminando tarea"
    });
  }
});

module.exports = router;