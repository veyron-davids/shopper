import React, {useEffect} from "react";
import Advert from "./advert";
import Products from "./Products"
import {useDispatch, useSelector} from "react-redux"
import Banner from "./assets/ad_one.jpg";
import {
  getCartTotal,
  selectLoading,
  selectCount,
} from "./store/product-slice";
import dealer from "./dealsPage.module.css";
import SideFilter from "./sideFilter";

const DealsPage = () => {
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)

  return (
    <div className={dealer.container}>
      <div className={dealer.banner}>
        <Advert adOne={Banner} />
      </div>
      <div className={dealer.content}>
        <div className={dealer.filter}>
          <SideFilter />
        </div>
        <div className={dealer.display}>
          <div className={dealer.header}>
            <span>Deals Of the Day</span>
          </div>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
