import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

function CartDetail(props) {
  const removeFromCart = (product) => {
    props.actions.removeFromCart(product);
    alertify.error(product.productName + " sepetten silindi");
  };
  return (
    <div>
      <h1>Sepet</h1>
      <Table hover responsive striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <th scope="row">{cartItem.product.id}</th>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.quantity}</td>

              <td>
                <Button
                  color="danger"
                  onClick={() => removeFromCart(cartItem.product)}
                >
                  Sil
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
