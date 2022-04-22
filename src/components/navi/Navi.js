import { Container, Navbar, Nav } from "react-bootstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">North Wind App</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Link to="/">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="saveproduct">SaveProduct</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <CartSummary />
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
