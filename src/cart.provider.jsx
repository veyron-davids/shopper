import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { USER_SERVER } from "./config";

export const CartContext = createContext({
  hidden: false,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const notifySuccess = () => toast.success("Added to cart successfully");
  // const notifyFailure = () => toast.success("Added to cart successfully");

  const notifyRemove = () => toast.success("Removed from Cart");

  async function addItem(id) {
    try {
      const response = await axios.get(
        `${USER_SERVER}/addToCart?productId=${id}`
      );
      if (response.status === 200) {
        response.data.forEach((item) => {
          cartItems.push(item);
          // console.log(cartItems);
        });
        notifySuccess();
      }
    } catch (error) {
      //  if (error.response.status === 401) {
      //    console.log(response);
      //   //  notifySuccess();
      //  }
    }
  }
  //  console.log(cartItems);
  async function getCartPageItems() {
    const response = await axios.get(
      // `http://localhost:3900/api/products/product_number?id=${productId}&type=single`
    ); 

  }

  return (
    <CartContext.Provider
      value={{
        // hidden,
        // toggleHidden,
        // cartItems,
        addItem,
        // removeItem,
        // clearItemFromCart,
        // cartItemsCount,
        // cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
