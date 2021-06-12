import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./cartItem";
import cart from "./cartPage.module.css";
import Loader from "./loader";
import {
  selectCart,
  selectCount,
  selectLoading,
  getCartTotal,
  selectTotal,
} from "./store/product-slice";

const CartPage = () => {
  const loading = useSelector(selectLoading);
  const carts = useSelector(selectCart);
  const count = useSelector(selectCount);
  const cartTotal = useSelector(selectTotal);

  const dispatch = useDispatch();

   const refreshPage = () => {
     window.location.reload();
   };


  useEffect(() => {
    dispatch(getCartTotal());
  }, []);

  function currencyFormat(num) {
    return "₦" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

    const total = currencyFormat(cartTotal);


  return (
    <div className={cart.container}>
      <div className={cart.header}>
        <span>{`Cart ${count} items`}</span>
        <span>
          Your order is eligible for free shipping (Lagos only, excluding large
          items)
        </span>
      </div>
      <div className={cart.header__two}>
        <span>ITEM</span>
        <div className={cart.span}>
          <span>QUANTITY</span>
          <span>UNIT PRICE</span>
          <span>SUB TOTAL</span>
        </div>
      </div>
      {carts.length ? (
        carts.map((item) => (
          <CartItem key={item._id} cartItem={item} />
        ))
      ) : (
        <Loader />
      )}
      <div className={cart.details}>
        <div className={cart.details__upper}>
          <span>Total:</span>
          <span>{total}</span>
        </div>
        <span>Delivery fee not included yet</span>
        <span>
          International Shipping and Customs fee not included yet
          (NON-REFUNDABLE in case of a return)
        </span>
      </div>
      <div className={cart.eligible}>
        <button className={cart.button__one}>CONTINUE SHOPPING</button>
        <button className={cart.button__two}>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartPage;
