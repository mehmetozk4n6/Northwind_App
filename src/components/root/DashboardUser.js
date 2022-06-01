import { Col, Row } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ProductListUser from "../products/ProductListUser";

export default function Dashboard() {
  return (
    <div>
      {" "}
      <Row>
        <Col xs="3">
          <CategoryList />
        </Col>
        <Col xs="9">
          <ProductListUser />
        </Col>
      </Row>
    </div>
  );
}
