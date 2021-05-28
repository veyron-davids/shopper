import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Roll from "react-reveal/Roll";
import Card from "./Card";
import Empty from "./Empty";
import Loader from "./loader";
import { fetchProducts, selectAllProducts } from "./store/product-slice";
import classes from "./Styles.module.css";

const Products = (props) => {
  const [isLoading, setIsloading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);

  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  console.log(products);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        <div className={classes.paginate}></div>
        {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
        /> */}
      </div>
    </Fragment>
  );
};

export default Products;
