import { useState } from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import { Badge } from "reactstrap";

import alertify from "alertifyjs";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../redux/cartSlice";
import { deleteFromCart } from "../../redux/cartSlice";

import { BsBasket3Fill, BsBasket3 } from "react-icons/bs";
import Logout from "./Logout";
import { userNameSelector } from "../../redux/loginSlice";

function UserSummary() {
  const [shown, setShown] = useState(false);
  const userName = useSelector(userNameSelector);

  const dispatch = useDispatch();

  return (
    <>
      <NavDropdown
        title={userName}
        drop="down"
        show={shown}
        onToggle={() => setShown(!shown)}
        align="end"
        className="btn btn-sm btn-warning text-decoration-none p-0 rounded-pill"
      >
        <NavDropdown.Item href="#">
          <Badge color="success" className="ms-2">
            Options
          </Badge>
        </NavDropdown.Item>

        <NavDropdown.Divider />
        <Logout
          onClick={() => setShown(false)}
          className="d-flex justify-content-center"
        />
      </NavDropdown>
    </>
  );
}

export default UserSummary;
