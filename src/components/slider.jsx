import Slider from "@material-ui/core/Slider";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 175 + theme.spacing(3) * 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "rgb(119, 24, 24);",
    height: 8,
    cursor: "pointer",
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid rgb(119, 24, 24)",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const Sliders = ({ value, handler }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PrettoSlider
        value={value}
        onChange={handler}
      />
    </div>
  );
};

export default Sliders;
