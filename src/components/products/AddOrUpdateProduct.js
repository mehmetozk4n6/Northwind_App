import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productAction";
import { getProducts } from "../../redux/actions/productAction";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
}) {
  let { productId } = useParams();
  const product2 =
    productId && products.length > 0 ? getProductById(products, productId) : {};
  let navigate = useNavigate();

  const [product, setProduct] = useState(product2);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
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
    saveProduct(product).then(() => {
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

function mapStateToProps(state) {
  return {
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
