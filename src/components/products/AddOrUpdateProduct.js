import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { categoriesSelector, getCategories } from "../../redux/categorySlice";
import { productsSelector, saveProduct } from "../../redux/productSlice";
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let { productId } = useParams();
  const products = useSelector(productsSelector);
  const categories = useSelector(categoriesSelector);
  const [product, setProduct] = useState(product2);
  const [errors, setErrors] = useState({});

  const product2 =
    productId && products.length > 0 ? getProductById(products, productId) : {};

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
    setProduct(product2);
  }, [product2]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
    validate(name, value);
  }
  function validate(name, value) {
    if (name === "productName" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "Ürün ismi olmalidir",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "",
      }));
    }
  }
  function handleSave(event) {
    event.preventDefault();
    dispatch(saveProduct(product)).then(() => {
      navigate("/");
    });
  }

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

export function getProductById(products, productId) {
  let product = products.find(
    (product1) => product1.id === parseInt(productId)
  );
  return product;
}

export default AddOrUpdateProduct;
