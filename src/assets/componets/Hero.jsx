import { Container } from "react-bootstrap";

function HeroRender() {
  return (
    <>
      <Container fluid className="bg-light">
        <h1 className="text-black m-0 mt-3 pt-5">Welcome to EpiBooks</h1>
        <p className="m-0 mb-3 pb-5">We list books</p>
      </Container>
    </>
  );
}

export default HeroRender;
