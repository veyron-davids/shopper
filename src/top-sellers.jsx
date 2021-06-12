import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import AdvertCard from "./display-card";
import { selectAllBest } from "./store/product-slice";
import topStyles from "./top-sellers.module.css";

const TopSales = () => {
  const best = useSelector(selectAllBest);

  return (
    <div className={topStyles.container}>
      <div className={topStyles.top__red}>
        <span>Best Sellers</span>
        <span>
          <NavLink
            to="./products"
            style={{ textDecoration: "none", color: "white" }}
          >
            VIEW ALL
          </NavLink>
          <IoIosArrowForward />
        </span>
      </div>
      <div className={topStyles.container__content}>
        {best.length &&
          best.map((item) => (
              <AdvertCard key={item._id} items={item} handleClick />
          ))}
      </div>
    </div>
  );
};

export default TopSales;
