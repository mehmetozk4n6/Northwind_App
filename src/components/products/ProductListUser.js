import { useEffect, useState } from "react";
import {
  Badge,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import alertify from "alertifyjs";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector, getProducts } from "../../redux/productSlice";
import { currentCategorySelector } from "../../redux/categorySlice";
import { addToCart, cartSelector, removeFromCart } from "../../redux/cartSlice";
import boxes from "../../assets/boxes.jpeg";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const cart = useSelector(cartSelector);
  const currentCategory = useSelector(currentCategorySelector);
  const filteredProducts =
    currentCategory === ""
      ? products
      : products.filter((product) => product.categoryId === currentCategory.id);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToCart1 = (product, quantity) => {
    dispatch(addToCart({ quantity: quantity, product }));
    alertify.success(product.productName + "1 adet sepete eklendi");
  };

  const removeFromCart1 = (product, quantity) => {
    let num = findItem(product) ? findItem(product).quantity : 0;
    if (num > 0) {
      dispatch(removeFromCart({ quantity: quantity, product }));
      alertify.warning(product.productName + "1 adet sepetten cıkarıldı.");
    }
  };

  const findItem = (product) =>
    cart?.find((item) => item.product.id === product.id);

  return (
    <div>
      <h3>
        <Badge color="warning">Products</Badge>
        <Badge color="success">{currentCategory.categoryName}</Badge>
      </h3>

      <div className="d-flex flex-wrap">
        {filteredProducts?.map((product) => (
          <div
            key={product.id}
            className="m-3 d-flex flex-column flex-wrap w-25 justify-content-center align-items-center"
          >
            <Card className="w-100">
              <CardImg
                top
                width="100%"
                src={boxes}
                alt="Card image cap"
                className="p-1"
              />
              <CardBody className="d-flex flex-column align-items-center justify-content-center">
                <CardTitle className="h-50 text-center cardtitle">
                  {product.productName}
                </CardTitle>
                <CardSubtitle className="text-center">{`${product.unitPrice} $`}</CardSubtitle>
                {/* <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText> */}
                <div className="d-flex flex-wrap justify-content-between">
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => removeFromCart1(product, 1)}
                  >
                    -
                  </Button>
                  <div className="quantity p-1 ms-2 me-2">
                    {findItem(product) ? findItem(product).quantity : 0}
                  </div>
                  <Button
                    size="sm"
                    variant="outline-success"
                    onClick={() => addToCart1(product, 1)}
                  >
                    +
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
