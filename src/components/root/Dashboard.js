import { Col, Row } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

import React from "react";

export default function Dashboard() {
  return (
    <div>
      {" "}
      <Row>
        <Col xs="3">
          <CategoryList />
        </Col>
        <Col xs="9">
          <ProductList />
        </Col>
      </Row>
    </div>
  );
}
