import React from "react";
import { BsFilePlus } from "react-icons/bs";
import { BiListPlus } from "react-icons/bi";
import { FiEdit, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="contain-flex">
          <div className="box-flex-one">
            <Link
              to="/newproduct"
              style={{
                textDecoration: "none",
                display: "flex",
                color: "#dc143c",
              }}
            >
              <BsFilePlus />
              <div className="admin-title">New Product</div>
            </Link>
          </div>
          <div className="box-flex-two">
            <FiEdit />
            <div className="admin-title">Edit Product</div>
          </div>
        </div>
        <div className="contain-flex">
          <div className="box-flex-three">
            <FiSettings />
            <div className="admin-title">Settings</div>
          </div>
          <div className="box-flex-four">
            <BiListPlus />
            <div className="admin-title">Orders</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
