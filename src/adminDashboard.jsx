import React from "react";
import { BiListPlus } from "react-icons/bi";
import { BsFilePlus } from "react-icons/bs";
import { FiEdit, FiSettings } from "react-icons/fi";
import Rotate from "react-reveal/Rotate";
import { NavLink } from "react-router-dom";
import classes from "./Styles.module.css";

const Admin = () => {
  return (
    <div className={classes.admin__page}>
      <div className={classes.admin__container}>
        <div className={classes.contain__flex}>
          <Rotate top left>
            <div className={classes.box__flex__one}>
              <NavLink
                to="/newproduct"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  color: "#dc143c",
                }}
              >
                <BsFilePlus />
                <div className={classes.admin__title}>New Product</div>
              </NavLink>
            </div>
          </Rotate>
          <Rotate top right>
            <div className={classes.box__flex__two}>
              <NavLink
                to="/editproduct"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  color: "#dc143c",
                }}
              >
                <FiEdit />
                <div className={classes.admin__title}>Edit Product</div>
              </NavLink>
            </div>
          </Rotate>
        </div>
        <div className={classes.contain__flex}>
          <Rotate bottom left>
            <div className={classes.box__flex__three}>
              <FiSettings />
              <div className={classes.admin__title}>Settings</div>
            </div>
          </Rotate>
          <Rotate bottom right>
            <div className={classes.box__flex__four}>
              <BiListPlus />
              <div className={classes.admin__title}>Orders</div>
            </div>
          </Rotate>
        </div>
      </div>
    </div>
  );
};

export default Admin;
