import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Badge } from "reactstrap";
import { useSelector } from "react-redux";
import Logout from "./Logout";
import { userNameSelector } from "../../redux/loginSlice";

function UserSummary() {
  const [shown, setShown] = useState(false);
  const userName = useSelector(userNameSelector);

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
        <Logout onClick={() => setShown(false)} />
      </NavDropdown>
    </>
  );
}

export default UserSummary;
