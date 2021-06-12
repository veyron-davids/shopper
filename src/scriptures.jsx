import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AdvertCard from "./display-card";
import scriptureStyles from "./scriptures.module.css";
import { selectAllScriptures } from "./store/product-slice";
// import { FETCH_DEALS } from "./config"

const Scriptures = () => {
  const scriptures = useSelector(selectAllScriptures);

  return (
    <div className={scriptureStyles.container}>
      <div className={scriptureStyles.top__red}>
        <span>Rock Scriptures In Style</span>
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
      <div className={scriptureStyles.container__content}>
        {scriptures.length &&
          scriptures.map((item) => <AdvertCard key={item._id} items={item} />)}
      </div>
    </div>
  );
};

export default Scriptures;
