import React from "react";
import { BiHelpCircle, BiUserCheck, BiUserX } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./nav.module.css";

const UserNavbar = () => {
  const currentUser = useSelector((state) => state.auth);
  console.log(currentUser);

  return (
    <React.Fragment>
      <Link
        className={classes.nav__link}
        to="/profile"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserCheck />
        <span>{`Hi, ${currentUser.FirstName}`}</span>{" "}
      </Link>
      <span
        className={classes.nav__link}
        id={classes.nav__link_two}
        // onClick={() => {
        //   toggleHidden();
        // }}
        style={{ textDecoration: "none", color: "white" }}
      >
        <FiShoppingCart />
        <span>Cart</span>
        <div className={classes.cart__count}>{}</div>
      </span>
      <Link
        className={classes.nav__link}
        to="/help"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiHelpCircle />
        <span>Help</span>
      </Link>
      <Link
        className={classes.nav__link}
        to="/logout"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserX /> <span>Sign Out</span>
      </Link>
    </React.Fragment>
  );
};

export default UserNavbar;
