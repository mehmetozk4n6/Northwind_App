import React from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { logoutUser } from "../../redux/loginSlice";

function Logout() {
  const dispatch = useDispatch();

  return (
    <Nav.Item className="me-3">
      <Button color="success" onClick={() => dispatch(logoutUser())}>
        Logout
      </Button>
    </Nav.Item>
  );
}

export default Logout;
