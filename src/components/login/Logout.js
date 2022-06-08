import React from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { logoutUser } from "../../redux/loginSlice";

function Logout() {
  const dispatch = useDispatch();

  return (
    <Nav.Item>
      <Button
        color="success"
        onClick={() => dispatch(logoutUser())}
        className="mx-auto"
      >
        Logout
      </Button>
    </Nav.Item>
  );
}

export default Logout;
