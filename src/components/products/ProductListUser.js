import { useEffect } from "react";
import alertify from "alertifyjs";
import { useDispatch, useSelector } from "react-redux";
import {
  productsSelector,
  getProducts,
  searchValueSelector,
} from "../../redux/productSlice";
import { currentCategorySelector } from "../../redux/categorySlice";
import { addToCart, cartSelector, removeFromCart } from "../../redux/cartSlice";

import PaginatedItems from "./PaginatedItems";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const cart = useSelector(cartSelector);
  const currentCategory = useSelector(currentCategorySelector);
  const searchValue = useSelector(searchValueSelector);

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
      <div className="d-flex flex-wrap mx-auto">
        <PaginatedItems
          filteredProducts={filteredProducts}
          findItem={findItem}
          removeFromCart1={removeFromCart1}
          addToCart1={addToCart1}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
}

export default ProductList;
