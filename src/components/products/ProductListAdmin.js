import { useEffect } from "react";
import { Badge, Table, Button } from "reactstrap";
// import alertify from "alertifyjs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector, getProducts } from "../../redux/productSlice";
import { currentCategorySelector } from "../../redux/categorySlice";
// import { addToCart } from "../../redux/cartSlice";
import { isAdminSelector } from "../../redux/loginSlice";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(productsSelector);
  const currentCategory = useSelector(currentCategorySelector);
  const filteredProducts =
    currentCategory === ""
      ? products
      : products.filter((product) => product.categoryId === currentCategory.id);
  const isAdmin = useSelector(isAdminSelector);

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [navigate, isAdmin]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  // const addToCart1 = (product) => {
  //   dispatch(addToCart({ quantity: 1, product }));
  //   alertify.notify(product.productName + " sepete eklendi");
  // };

  return (
    <div>
      <div className="d-flex justify-content-between m-1">
        <h3>
          <Badge color="warning">Products</Badge>
          <Badge color="success">{currentCategory.categoryName}</Badge>
        </h3>
        <Link
          to="/saveproduct/"
          className="bg-primary text-white p-2 rounded text-decoration-none"
        >
          Save Product
        </Link>
      </div>

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
              <td>{product.productName}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td>
                <Button className="btn btn-outline-secondary">
                  <Link
                    className="text-decoration-none text-white"
                    to={"/saveproduct/" + product.id}
                  >
                    Update
                  </Link>
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
