import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashboardUser from "./DashboardUser";
import DashboardAdmin from "./DashboardAdmin";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

export default function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" element={<DashboardUser />} />
        <Route path="admin" element={<DashboardAdmin />} />
        <Route path="saveproduct" element={<AddOrUpdateProduct />} />
        <Route path="saveproduct/:productId" element={<AddOrUpdateProduct />} />
        <Route path="cart" element={<CartDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="saveproduct/*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
