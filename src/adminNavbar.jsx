import React, { useEffect } from "react";
import { BiUserCheck, BiUserX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import navStyle from "./nav.module.css";

const AdminNavbar = () => {
  const currentUser = useSelector((state) => state.auth);


  return (
    <React.Fragment>
      <Link
        className={navStyle.nav__link}
        to="/admin"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserCheck className={navStyle.ex} />
        <span>{`Hi , ${currentUser.FirstName}`}</span>{" "}
      </Link>
      <Link
        className={navStyle.nav__link}
        to="/logout"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserX className={navStyle.ex} /> <span>Sign Out</span>
      </Link>
    </React.Fragment>
  );
};


export default AdminNavbar;