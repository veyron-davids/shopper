import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
// import http from "./services/httpService";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import { selectAllProducts } from "./store/product-slice";
import scriptureStyles from "./scriptures.module.css";
// import { FETCH_DEALS } from "./config"

const Scriptures = () => {
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
        {deals.length &&
          deals.map((item) => (
            <Fade>
              <Card key={item._id} items={item} />
            </Fade>
          ))}
      </div>
    </div>
  );
};

export default Scriptures;
