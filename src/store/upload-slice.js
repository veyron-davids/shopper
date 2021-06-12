import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UPLOAD_IMAGE, UPLOAD_SERVER } from "../config";
import http from "../services/httpService";

const initialState = {
  productInfo: {
    pname: "",
    description: "",
    price: "",
    numberInStock: "",
    tag: "",
    images: null,
    category: "",
    promotions: "",
    top: "",
  },
  prodImg: null,
};

export const postImage = createAsyncThunk("upload/postImage", async (img) => {
  const response = await http.post(UPLOAD_IMAGE, img);
 
  return response.data;
});

export const postProduct = createAsyncThunk("upload/postProduct", async (prod) => {
  const product = [];
  const response = await http.post(UPLOAD_SERVER, prod);

  return response.data;
});

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    map(state, action) {
      state.productInfo = {
        pname: action.payload.pname,
        description: action.payload.description,
        numberInStock: action.payload.numberInStock,
        price: action.payload.price,
        tag: action.payload.tag,
        category: action.payload.category,
        promotions: action.payload.promotions,
        top: action.payload.top,
        images: state.prodImg,
      };
    },
  },
  extraReducers: {
    [postImage.fulfilled]: (state, action) => {
      state.prodImg = action.payload;
    },
    [postProduct.fulfilled]: (state, action) => {
      state.productInfo = null;
      state.prodImg = null;
    },
  },
});

export const { map } = uploadSlice.actions;

export default uploadSlice.reducer;

export const selectImg = (state) => state.upload.prodImg;
export const selectProducInfo = (state) => state.upload.productInfo;
