import { useState } from "react";

import { useDispatch } from "react-redux";

import { addGoalReducer } from "../redux/goalSlice";

function GoalForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const addGoal = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/addGoal",
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

      dispatch(addGoalReducer(data.newGoal));

      setTitle("");
      setDate("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={addGoal} className="form-container">
      <h2>Agregar meta</h2>

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
        Agregar meta
      </button>
    </form>
  );
}

export default GoalForm;