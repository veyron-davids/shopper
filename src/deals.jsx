import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import dealStyle from "./deals.module.css";
import AdvertCard from "./display-card";
import { selectAllDeals } from "./store/product-slice";

const Deals = () => {
  const deals = useSelector(selectAllDeals);

  return (
    <div className={dealStyle.container}>
      <div className={dealStyle.top__red}>
        <span>Deals Just for you</span>
        <span>
          <NavLink
            to="./deals-page"
            style={{ textDecoration: "none", color: "white" }}
          >
            VIEW ALL
          </NavLink>
          <IoIosArrowForward />
        </span>
      </div>
      <div className={dealStyle.container__content}>
        {deals.length &&
          deals.map((item) => <AdvertCard key={item._id} items={item} />)}
      </div>
    </div>
  );
};

export default Deals;
