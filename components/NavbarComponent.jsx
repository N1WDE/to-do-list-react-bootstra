import { Navbar, Container } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar className="custom-navbar">
      <Container>
        <Navbar.Brand className="brand">
          To Do List
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;