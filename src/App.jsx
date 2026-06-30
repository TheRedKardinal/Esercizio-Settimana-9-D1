import "./App.css";
import NavbarRender from "./assets/componets/NavBar";
import HeroRender from "./assets/componets/Hero";
import ListRender from "./assets/componets/List";
import FooterRender from "./assets/componets/Footer";

const App = function () {
  return (
    <>
      <header>
        <NavbarRender />
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
