import NavbarComponent from "./components/NavbarComponent";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";

import "./styles/main.scss";

function App() {
  return (
    <div>
      <NavbarComponent />

      <div className="container">
        <TaskForm />

        <TaskList />

        <GoalForm />

        <GoalList />
      </div>
    </div>
  );
}

export default App;