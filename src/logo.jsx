import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to="/products"
      >
        <i className="fa fa-shopping-bag" id="nav-icon"></i>
        <em className="logo-title">Shopper.io</em>
      </Link>
    </div>
  );
};

export default Logo;
