import React, { useEffect, useState } from "react";
import { BiHelpCircle, BiUserCheck, BiUserX } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./nav.module.css";
import { selectCount, selectLoading } from "./store/product-slice";

const UserNavbar = () => {
  const currentUser = useSelector((state) => state.auth);
  // const load = useSelector(selectLoading);
  
  const count = useSelector(selectCount);
  // const [value, setValue] = useState();
  // useEffect(() => {
  //   setValue({});
  // }, [load]);

  return (
    <React.Fragment>
      <Link
        className={classes.nav__link}
        to="/profile"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserCheck className={classes.ex} />
        <span>{`Hi, ${currentUser.FirstName}`}</span>{" "}
      </Link>
      <Link
        to="/cart"
        className={classes.nav__link}
        id={classes.nav__link_two}
        style={{ textDecoration: "none", color: "white" }}
      >
        <FiShoppingCart className={classes.ex} />
        <span>Cart</span>
        <div className={classes.cart__count}>{count}</div>
      </Link>
      <Link
        className={classes.nav__link}
        to="/help"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiHelpCircle className={classes.ex} />
        <span>Help</span>
      </Link>
      <Link
        className={classes.nav__link}
        to="/logout"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserX className={classes.ex} /> <span>Sign Out</span>
      </Link>
    </React.Fragment>
  );
};

export default UserNavbar;
