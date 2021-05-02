import React from "react";
import classes from "./Styles.module.css";

const Load = (props) => {
    return (
        <span className="load-more" onClick={props.onLoadMore}>
      Load More...
    </span>
  );
};

export default Load;
