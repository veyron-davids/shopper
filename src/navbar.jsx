import React, { useContext } from "react";
import AdminNavbar from "./adminNavbar";
import CurrentUserContext from "./context/current-user-context";
import CustomerNavbar from "./customerNavbar";
import Logo from "./logo";
import UserNavbar from "./userNavbar";
import classes from "./Styles.module.css";

const Navbar = () => {
  const currentUser = useContext(CurrentUserContext);

  // console.log(currentUser);

  return (
    <nav className={classes.navbar}>
      <Logo />
      <div className={classes.nav__tag}>
        {!currentUser && <CustomerNavbar />}

        {currentUser && currentUser.isAdmin === false ? <UserNavbar /> : null}

        {currentUser && currentUser.isAdmin === true ? <AdminNavbar /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
