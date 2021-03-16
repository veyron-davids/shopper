import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import CartItem from "./cart-item.component";
import { CartContext } from "./cart.provider";
import CustomButton from "./custom-button.component";

const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/CheckoutPage");
          toggleHidden()
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
