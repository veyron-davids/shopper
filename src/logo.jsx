import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Styles.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <NavLink
        style={{ textDecoration: "none", color: "white" }}
        to="/products"
      >
        <i className="fa fa-shopping-bag" id={classes.nav__icon}></i>
        <em className={classes.logo__title}>
          Shopper.io
        </em>
      </NavLink>
    </div>
  );
};

export default Logo;
