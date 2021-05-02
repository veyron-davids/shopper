import React, { useContext } from "react";
import { BiUserCheck, BiUserX } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "./context/current-user-context";
import classes from "./Styles.module.css";

const AdminNavbar = () => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <React.Fragment>
      <NavLink
        className={classes.nav__link}
        to="/admin"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserCheck />
        <span>{`Hi Admin, ${currentUser.FirstName}`}</span>{" "}
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

export default AdminNavbar;
