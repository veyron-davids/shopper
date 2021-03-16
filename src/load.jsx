import React from "react";
import "./Styles.css";

const Load = (props) => {
    return (
        <span className="load-more" onClick={props.onLoadMore}>
      Load More...
    </span>
  );
};

export default Load;
