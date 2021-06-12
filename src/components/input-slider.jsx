import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import inputs from "../Styles.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    marginLeft: theme.spacing(2),
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "rgb(119, 24, 24)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(119, 24, 24)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      // "&:hover fieldset": {
      //   borderColor: "yellow",
      // },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(119, 24, 24)",
      },
    },
  },
})(TextField);

const InputSlider = ({ minVal, maxValue }) => {
  const classes = useStyles();
  return (
    <div className={inputs.input__slider}>
      <CssTextField
        id="outlined-helperText"
        value={minVal === 0 ? "1000" : minVal}
        defaultValue="1000"
        helperText="min."
        size="small"
        color="#32ca84"
        variant="outlined"
      />
      <CssTextField
        id="outlined-helperText"
        value={maxValue}
        defaultValue="12000"
        helperText="max."
        className={classes.margin}
        size="small"
        variant="outlined"
      />
    </div>
  );
};

export default InputSlider;
