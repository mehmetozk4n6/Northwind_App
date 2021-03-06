import "./App.css";
import { Container } from "reactstrap";
import { Suspense, lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// import CartDetail from "../cart/CartDetail";
// import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
// import NotFound from "../common/NotFound";
import Navi from "../navi/Navi";
import Footer from "../footer/Footer";
// import ProductListUser from "../products/ProductListUser";
// import ProductListAdmin from "../products/ProductListAdmin";

const ProductListUser = lazy(() => import("../products/ProductListUser"));
const ProductListAdmin = lazy(() => import("../products/ProductListAdmin"));
const AddOrUpdateProduct = lazy(() => import("../products/AddOrUpdateProduct"));
const CartDetail = lazy(() => import("../cart/CartDetail"));
const NotFound = lazy(() => import("../common/NotFound"));

export default function App() {
  return (
    <div>
      <Router>
        <Navi />
      </Router>

      <Container className="containe">
        <Router>
          <Suspense fallback={<div>Loading ....</div>}>
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
          </Suspense>
        </Router>
      </Container>
      <Footer />
    </div>
  );
}
