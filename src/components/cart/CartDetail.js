import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../redux/cartSlice";

function CartDetail() {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const removeFromCart = (product) => {
    dispatch(removeFromCart(product));
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
          {cart.map((cartItem) => (
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

export default CartDetail;
