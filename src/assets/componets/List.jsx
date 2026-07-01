import { Container, Row, Col } from "react-bootstrap";

function ListRender(props) {
  return (
    <Container fluid>
      <Row className="g-3">
        {props.books.map((book) => (
          <Col key={book.asin} xs={12} md={4}>
            <div className="book-card gap-4">
              <img src={book.img} />
              <h2 className="text-black m-3">{book.title}</h2>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default ListRender;
