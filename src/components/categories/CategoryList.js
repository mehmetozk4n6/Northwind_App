import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

import {
  categoriesSelector,
  changeCategory,
  currentCategorySelector,
} from "../../redux/categorySlice";
import { getProducts } from "../../redux/productSlice";
import { getCategories } from "../../redux/categorySlice";

function CategoryList() {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const currentCategory = useSelector(currentCategorySelector);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const selectCategory = (category) => {
    if (category === "all") {
      dispatch(changeCategory(""));
      // dispatch(getProducts());
    } else {
      dispatch(changeCategory(category));
      // dispatch(getProducts());
    }
  };
  return (
    <div>
      <h3>
        {" "}
        <Badge color="warning">Categories</Badge>
      </h3>
      <ListGroup>
        <ListGroupItem
          action
          active={currentCategory === ""}
          tag="button"
          onClick={() => selectCategory("all")}
        >
          Products
        </ListGroupItem>
        {categories.map((category) => (
          <ListGroupItem
            action
            active={category.id === currentCategory.id}
            tag="button"
            onClick={() => selectCategory(category)}
            key={category.id}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default CategoryList;
