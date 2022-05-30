import { useEffect } from "react";
import { Badge, Table, Button } from "reactstrap";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector, getProducts } from "../../redux/productSlice";
import { currentCategorySelector } from "../../redux/categorySlice";
import { addToCart } from "../../redux/cartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const currentCategory = useSelector(currentCategorySelector);
  const filteredProducts =
    currentCategory === ""
      ? products
      : products.filter((product) => product.categoryId === currentCategory.id);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const addToCart1 = (product) => {
    dispatch(addToCart({ quantity: 1, product }));
    alertify.notify(product.productName + " sepete eklendi");
  };

  return (
    <div>
      <h3>
        <Badge color="warning">Products</Badge>
        <Badge color="success">{currentCategory.categoryName}</Badge>
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
          {filteredProducts?.map((product) => (
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

export default ProductList;
