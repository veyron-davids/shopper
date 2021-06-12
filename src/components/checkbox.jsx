import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import styles from "../Styles.module.css";
import Rating from "./rating";

const CustomGroup = withStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "#32ca84",
  },
})(RadioGroup);

const Checkbox = () => {
  const [data, setData] = React.useState();
  const rating = {
    five: 5,
    four: 4,
    three: 3,
    two: 2,
    one: 1,
  };

  const handleReset = () => {
    setData(null);
  };

  const handleChange = (event) => {
    setData(event.target.value);
    
  };
  return (
    <CustomGroup value={data} onChange={handleChange}>
      <span className={styles.radio__span}>PRODUCT RATING</span>
      {!data ? (
        ""
      ) : (
        <span className={styles.radio__span__two}>RESET</span>
      )}
      <div className={styles.radio}>
        <FormControlLabel
          value="five"
          control={<Radio color="secondary" size="small" />}
        />
        <Rating rating={rating.five} />
      </div>
      <div className={styles.radio}>
        <FormControlLabel value="four" control={<Radio size="small" />} />
        <Rating rating={rating.four} />
      </div>
      <div className={styles.radio}>
        <FormControlLabel value="three" control={<Radio size="small" />} />
        <Rating rating={rating.three} />
      </div>
      <div className={styles.radio}>
        <FormControlLabel value="two" control={<Radio size="small" />} />
        <Rating rating={rating.two} />
      </div>
      <div className={styles.radio}>
        <FormControlLabel value="one" control={<Radio size="small" />} />
        <Rating rating={rating.one} />
      </div>
    </CustomGroup>
  );
};

export default Checkbox;
