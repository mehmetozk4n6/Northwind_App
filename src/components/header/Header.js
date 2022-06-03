import React from "react";
import { Badge } from "reactstrap";
import { currentCategorySelector } from "../../redux/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import {
  showCategories,
  shownCategoriesSelector,
} from "../../redux/categorySlice";

function Header() {
  const dispatch = useDispatch();
  const currentCategory = useSelector(currentCategorySelector);
  const shownCategories = useSelector(shownCategoriesSelector);
  return (
    <div className="d-flex">
      <h3
        className="btn mt-3"
        onClick={() => dispatch(showCategories(!shownCategories))}
      >
        {" "}
        <Badge color="warning" className="p-2 rotate">
          Categories
        </Badge>
      </h3>
      <h3 className="ms-5">
        <Badge color="warning">Products</Badge>
        <Badge color="success">{currentCategory.categoryName}</Badge>
      </h3>
    </div>
  );
}

export default Header;
