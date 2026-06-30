import books from "../dati/fantasy.json";
import { Row, Col } from "react-bootstrap";

function ListRender() {
  return (
    <Row>
      {books.map((book) => (
        <Col xs={12} md={4}>
          <img src={book.img} />
          <h2>{book.title}</h2>
        </Col>
      ))}
    </Row>
  );
}

export default ListRender;
