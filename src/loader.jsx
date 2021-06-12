import React from "react";
import classes from "./Styles.module.css";
import load from "./loader.module.css";

const Loader = () => {
  return (
    <div className={load.fp__container}>
      {/* <img src={Spinner} className={classes.fp__loader} alt="loader" /> */}
      <div className={load.lds__spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
