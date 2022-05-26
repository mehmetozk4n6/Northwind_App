import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    category: categorySlice,
  },
});
