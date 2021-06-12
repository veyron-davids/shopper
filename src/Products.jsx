import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Pagination from "@material-ui/lab/Pagination";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Empty from "./Empty";
import Loader from "./loader";
import { fetchProducts, selectAllProducts } from "./store/product-slice";
import classes from "./Styles.module.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Products = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [isLoading, setIsloading] = useState(false);


  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    setIsloading(true);
    dispatch(fetchProducts());
    setIsloading(false);
  }, []);

  return (
    <Fragment>
      {/* {products.length == 0 && <Loader />} */}
      <div className={classes.product__page__display}>
        {products.length ? (
          products.map((item, index) => (
            // <Flip bottom>
            <Card
              index={index}
                key={item._id.toString()}
                items={item}
                handleClick={handleClick}
              />
            // </Flip>
          ))
        ) : (
          <Fragment>
            <Empty />
            <Loader />
          </Fragment>
        )}
        <div className={classes.paginate}>
          <Pagination
            count={5}
            showFirstButton
            showLastButton
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
      {open && (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Product has been added to cart!
          </Alert>
        </Snackbar>
      )}
    </Fragment>
  );
};

export default Products;
