import React from "react";
import "./signup.css";
import classes from "./Styles.module.css";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className={classes.one}>
      <label className={classes.upload__label} htmlFor={name}>
        {label}
        <span style={{ color: "red", paddingLeft: "5px" }}>*</span>
      </label>
      <input {...rest} name={name} id={name} id={classes.input} />
      {error && <div style={{ color: "red", marginTop: "5px" }}>{error}</div>}
    </div>
  );
};

export default Input;
