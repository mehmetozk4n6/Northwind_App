import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Badge } from "reactstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";

import {
  categoriesSelector,
  changeCategory,
  currentCategorySelector,
  setItemOffset,
  showCategories,
} from "../../redux/categorySlice";
import { getCategories } from "../../redux/categorySlice";

function CategoryListDropDown() {
  const [shown, setShown] = useState(false);

  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const currentCategory = useSelector(currentCategorySelector);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const selectCategory = (category) => {
    if (category === "all") {
      dispatch(changeCategory(""));
      dispatch(showCategories(false));
    } else {
      dispatch(changeCategory(category));
      dispatch(showCategories(true));
    }
    dispatch(setItemOffset(0));
  };

  return (
    <>
      <NavDropdown
        title={
          currentCategory === "" ? "Categories" : currentCategory.categoryName
        }
        drop="down"
        show={shown}
        onToggle={() => setShown(!shown)}
        align="end"
        className="btn btn-sm btn-warning text-decoration-none p-0 rounded-pill"
      >
        <NavDropdown.Item href="#" onClick={() => selectCategory("all")}>
          All
        </NavDropdown.Item>
        {categories?.map((category, index) => (
          <NavDropdown.Item
            href="#"
            key={index}
            onClick={() => selectCategory(category)}
          >
            {category.categoryName}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </>
  );
}

export default CategoryListDropDown;
