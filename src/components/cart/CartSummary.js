import { NavDropdown, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Badge, Button } from "reactstrap";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

function CartSummary(props) {
  const removeFromCart = (product) => {
    props.actions.removeFromCart(product);
    alertify.error(product.productName + " sepetten silindi");
  };
  const renderEmpty = () => (
    <Nav className="ms-auto">
      <Nav.Item>Sepetiniz Boş</Nav.Item>
    </Nav>
  );
  const renderSummary = () => (
    <NavDropdown title="Sepet" drop="down" align="end">
      {props.cart.map((cartItem) => (
        <NavDropdown.Item key={cartItem.product.id} href="#">
          <Button
            color="danger"
            outline
            size="sm"
            className="me-2"
            onClick={() => removeFromCart(cartItem.product)}
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
  return <div>{props.cart.length > 0 ? renderSummary() : renderEmpty()}</div>;
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
