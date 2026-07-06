import "./App.css";
import NavbarRender from "./assets/componets/NavBar";
import HeroRender from "./assets/componets/Hero";
import ListRender from "./assets/componets/List";
import FooterRender from "./assets/componets/Footer";
import { useState } from "react";
import books from "./assets/dati/fantasy.json";

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
        <ListRender
          books={filteredBooks}
          selectedBookId={selectedBookId}
          onSelectBook={setSelectedBookId}
        />
      </main>
      <footer>
        <FooterRender />
      </footer>
    </>
  );
};
export default App;
