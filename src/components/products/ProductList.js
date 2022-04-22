import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productAction";
import * as cartActions from "../../redux/actions/cartActions";
import { Badge, Table, Button } from "reactstrap";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

function ProductList(props) {
  useEffect(() => {
    props.actions.getProducts();
  }, []);
  const addToCart1 = (product) => {
    props.actions.addToCart({ quantity: 1, product });
    alertify.notify(product.productName + " sepete eklendi");
  };
  return (
    <div>
      <h3>
        <Badge color="warning">Products</Badge>
        <Badge color="success">{props.currentCategory.categoryName}</Badge>
      </h3>
      <Table hover responsive striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Unit in Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>
                <Link to={"/saveproduct/" + product.id}>
                  {product.productName}
                </Link>
              </td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td>
                <Button color="success" onClick={() => addToCart1(product)}>
                  Ekle
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
    products: state.productListReducer,
    currentCategory: state.changeCategoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
