import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_SERVER } from "../config";
import http from "../services/httpService";
import transform from "./product-actions"
import { FETCH_DEALS } from "../config";

const initialState = {
  products: [],
  deals: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await http.get(PRODUCTS_SERVER);
    return response.data.products;
  }
);

export const fetchDeals = createAsyncThunk(
  "deals/fetchDeals",
  async () => {
    const response = await http.get(FETCH_DEALS);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = state.products.concat(action.payload);
    },
    [fetchDeals.fulfilled]: (state, action) => {
      state.deals = state.deals.concat(action.payload);
    },
    // [addNewPost.fulfilled]: (state, action) => {
    //   state.posts.push(action.payload);
    // },
  },
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;

export const selectAllProducts = (state) => state.products.products;
export const selectAllDeals = (state) => state.products.deals;
