import { useState } from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import { Badge, Button } from "reactstrap";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../redux/cartSlice";
import { deleteFromCart } from "../../redux/cartSlice";
import Price from "./Price";

function CartSummary() {
  const [shown, setShown] = useState(false);
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();
  const deleteFrom = (product) => {
    dispatch(deleteFromCart(product.id));
    alertify.error(product.productName + " sepetten silindi");
  };
  const renderEmpty = () => (
    <Nav className="ms-auto">
      <Nav.Item>Sepetiniz Boş</Nav.Item>
    </Nav>
  );
  const renderSummary = () => (
    <NavDropdown
      title="Sepet"
      drop="down"
      show={shown}
      onToggle={() => setShown(!shown)}
      align="end"
    >
      {cart.map((cartItem) => (
        <NavDropdown.Item key={cartItem.product.id} href="#">
          <Button
            color="danger"
            outline
            size="sm"
            className="me-2"
            onClick={() => deleteFrom(cartItem.product)}
          >
            Sil
          </Button>
          {cartItem.product.productName}
          <Badge color="success" className="ms-2">
            {cartItem.quantity}{" "}
          </Badge>
        </NavDropdown.Item>
      ))}
      <NavDropdown.Divider />
      <Nav.Item className="d-flex flex-row-reverse">
        <Price />
      </Nav.Item>
      <Nav.Item className="d-flex justify-content-center">
        <Button color="secondary" outline onClick={() => setShown(false)}>
          <Link className="text-decoration-none text-dark" to="cart">
            Sepete Git
          </Link>
        </Button>
      </Nav.Item>
    </NavDropdown>
  );
  return <div>{cart?.length > 0 ? renderSummary() : renderEmpty()}</div>;
}

export default CartSummary;
