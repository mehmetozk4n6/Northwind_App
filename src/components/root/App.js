import "./App.css";
import { Container } from "reactstrap";

import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
import Navi from "../navi/Navi";
import Footer from "../footer/Footer";
import ProductListUser from "../products/ProductListUser";
import ProductListAdmin from "../products/ProductListAdmin";

export default function App() {
  return (
    <div>
      <Navi />
      <Container className="containe">
        {/* <CategoryList /> */}
        <Routes>
          <Route path="/" element={<ProductListUser />} />
          <Route path="admin" element={<ProductListAdmin />} />
          <Route path="saveproduct" element={<AddOrUpdateProduct />} />
          <Route
            path="saveproduct/:productId"
            element={<AddOrUpdateProduct />}
          />
          <Route path="cart" element={<CartDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="saveproduct/*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}
