import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: { products: productSlice.reducer, user: authSlice.reducer },
});

export default store;
