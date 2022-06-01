import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/categories`
    );
    return res.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    currentCategory: "",
    categories: [],
    status: "idle",
    error: "",
    itemOffset: 0,
  },
  reducers: {
    changeCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    setItemOffset: (state, action) => {
      state.itemOffset = action.payload;
    },
  },
  extraReducers: {
    [getCategories.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.status = "succeeded";
    },
    [getCategories.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const categoriesSelector = (state) => state.category.categories;
export const currentCategorySelector = (state) =>
  state.category.currentCategory;
export const statusSelector = (state) => state.category.status;
export const errorSelector = (state) => state.category.error;
export const itemOffsetSelector = (state) => state.category.itemOffset;

export const { changeCategory, setItemOffset } = categorySlice.actions;

export default categorySlice.reducer;
