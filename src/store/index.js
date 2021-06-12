import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import productReducer from "./product-slice";
import uploadReducer from "./upload-slice";

const store = configureStore({
  reducer: { products: productReducer, auth: authReducer, upload: uploadReducer },
});

export default store;
