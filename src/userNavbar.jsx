import React, { useContext, useState } from "react";
import { BiHelpCircle, BiUserCheck, BiUserX } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "./cart.provider";
import CurrentUserContext from "./context/current-user-context";
import "./Styles.css";

const UserNavbar = () => {
  const { cartItemsCount, hidden, toggleHidden } = useContext(CartContext);
  const currentUser = useContext(CurrentUserContext);
  const [active, setActive] = useState(true);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <React.Fragment>
      <Link
        className="nav-link "
        to="/profile"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserCheck />
        <span>{`Hi, ${currentUser.FirstName}`}</span>{" "}
      </Link>
      <Link
        className="nav-link"
        id="nav-link-two"
        onClick={() => {
          toggleHidden();
        }}
        style={{ textDecoration: "none", color: "white" }}
      >
        <FiShoppingCart />
        <span>Cart</span>
        <div className="cart-count">{cartItemsCount}</div>
      </Link>
      <Link
        className="nav-link "
        to="/help"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiHelpCircle />
        <span>Help</span>
      </Link>
      <Link
        className="nav-link "
        to="/logout"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserX /> <span>Sign Out</span>
      </Link>
    </React.Fragment>
  );
};

export default UserNavbar;
