import React, { useContext, useState } from "react";
import { BiHelpCircle, BiUserCheck, BiUserX } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { CartContext } from "./cart.provider";
import CurrentUserContext from "./context/current-user-context";
import classes from "./Styles.module.css";

const UserNavbar = () => {
  const { cartItemsCount, hidden, toggleHidden } = useContext(CartContext);
  const currentUser = useContext(CurrentUserContext);
  const [active, setActive] = useState(true);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <React.Fragment>
      <NavLink
        className={classes.nav__link}
        to="/profile"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserCheck />
        <span>{`Hi, ${currentUser.FirstName}`}</span>{" "}
      </NavLink>
      <NavLink
        className={classes.nav__link}
        id={classes.nav__link_two}
        onClick={() => {
          toggleHidden();
        }}
        style={{ textDecoration: "none", color: "white" }}
      >
        <FiShoppingCart />
        <span>Cart</span>
        <div className={classes.cart__count}>{cartItemsCount}</div>
      </NavLink>
      <NavLink
        className={classes.nav__link}
        to="/help"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiHelpCircle />
        <span>Help</span>
      </NavLink>
      <NavLink
        className={classes.nav__link}
        to="/logout"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserX /> <span>Sign Out</span>
      </NavLink>
    </React.Fragment>
  );
};

export default UserNavbar;
