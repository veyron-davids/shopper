import React, { Fragment } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import classes from "./Styles.module.css";

const CustomerNavbar = () => {
  return (
    <Fragment>
      <NavLink
        className={classes.nav__link}
        to="/signin"
        style={{ textDecoration: "none", color: "white" }}
      >
        <AiOutlineUser />
        <span>Login</span>
      </NavLink>
      <NavLink
        className={classes.nav__link}
        to="/signup"
        style={{ textDecoration: "none", color: "white" }}
      >
        <FiUserPlus />
        <span>Register</span>
      </NavLink>
      <NavLink
        className={classes.nav__link}
        to="/help"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiHelpCircle />
        <span>Help</span>
      </NavLink>
    </Fragment>
  );
};

export default CustomerNavbar;
