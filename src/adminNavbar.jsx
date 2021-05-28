import React, { useEffect } from "react";
import { BiUserCheck, BiUserX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./store/auth-actions";
import { Link } from "react-router-dom";
import navStyle from "./nav.module.css";

const AdminNavbar = () => {
  const currentUser = useSelector((state) => state.auth);
  console.log(currentUser)

  return (
    <React.Fragment>
      <Link
        className={navStyle.nav__link}
        to="/admin"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserCheck />
        <span>{`Hi Admin, ${currentUser.FirstName}`}</span>{" "}
      </Link>
      <Link
        className={navStyle.nav__link}
        to="/logout"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserX /> <span>Sign Out</span>
      </Link>
    </React.Fragment>
  );
};

export default AdminNavbar;
