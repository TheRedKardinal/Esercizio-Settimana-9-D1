import "./App.css";
import NavbarRender from "./assets/componets/NavBar";
import HeroRender from "./assets/componets/Hero";
import ListRender from "./assets/componets/List";

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
    </>
  );
};

export default App;
