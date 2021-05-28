import React, { Fragment } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import navStyle from "./nav.module.css";

const CustomerNavbar = () => {
  return (
    <Fragment>
      <Link
        className={navStyle.nav__link}
        to="/sign"
        style={{ textDecoration: "none", color: "white" }}
      >
        <AiOutlineUser />
        <span>Login</span>
      </Link>
      <Link
        className={navStyle.nav__link}
        to="/register"
        style={{ textDecoration: "none", color: "white" }}
      >
        <FiUserPlus />
        <span>Register</span>
      </Link>
      <Link
        className={navStyle.nav__link}
        to="/help"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiHelpCircle />
        <span>Help</span>
      </Link>
    </Fragment>
  );
};

export default CustomerNavbar;
