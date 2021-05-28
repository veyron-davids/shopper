import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
// import http from "./services/httpService";
import Zoom from "react-reveal/Zoom";
import Card from "./Card";
import Jump from "react-reveal/Jump";
import girls from "./girls.module.css";
import { selectAllProducts } from "./store/product-slice";
// import { FETCH_DEALS } from "./config"

const Girls = () => {
  const [deals, setDeals] = useState([]);

  const prod = useSelector(selectAllProducts);
  console.log(deals);
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
        {deals.length &&
          deals.map((item) => (
            <Zoom cascade>
              <Card key={item._id} items={item} />
            </Zoom>
          ))}
      </div>
    </div>
  );
};

export default Girls;
