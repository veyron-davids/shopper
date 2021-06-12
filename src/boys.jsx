import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import boyStyles from "./boys.module.css";
import AdvertCard from "./display-card";
import { selectAllMen } from "./store/product-slice";
// import { FETCH_DEALS } from "./config"

const Boys = () => {
  const men = useSelector(selectAllMen);

  return (
    <div className={boyStyles.container}>
      <div className={boyStyles.top__red}>
        <span>Boys Trending Fashion</span>
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
      <div className={boyStyles.container__content}>
        {men.length &&
          men.map((item) => <AdvertCard key={item._id} items={item} />)}
      </div>
    </div>
  );
};

export default Boys;
