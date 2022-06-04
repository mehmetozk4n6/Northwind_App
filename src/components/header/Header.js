import React from "react";
import { Badge } from "reactstrap";
import { currentCategorySelector } from "../../redux/categorySlice";
import { useSelector } from "react-redux";

function Header() {
  const currentCategory = useSelector(currentCategorySelector);

  return (
    <div className="d-flex">
      <h3 className="ms-5">
        <Badge color="warning">Products</Badge>
        <Badge color="success">{currentCategory.categoryName}</Badge>
      </h3>
    </div>
  );
}

export default Header;
