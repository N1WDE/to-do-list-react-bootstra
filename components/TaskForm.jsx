import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

function TaskForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date) return;

    dispatch(
      addTask({
        id: Date.now(),
        title,
        date
      })
    );

    setTitle("");
    setDate("");
  };

  return (
    <Card className="form-card">
      <Card.Body>
        <h3 className="section-title">Agregar tarea</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tarea</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Escribe tu meta..."
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha límite</Form.Label>
            <Form.Control
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </Form.Group>

          <Button type="submit" className="add-btn">
            Agregar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TaskForm;