import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";
import Login from "../login/Login";
import { Button } from "reactstrap";
import { AiOutlineHome } from "react-icons/ai";

import Register from "../login/Register";

function Navi() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showr, setShowr] = useState(false);
  const handleCloser = () => setShowr(false);
  const handleShowr = () => setShowr(true);

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
              <Nav.Item className="me-3">
                <Button variant="danger" onClick={handleShowr}>
                  Register
                </Button>
                <Register handleClose={handleCloser} show={showr} />
              </Nav.Item>
            </Nav>
            <CartSummary />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
