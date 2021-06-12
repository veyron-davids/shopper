import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResetPass from "./resetPassword.module.css";

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

const ResetPassword = () => {
  const [emailError, setEmailError] = useState();
  const [values, setValues] = useState({
    email: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <div className={ResetPass.reset__page}>
      <div className={ResetPass.reset__cont}>
        <span>Forgot your password?</span>
        <span>
          Enter your email address below and we will send you a link where you
          can enter a new password.
        </span>
        <form className={ResetPass.form}>
          <CssTextField
            className={ResetPass.field}
            autoFocus
            label="Your Email"
            labelWidth={0}
            variant="outlined"
            id="custom-css-outlined-input"
            value={values.email}
            onChange={handleChange("email")}
            helperText={emailError}
            error={emailError != null}
          />
          <button className={ResetPass.custom__button__in}>RESTORE</button>
        </form>
        <span className={ResetPass.span}>
          No account?
          <Link
            style={{ textDecoration: "none", color: "#dc143c" }}
            to="/register"
          >
            <span id={ResetPass.span}> Sign up </span>
          </Link>
          now for to expereice shopping at it's best
        </span>
      </div>
    </div>
  );
};

export default ResetPassword;
