import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeTask } from "../redux/taskSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <Card className="task-card">
      <Card.Body className="task-body">
        <div>
          <h5>{task.title}</h5>
          <small>{task.date}</small>
        </div>

        <Button
          variant="danger"
          onClick={() => dispatch(removeTask(task.id))}
        >
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TaskItem;