import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Advert from "./advert";
import Ads from "./assets/advert.jpg";
import Boys from "./boys";
import CarouselComponent from "./CarouselComponent";
import Couples from "./couples";
import Deals from "./deals";
import Girls from "./girls";
import Loader from "./loader";
import Recommended from "./recommended";
import Scriptures from "./scriptures";
import {
  fetchBest,
  fetchCouples,
  fetchDeals,
  fetchLadies,
  fetchMen,
  fetchScriptures,
  fetchVogue,
  selectLoading,
} from "./store/product-slice";
import classes from "./Styles.module.css";
import TopSales from "./top-sellers";
import Videos from "./video";

const ProductsPage = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDeals());
    dispatch(fetchBest());
    dispatch(fetchCouples());
    dispatch(fetchLadies());
    dispatch(fetchMen());
    dispatch(fetchScriptures());
    dispatch(fetchVogue());
  }, [dispatch]);

  return (
    <div className={classes.product__page}>
      {loading && <Loader />}
      <div className={classes.hero__outline}>
        <CarouselComponent />
      </div>
      {/* <Catgory /> */}
      <Recommended />
      <Deals />
      <Advert adOne={Ads} adTwo={Ads} />
      <TopSales />
      <Girls />
      <Boys />
      <Advert adOne={Ads} adTwo={Ads} />
      <Couples />
      <Scriptures />
      <Videos />
    </div>
  );
};

export default ProductsPage;
