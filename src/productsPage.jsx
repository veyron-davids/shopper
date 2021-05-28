import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Advert from "./advert";
import Boys from "./boys";
import CarouselComponent from "./CarouselComponent";
import Couples from "./couples";
import Deals from "./deals";
import Girls from "./girls";
import Loader from "./loader";
import Recommended from "./recommended";
import Scriptures from "./scriptures";
import { fetchProducts } from "./store/product-slice";
import classes from "./Styles.module.css";
import TopSales from "./top-sellers";

const ProductsPage = () => {
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsloading(true);
    dispatch(fetchProducts());
    setIsloading(false);
  }, [dispatch]);

  return (
    <div className={classes.product__page}>
      {isLoading && <Loader />}
      <div className={classes.hero__outline}>
        <CarouselComponent />
      </div>
      {/* <Catgory /> */}
      <Recommended />
      <Deals />
      <Advert />
      <TopSales />
      <Girls />
      <Boys />
      <Advert />
      <Couples />
      <Scriptures />
    </div>
  );
};

export default ProductsPage;
