import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Styles.css";

const CustomerNavbar = () => {
  return (
    <React.Fragment>
      <Link
        className="nav-link "
        to="/signin"
        style={{ textDecoration: "none", color: "white" }}
      >
        <AiOutlineUser />
        <span>Login</span>
      </Link>
      <Link
        className="nav-link "
        to="/signup"
        style={{ textDecoration: "none", color: "white" }}
      >
        <FiUserPlus />
        <span>Register</span>
      </Link>
      <Link
        className="nav-link "
        to="/help"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiHelpCircle />
        <span>Help</span>
      </Link>
    </React.Fragment>
  );
};

export default CustomerNavbar;
