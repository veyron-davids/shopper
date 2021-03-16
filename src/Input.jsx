import React from "react";
import { toast } from "react-toastify";
import "./signup.css";
import "./Styles.css";

const Input = ({ name, label, error, ...rest }) => {
  
  return (
    <div className="one">
      <label className="upload-label" htmlFor={name}>
        {label}
      </label>
      <input {...rest} name={name} id={name} id="input" />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default Input;
