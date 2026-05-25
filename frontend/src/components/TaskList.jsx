import { useState } from "react";

import { useDispatch } from "react-redux";

import { addTaskReducer } from "../redux/taskSlice";

function TaskForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const addTask = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/addTask",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: "GIANCARLO_API_KEY"
          },

          body: JSON.stringify({
            title,
            date
          })
        }
      );

      const data = await response.json();

      dispatch(addTaskReducer(data.newTask));

      setTitle("");
      setDate("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={addTask} className="form-container">
      <h2>Agregar tarea</h2>

      <input
        type="text"
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">
        Agregar tarea
      </button>
    </form>
  );
}

export default TaskForm;