import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
// import http from "./services/httpService";
import Roll from "react-reveal";
import Card from "./Card";
import boyStyles from "./boys.module.css";
import { selectAllProducts } from "./store/product-slice";
// import { FETCH_DEALS } from "./config"

const Boys = () => {
  const [deals, setDeals] = useState([]);

  const prod = useSelector(selectAllProducts);
  prod.map((item) => {
    if (item.promotions === true) {
      deals.push(item);
    }
  });

  // const fetchDeals = async () => {
  //   try {
  //     const response = http.get(FETCH_DEALS);
  //     console.log(response);
  //     if (response.status === 200) {
  //       setDeals(response.data);
  //     }
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   fetchDeals()
  // }, []);

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
        {deals.length &&
          deals.map((item) => (
            <Roll left>
              <Card key={item._id} items={item} />
            </Roll>
          ))}
      </div>
    </div>
  );
};

export default Boys;
