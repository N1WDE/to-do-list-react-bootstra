const express = require("express");

const auth = require("./middleware/auth");

const taskRoutes = require("./routes/tasks");
const goalRoutes = require("./routes/goals");

const app = express();

app.use(express.json());

app.use(auth);

app.use(taskRoutes);
app.use(goalRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});