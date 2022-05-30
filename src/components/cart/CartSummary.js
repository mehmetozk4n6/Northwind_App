import { NavDropdown, Nav } from "react-bootstrap";
import { Badge, Button } from "reactstrap";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../redux/cartSlice";
import { deleteFromCart } from "../../redux/cartSlice";

function CartSummary() {
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
    <NavDropdown title="Sepet" drop="down" align="end">
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
      <Nav.Item>
        <Link to="cart">Sepete Git</Link>
      </Nav.Item>
    </NavDropdown>
  );
  return <div>{cart?.length > 0 ? renderSummary() : renderEmpty()}</div>;
}

export default CartSummary;
