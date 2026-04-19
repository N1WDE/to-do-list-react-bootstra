import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Form, Button, Card } from "react-bootstrap";
import "./styles.css";

export default function App() {
  const tareas = [
    { id: 1, nombre: "Ir al gym", fecha: "2026-04-20" },
    { id: 2, nombre: "Estudiar React", fecha: "2026-04-22" }
  ];

  return (
    <>
      {/* NAVBAR */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>To Do List</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-4">
        {/* FORM */}
        <Card className="p-3 mb-4 shadow">
          <h5>Agregar nueva tarea</h5>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tarea</Form.Label>
              <Form.Control type="text" placeholder="Ej: Ir al gym" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fecha límite</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Button variant="primary">Agregar</Button>
          </Form>
        </Card>

        {/* LISTA */}
        {tareas.map((tarea) => (
          <Card
            key={tarea.id}
            className="p-3 mb-3 shadow-sm d-flex flex-row justify-content-between align-items-center"
          >
            <div>
              <strong>{tarea.nombre}</strong>
              <p className="mb-0 text-muted">Fecha: {tarea.fecha}</p>
            </div>

            <Button variant="danger">Eliminar</Button>
          </Card>
        ))}
      </Container>
    </>
  );
}