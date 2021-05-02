import React from "react";
import Flip from "react-reveal/Flip";
import classes from "./Styles.module.css";

function Catgory() {
  return (
    <div className={classes.category__container}>
      <Flip bottom>
        <h2 className={classes.category__title}>
          All Collections
        </h2>
      </Flip>
      {/* <SeacrchFeature /> */}
      {/* <FilterFeature /> */}
    </div>
  );
}

export default Catgory;
