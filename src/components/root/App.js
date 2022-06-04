import "./App.css";
import { Container } from "reactstrap";
import DashboardUser from "./DashboardUser";
import DashboardAdmin from "./DashboardAdmin";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
import Navi from "../navi/Navi";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import CategoryList from "../categories/CategoryList";

export default function App() {
  return (
    <div className="nonfooter">
      <Navi />
      <Container className="containe">
        <CategoryList />
        <Header />
        <Routes>
          <Route path="/" element={<DashboardUser />} />
          <Route path="admin" element={<DashboardAdmin />} />
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
