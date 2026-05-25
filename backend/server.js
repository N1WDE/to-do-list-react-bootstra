require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const auth = require("./middleware/auth");

const taskRoutes = require("./routes/tasks");
const goalRoutes = require("./routes/goals");

const app = express();

connectDB();

app.use(express.json());

app.use(auth);

app.use(taskRoutes);
app.use(goalRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});