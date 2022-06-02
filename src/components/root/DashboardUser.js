import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { showSelector } from "../../redux/categorySlice";
import CategoryList from "../categories/CategoryList";
import ProductListUser from "../products/ProductListUser";

export default function Dashboard() {
  const show = useSelector(showSelector);
  return (
    <div>
      <Row>
        {show ? (
          <>
            <Col xs="3">
              <CategoryList />
            </Col>
            <Col xs="9">
              <ProductListUser />
            </Col>
          </>
        ) : (
          <>
            <Col xs="12">
              <ProductListUser />
            </Col>
          </>
        )}
      </Row>
    </div>
  );
}
