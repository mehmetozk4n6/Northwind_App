import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
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
      state.totalPrice += parseInt(action.payload.product.unitPrice);
    },
    removeFromCart: (state, action) => {
      let addedItem = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (addedItem) {
        state.cart.forEach((item) => {
          if (item.product.id === action.payload.product.id) {
            item.quantity -= 1;
          }
        });
      }
      state.totalPrice -= parseInt(action.payload.product.unitPrice);
      state.cart = state.cart?.filter((item) => item.quantity !== 0);
    },
    deleteFromCart: (state, action) => {
      let addedItem = state.cart.find(
        (item) => item.product.id === action.payload
      );
      state.totalPrice -= addedItem.quantity * addedItem.product.unitPrice;

      state.cart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;
export const cartSelector = (state) => state.cart.cart;
export const totalPriceSelector = (state) => state.cart.totalPrice;

export default cartSlice.reducer;
