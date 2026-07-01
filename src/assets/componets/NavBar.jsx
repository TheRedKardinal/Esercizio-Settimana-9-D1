import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import books from "../dati/fantasy.json";

function NavbarRender(props) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="my-1 d-flex justify-content-between">
        <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
        <Form.Group>
          <Form.Control
            type="text"
            onChange={(e) => {
              props.onSearch(e.target.value);
            }}
            placeholder="Cerca un libro..."
          />
        </Form.Group>
        <Nav className="">
          <Nav.Link href="#home" className="text-white">
            Shop
          </Nav.Link>
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
