const express = require("express");
const router = express.Router();

let goals = [
  {
    id: 1,
    title: "Aprender Express",
    date: "2026-06-01"
  }
];

router.get("/getGoals", (req, res) => {
  res.status(200).json(goals);
});

router.post("/addGoal", (req, res) => {
  const { title, date } = req.body;

  if (!title || !date) {
    return res.status(400).json({
      message: "Datos incompletos"
    });
  }

  const newGoal = {
    id: Date.now(),
    title,
    date
  };

  goals.push(newGoal);

  res.status(200).json({
    message: "Meta agregada",
    goal: newGoal
  });
});

router.delete("/removeGoal/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const goalExists = goals.find((goal) => goal.id === id);

  if (!goalExists) {
    return res.status(400).json({
      message: "Meta no encontrada"
    });
  }

  goals = goals.filter((goal) => goal.id !== id);

  res.status(200).json({
    message: "Meta eliminada"
  });
});

module.exports = router;