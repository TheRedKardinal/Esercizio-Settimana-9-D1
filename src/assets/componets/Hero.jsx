import { Container } from "react-bootstrap";

function HeroRender() {
  return (
    <>
      <Container fluid className="bg-light hero mb-3">
        <h1 className="text-black">Welcome to EpiBooks</h1>
        <p>We list books</p>
      </Container>
    </>
  );
}

export default HeroRender;
