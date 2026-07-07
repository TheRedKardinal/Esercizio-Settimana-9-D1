import "./App.css";
import NavbarRender from "./assets/componets/NavBar";
import HeroRender from "./assets/componets/Hero";
import ListRender from "./assets/componets/List";
import FooterRender from "./assets/componets/Footer";
import { useState } from "react";
import books from "./assets/dati/fantasy.json";
import Reviews from "./assets/componets/Reviews";
import { Row, Col } from "react-bootstrap";

const App = function () {
  const [query, setQuery] = useState("");
  const [selectedBookId, setSelectedBookId] = useState(null);
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <header>
        <NavbarRender onSearch={setQuery} />
      </header>
      <main>
        <HeroRender />
        <Row className="mx-0">
          <Col md={9}>
            <ListRender
              books={filteredBooks}
              selectedBookId={selectedBookId}
              onSelectBook={setSelectedBookId}
            />
          </Col>
          <Col md={3}>
            <aside>
              <Reviews bookId={selectedBookId} />
            </aside>
          </Col>
        </Row>
      </main>
      <footer>
        <FooterRender />
      </footer>
    </>
  );
};
export default App;
