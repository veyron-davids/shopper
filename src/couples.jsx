import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import coupleStyles from "./couples.module.css";
import AdvertCard from "./display-card";
import { selectAllCouples } from "./store/product-slice";
// import { FETCH_DEALS } from "./config"

const Couples = () => {
  const couples = useSelector(selectAllCouples);

  return (
    <div className={coupleStyles.container}>
      <div className={coupleStyles.top__red}>
        <span>Trending Couples</span>
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
      <div className={coupleStyles.container__content}>
        {couples.length &&
          couples.map((item) => <AdvertCard key={item._id} items={item} />)}
      </div>
    </div>
  );
};

export default Couples;
