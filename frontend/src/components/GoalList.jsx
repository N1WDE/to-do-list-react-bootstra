import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  setGoals,
  removeGoalReducer
} from "../redux/goalSlice";

function GoalList() {
  const dispatch = useDispatch();

  const goals = useSelector(
    (state) => state.goals.goals
  );

  useEffect(() => {
    getGoals();
  }, []);

  const getGoals = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/getGoals",
        {
          headers: {
            Authorization: "GIANCARLO_API_KEY"
          }
        }
      );

      const data = await response.json();

      dispatch(setGoals(data));
    } catch (error) {
      console.log(error);
    }
  };

  const removeGoal = async (id) => {
    try {
      await fetch(
        `http://localhost:3000/removeGoal/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: "GIANCARLO_API_KEY"
          }
        }
      );

      dispatch(removeGoalReducer(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="list-container">
      <h2>Metas</h2>

      {goals.map((goal) => (
        <div key={goal._id} className="card">
          <div>
            <h3>{goal.title}</h3>
            <p>{goal.date}</p>
          </div>

          <button
            onClick={() => removeGoal(goal._id)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default GoalList;