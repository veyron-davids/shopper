import React from "react";
import Spinner from "./images/spinner.gif";
import classes from "./Styles.module.css";

const Loader = () => {
  return (
    <div className={classes.fp__container}>
      <img src={Spinner} className={classes.fp__loader} alt="loader" />
    </div>
  );
};

export default Loader;
