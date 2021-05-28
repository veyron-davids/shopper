import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Rotate from "react-reveal/Rotate";
import Card from "./Card";
import { fetchDeals, selectAllDeals } from "./store/product-slice";
import { useDispatch, useSelector } from "react-redux";
import dealStyle from "./deals.module.css";

const Deals = () => {
  const dispatch = useDispatch();
  const deals = useSelector(selectAllDeals)

  console.log(deals)

  useEffect(() => {
    dispatch(fetchDeals());
  }, [dispatch]);

  return (
    <div className={dealStyle.container}>
      <div className={dealStyle.top__red}>
        <span>Deals Just for you</span>
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
      <div className={dealStyle.container__content}>
        {deals.length &&
          deals.map((item) => (
            <Rotate>
              <Card key={item._id} items={item} />
            </Rotate>
          ))}
      </div>
    </div>
  );
};

export default Deals;
