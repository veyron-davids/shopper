import Rating from "@material-ui/lab/Rating";
import React from "react";



const Ratings = ({ rating }) => {
  return (
    <div>
      <Rating
        name="simple-controlled"
        value={!rating ? null : rating}
        readOnly
        size="medium"
        // className={classes.root}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
    </div>
  );
};

export default Ratings;
