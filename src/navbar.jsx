import React, { useEffect } from "react";
import AdminNavbar from "./adminNavbar";
import CustomerNavbar from "./customerNavbar";
import {useSelector } from "react-redux";
import Logo from "./logo";
import UserNavbar from "./userNavbar";
import navStyle from "./nav.module.css";


const Navbar = () => {
 const currentUser = useSelector((state) => state.auth);
  return (
    <nav className={navStyle.navbar} >
      <Logo />
      <div className={navStyle.nav__tag}>
        {!currentUser && <CustomerNavbar />}

        {currentUser && currentUser.isAdmin === false ? <UserNavbar /> : null}

        {currentUser && currentUser.isAdmin === true ? <AdminNavbar /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
