import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import auth from "./services/authService";
import * as userService from "./services/userService";
import "./signup.css";

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

const SignUp = (props) => {
  const [fError, setFerror] = useState();
  const [lError, setLerror] = useState();
  const [pError, setPerror] = useState();
  const [emError, setEmerror] = useState();
  const [phError, setPherror] = useState();
  const [adError, setAderror] = useState();
  const [values, setValues] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const doSubmit = async () => {
    setAderror(null);
    setEmerror(null);
    setFerror(null);
    setLerror(null);
    setPerror(null);
    setPherror(null);
    try {
      const response = await userService.register(values);
      console.log(response);
      if (response.data.errors) {
        validate(response);
        return;
      }
      auth.loginWithJwt(response.headers["x-auth-token"]);
      history.push("/products");
    } catch (err) {
      console.log(err);
    }
  };

  const validate = (userData) => {
    for (let i = 0; i <= userData.data.errors.length; i++) {
      const err = userData.data.errors[i];
      console.log(err);
      if (err.param == "email") {
        setEmerror(err.msg);
      } else if (err.param == "FirstName") {
        setFerror(err.msg);
      } else if (err.param == "LastName") {
        setLerror(err.msg);
      } else if (err.param == "phoneNumber") {
        setPherror(err.msg);
      } else if (err.param == "address") {
        setAderror(err.msg);
      } else if (err.param == "password") {
        setPerror(err.msg);
      } else {
        return;
      }
    }
  };

  return (
    <div className="signup">
      <div className="sign-up-container">
        <div className="sign-title">
          <span className="sign-title">Create Account</span>
        </div>
        <form>
          <div className="form-up">
            <CssTextField
              className="text-field"
              label="First Name"
              autoFocus
              required
              variant="outlined"
              id="custom-css-outlined-input"
              helperText={fError}
              error={fError != null}
              value={values.FirstName}
              onChange={handleChange("FirstName")}
            />

            <CssTextField
              label="Last Name"
              className="text-field"
              required
              variant="outlined"
              id="custom-css-outlined-input"
              helperText={lError}
              error={lError != null}
              value={values.LastName}
              onChange={handleChange("LastName")}
            />
          </div>
          <br />
          <div className="form-up">
            <CssTextField
              className="text-field"
              label="Password"
              type="password"
              required
              variant="outlined"
              id="custom-css-outlined-input"
              helperText={pError}
              error={pError != null}
              value={values.password}
              onChange={handleChange("password")}
            />
            <CssTextField
              label="Address"
              type="text"
              className="text-field"
              required
              variant="outlined"
              id="custom-css-outlined-input"
              helperText={adError}
              error={adError != null}
              value={values.address}
              onChange={handleChange("address")}
            />
          </div>
          <div className="form-up">
            <CssTextField
              className="text-field"
              label="Email Address"
              type="email"
              required
              variant="outlined"
              id="custom-css-outlined-input"
              helperText={emError}
              error={emError != null}
              value={values.email}
              onChange={handleChange("email")}
            />
            <CssTextField
              label="Phone Number"
              type="Number"
              required
              className="text-field"
              variant="outlined"
              id="custom-css-outlined-input"
              helperText={phError}
              error={phError != null}
              value={values.phoneNumber}
              onChange={handleChange("phoneNumber")}
            />
          </div>
        </form>
        <button className="custom-button-up" onClick={doSubmit}>
          CREA
        </button>
        <div className="details-up">
          <span>Aleady have an account? </span>
          <Link to="/sign" style={{ textDecoration: "none", color: "#dc143c" }}>
            Sign In Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
