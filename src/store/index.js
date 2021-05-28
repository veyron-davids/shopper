import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import productReducer from "./product-slice";

const store = configureStore({
  reducer: { products: productReducer, auth: authReducer },
});

export default store;
