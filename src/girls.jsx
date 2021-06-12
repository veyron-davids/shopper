import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import Jump from "react-reveal/Jump";
import { NavLink } from "react-router-dom";
import AdvertCard from "./display-card";
import girls from "./girls.module.css";
import { selectAllLadies } from "./store/product-slice";

const Girls = () => {
  const ladies = useSelector(selectAllLadies);

  return (
    <div className={girls.container}>
      <div className={girls.top__red}>
        <span>Girls Vogue Fashion</span>
        <Jump>
          <span>
            <NavLink
              to="./products"
              style={{ textDecoration: "none", color: "white" }}
            >
              VIEW ALL
            </NavLink>
            <IoIosArrowForward />
          </span>
        </Jump>
      </div>
      <div className={girls.container__content}>
        {ladies.length &&
          ladies.map((item) => <AdvertCard key={item._id} items={item} />)}
      </div>
    </div>
  );
};

export default Girls;
