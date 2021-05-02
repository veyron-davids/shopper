import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Roll from "react-reveal/Roll";
import Card from "./Card";
import Empty from "./Empty";
import Loader from "./loader";
import { fetchProducts } from "./store/product-actions";
import classes from "./Styles.module.css";

const Products = (props) => {
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  console.log(products);
  useEffect(() => {
    setIsloading(true);
    dispatch(fetchProducts());
    setIsloading(false);
  }, [dispatch]);

  return (
    <Fragment>
      {/* {isLoading && <Loader />} */}
      <div className={classes.product__page__display}>
        {products.length ? (
          products.map((item) => (
            <Roll left>
              <Card key={item._id} items={item} />
            </Roll>
          ))
        ) : (
          <Fragment>
            <Empty />
            <Loader />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default React.memo(Products);
