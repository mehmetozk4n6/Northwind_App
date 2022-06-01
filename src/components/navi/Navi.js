import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";
import Login from "../login/Login";
import { Button } from "reactstrap";
import { AiOutlineHome } from "react-icons/ai";

function Navi() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar bg="warning" expand="lg" className="mb-2">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <AiOutlineHome size="2.5em" color="brown" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item className="me-3">
                <Button variant="danger" onClick={handleShow}>
                  Login
                </Button>
                <Login handleClose={handleClose} show={show} />
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
