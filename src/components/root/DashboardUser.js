import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { shownCategoriesSelector } from "../../redux/categorySlice";
import CategoryList from "../categories/CategoryList";
import ProductListUser from "../products/ProductListUser";

export default function Dashboard() {
  const shownCategories = useSelector(shownCategoriesSelector);

  return <ProductListUser />;
}
