import { useEffect } from "react";
import { Badge } from "reactstrap";
import alertify from "alertifyjs";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector, getProducts } from "../../redux/productSlice";
import { currentCategorySelector } from "../../redux/categorySlice";
import { addToCart, cartSelector, removeFromCart } from "../../redux/cartSlice";

import PaginatedItems from "./PaginatedItems";
import SearchBar from "./SearchBar";
import { useState } from "react";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const cart = useSelector(cartSelector);
  const currentCategory = useSelector(currentCategorySelector);
  const [searchValue, setSearchValue] = useState("");
  const filteredProducts1 =
    currentCategory === ""
      ? products
      : products.filter((product) => product.categoryId === currentCategory.id);
  const filteredProducts =
    searchValue === ""
      ? filteredProducts1
      : filteredProducts1?.filter((item) =>
          item.productName.includes(searchValue)
        );

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
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="d-flex flex-wrap">
        <PaginatedItems
          filteredProducts={filteredProducts}
          findItem={findItem}
          removeFromCart1={removeFromCart1}
          addToCart1={addToCart1}
        />
      </div>
    </div>
  );
}

export default ProductList;
