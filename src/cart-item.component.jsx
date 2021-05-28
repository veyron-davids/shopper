import React, { useContext } from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
    const { imageUrl, pname, quantity, price } = item;
    console.log(imageUrl);

    const { addItem, removeItem, cartTotal } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{pname}</span>
        <span className="price">
          {quantity} x ₦{price}
        </span>
      </div>
      <div className="cart-icons">
        <span className="cart-icon-plus">
          <i
            class="fa fa-plus-circle"
            aria-hidden="true"
            onClick={() => addItem(item)}
          ></i>
        </span>
        <span className="cart-icon-minus">
          <i
            class="fa fa-minus-circle"
            aria-hidden="true"
            onClick={() => removeItem(item)}
          ></i>
        </span>
      </div>
      {/* TOTAL: N{cartTotal} */}
    </div>
  );
}

export default CartItem;
