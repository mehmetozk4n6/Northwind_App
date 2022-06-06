import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import CartSummary from "../cart/CartSummary";
import { Link, useNavigate } from "react-router-dom";
import Login from "../login/Login";
import { Button } from "reactstrap";
import { IoHome } from "react-icons/io5";
import Register from "../login/Register";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCategory,
  setItemOffset,
  showCategories,
  shownCategoriesSelector,
} from "../../redux/categorySlice";
import { isAdminSelector, isUserSelector } from "../../redux/loginSlice";
import SearchBar from "../products/SearchBar";
import { setSearchValue } from "../../redux/productSlice";
import Logout from "../login/Logout";
import UserSummary from "../login/UserSummary";

function Navi() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showr, setShowr] = useState(false);
  const handleCloser = () => setShowr(false);
  const handleShowr = () => setShowr(true);
  const isAdmin = useSelector(isAdminSelector);
  const isUser = useSelector(isUserSelector);
  const shownCategories = useSelector(shownCategoriesSelector);

  const handleClick = () => {
    dispatch(setSearchValue(""));
    dispatch(setItemOffset(0));
    dispatch(showCategories(false));
    dispatch(changeCategory(""));
  };

  return (
    <div>
      <Navbar expand="md" className=" navbar fixed-top">
        <Container>
          <Navbar.Brand className="me-5">
            <Link to="/" onClick={handleClick}>
              <IoHome size="2em" color="#ffbb33" />
            </Link>
          </Navbar.Brand>
          <p
            className="btn btn-outline-warning mt-3"
            onClick={() => dispatch(showCategories(!shownCategories))}
          >
            Categories {shownCategories ? "↑" : "↓"}
          </p>
          <SearchBar />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isAdmin && (
                <Nav.Item className="me-3">
                  <Button variant="danger" onClick={() => navigate("admin")}>
                    Admin
                  </Button>
                  <Login handleClose={handleClose} show={show} />
                </Nav.Item>
              )}
              {isUser ? (
                <>
                  <UserSummary />
                </>
              ) : (
                <>
                  <Nav.Item className="me-3">
                    <Button color="success" onClick={handleShow}>
                      Login
                    </Button>
                    <Login handleClose={handleClose} show={show} />
                  </Nav.Item>
                  <Nav.Item className="me-3">
                    <Button color="warning" onClick={handleShowr}>
                      Register
                    </Button>
                    <Register handleClose={handleCloser} show={showr} />
                  </Nav.Item>
                </>
              )}
            </Nav>
            <CartSummary />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
