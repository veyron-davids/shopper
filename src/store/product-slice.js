import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "prod",
  initialState: { products: [] },
  reducers: {
    getProducts(state, action) {
      state.products = action.payload.products;
    },
    
  },
});

export const productActions = productSlice.actions;

export default productSlice;
