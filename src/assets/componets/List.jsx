import books from "../dati/fantasy.json";
import { Row, Col } from "react-bootstrap";

function ListRender() {
  return (
    <Row>
      {books.map((book) => (
        <Col xs={12} md={4}>
          <div className="book-card">
            <img src={book.img} />
            <h2 className="text-black m-3">{book.title}</h2>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default ListRender;
