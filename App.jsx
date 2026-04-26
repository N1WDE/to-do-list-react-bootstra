import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

import { Container } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <NavbarComponent />

      <Container className="mt-5">
        <TaskForm />
        <TaskList />
      </Container>
    </>
  );
}

export default App;