const express = require("express");
const router = express.Router();

const Goal = require("../models/Goal");

router.get("/getGoals", async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

router.post("/addGoal", async (req, res) => {
  const { title, date } = req.body;

  if (!title || !date) {
    return res.status(400).json({
      message: "Datos incompletos"
    });
  }

  const newGoal = new Goal({
    title,
    date
  });

  await newGoal.save();

  res.status(200).json({
    message: "Meta agregada"
  });
});

router.delete("/removeGoal/:id", async (req, res) => {
  const { id } = req.params;

  const goal = await Goal.findById(id);

  if (!goal) {
    return res.status(400).json({
      message: "Meta no encontrada"
    });
  }

  await Goal.findByIdAndDelete(id);

  res.status(200).json({
    message: "Meta eliminada"
  });
});

module.exports = router;