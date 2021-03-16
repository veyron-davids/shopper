import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiUserCheck } from "react-icons/bi";
import { BsCardChecklist } from "react-icons/bs";
import { BiUserX } from "react-icons/bi";
import CurrentUserContext from "./context/current-user-context";

const AdminNavbar = () => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <React.Fragment>
      <Link
        className="nav-link "
        to="/admin"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserCheck />
        <span>{`Hi Admin, ${currentUser.FirstName}`}</span>{" "}
      </Link>
      <Link
        className="nav-link "
        to="/logout"
        style={{ textDecoration: "none", color: "white" }}
      >
        <BiUserX /> <span>Sign Out</span>
      </Link>
    </React.Fragment>
  );
};

export default AdminNavbar;
