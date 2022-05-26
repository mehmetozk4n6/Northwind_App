import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const res = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/products`
  );
  return res.data;
});

export const saveProductApi = createAsyncThunk(
  "product/saveProductApi",
  async (product) => {
    const res = await fetch(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/products/` +
        (product.id || ""),
      {
        method: product.id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product),
      }
    );
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    savedProduct: [],
    status: "idle",
    error: "",
  },
  reducers: {
    saveProduct: (state, action) => {
      state.savedProduct = [...state.savedProduct, action.payload];
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = "succeeded";
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const productsSelector = (state) => state.product.products;
export const statusSelector = (state) => state.product.status;
export const errorSelector = (state) => state.product.error;

export default productSlice.reducer;

export const { saveProduct } = productSlice.actions;
