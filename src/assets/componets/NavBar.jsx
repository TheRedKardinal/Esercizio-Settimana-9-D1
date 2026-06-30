import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarRender() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Shop</Nav.Link>
          <Nav.Link className="text-secondary" href="#features">
            About
          </Nav.Link>
          <Nav.Link className="text-secondary" href="#pricing">
            Browse
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarRender;
