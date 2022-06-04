import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";

import {
  categoriesSelector,
  changeCategory,
  currentCategorySelector,
  setItemOffset,
  shownCategoriesSelector,
} from "../../redux/categorySlice";
import { getCategories } from "../../redux/categorySlice";

function CategoryList() {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const currentCategory = useSelector(currentCategorySelector);
  const showCategories = useSelector(shownCategoriesSelector);
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
    dispatch(setItemOffset(0));
  };

  if (!showCategories) return;

  return (
    <div>
      <ListGroup className="text-center d-flex flex-row  my-1 ">
        <ListGroupItem
          action
          active={currentCategory === ""}
          tag="button"
          onClick={() => selectCategory("all")}
          className="category"
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
            className=" category"
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default CategoryList;
