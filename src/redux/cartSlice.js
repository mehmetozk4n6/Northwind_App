import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let addedItem = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (addedItem) {
        state.cart.forEach((item) => {
          if (item.product.id === action.payload.product.id) {
            item.quantity += 1;
          }
        });
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartSelector = (state) => state.cart.cart;

export default cartSlice.reducer;
