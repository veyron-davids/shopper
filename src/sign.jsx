import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "./services/authService";
import classes from "./signin.module.css";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#32ca84",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      // "&:hover fieldset": {
      //   borderColor: "yellow",
      // },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

const Sign = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [validationError, setValidationError] = useState();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  console.log(values);

  const doSubmit = async (event) => {
    event.preventDefault();
    setEmailError(null);
    setPasswordError(null);
    try {
      if (
        values.email.trim().length === 0 ||
        values.password.trim().length === 0
      ) {
        setEmailError("This field is required");
        return;
      } else {
        const response = await auth.login(values.email, values.password);
        console.log(response)
        const { state } = props.location;
        window.location = state ? state.from.pathname : "/products";
        auth.loginWithJwt(response.headers["x-auth-token"]);
        window.location = "/products";
      }
    } catch (err) {
      // setValidationError();
    }
  };

  return (
    <div className={classes.signin}>
      <div className={classes.signin__cont}>
        <div className={classes.sign__title}>
          <span>Account Login </span>
        </div>
        <div className={classes.sign__in__container}>
          <form>
            <CssTextField
              className={classes.field}
              autoFocus
              label="Email Address"
              variant="outlined"
              required
              id="custom-css-outlined-input"
              value={values.email}
              onChange={handleChange("email")}
              helperText={emailError}
              error={emailError != null}
            />
            <br />
            <CssTextField
              label="Password"
              className={classes.field}
              required
              variant="outlined"
              id="custom-css-outlined-input"
              value={values.password}
              onChange={handleChange("password")}
              helperText={emailError}
              error={emailError != null}
            />
          </form>
          <button className={classes.custom__button__in} onClick={doSubmit}>
            SIGN IN
          </button>
          <div className={classes.details}>
            <span>Don't have an account?</span>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "#dc143c" }}
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
