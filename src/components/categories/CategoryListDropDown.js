import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  categoriesSelector,
  changeCategory,
  currentCategorySelector,
  setItemOffset,
  showCarousel,
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
      dispatch(showCarousel(false));
    } else {
      dispatch(changeCategory(category));
      dispatch(showCarousel(true));
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
        className="btn btn-sm btn-light text-decoration-none p-0 rounded-pill categorydropdown"
      >
        <NavDropdown.Item
          className="text-center"
          href="#"
          onClick={() => selectCategory("all")}
        >
          All
        </NavDropdown.Item>
        {categories?.map((category, index) => (
          <NavDropdown.Item
            href="#"
            key={index}
            onClick={() => selectCategory(category)}
            className="text-center"
          >
            {category.categoryName}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </>
  );
}

export default CategoryListDropDown;
