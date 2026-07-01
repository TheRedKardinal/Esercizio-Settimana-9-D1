import "./App.css";
import NavbarRender from "./assets/componets/NavBar";
import HeroRender from "./assets/componets/Hero";
import ListRender from "./assets/componets/List";
import FooterRender from "./assets/componets/Footer";
import { useState } from "react";

const App = function () {
  const [query, setQuery] = useState("");
  const filteredBooks = books.filter(book);
  return (
    <>
      <header>
        <NavbarRender onSearch={setQuery} />
      </header>
      <main>
        <HeroRender />
        <ListRender />
      </main>
      <footer>
        <FooterRender />
      </footer>
    </>
  );
};

export default App;
