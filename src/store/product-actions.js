import {useCallback} from "react"
import axios from "axios";
import { PRODUCTS_SERVER } from "../config";
import { productActions } from "./product-slice";

export const fetchProducts = () => {
  return async (dispatch) => {
    const getItems = async () => {
      const response = await axios(PRODUCTS_SERVER);
      const data = response.data.products;
      return data;
    };
    const arrayBufferToBase64 = (buffer) => {
      var binary = "";
      var bytes = [].slice.call(new Uint8Array(buffer));
      bytes.forEach((b) => (binary += String.fromCharCode(b)));
      return window.btoa(binary);
    };

    try {
      const items = await getItems();
      items.map((item) => {
        let base64Flag = "data:image/jpeg;base64,";
        let str = item.images.data.data;
        let imageStr = arrayBufferToBase64(str);
        item.images = base64Flag + imageStr;
      });
      dispatch(
        productActions.getProducts({
          products: items,
        })
      );
    } catch (error) {}
  };
};

