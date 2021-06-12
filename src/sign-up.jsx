import FormControl from "@material-ui/core/FormControl";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import auth from "./services/authService";
import * as userService from "./services/userService";
import Sing from "./signup.module.css";

const CssOutline = withStyles({
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
})(FormControl);

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

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "40ch",
  },
}));

const SignUp = (props) => {
  const pass = useStyles();

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

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const resetPassError = () => {
    setPerror(null);
  };
  const resetMailError = () => {
    setEmerror(null);
  };
  const resetAdError = () => {
    setAderror(null);
  };
  const resetFError = () => {
    setFerror(null);
  };
  const resetLError = () => {
    setLerror(null);
  };
  const resetPhError = () => {
    setPherror(null);
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
    <div className={Sing.signup}>
      <div className={Sing.sign__up__container}>
        <div className={Sing.sign__title}>
          <span className={Sing.sign__title}>Create Account</span>
        </div>
        <form>
          <div className={Sing.form__up}>
            <CssTextField
              className={Sing.text__field}
              label="First Name"
              autoFocus
              required
              onBlur={resetFError}
              variant="outlined"
              id="custom-css-outlined-input"
              helperText={fError}
              error={fError != null}
              value={values.FirstName}
              onChange={handleChange("FirstName")}
            />

            <CssTextField
              label="Last Name"
              className={Sing.text__field}
              required
              onBlur={resetLError}
              variant="outlined"
              id="custom-css-outlined-input"
              helperText={lError}
              error={lError != null}
              value={values.LastName}
              onChange={handleChange("LastName")}
            />
          </div>
          <div className={Sing.form__up}>
            {/* <CssOutline
              variant="outlined"
              required
              className={clsx(pass.textField)}
              fullWidth
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id={Sing.textFd}
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                className={Sing.text__field}
                required
                helperText={pError}
                error={pError != null}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={100}
              />
            </CssOutline> */}

            <CssTextField
              className={Sing.text__field}
              label="Password"
              type="password"
              onBlur={resetPassError}
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
              onBlur={resetAdError}
              className={Sing.text__field}
              required
              variant="outlined"
              id="custom-css-outlined-input"
              helperText={adError}
              error={adError != null}
              value={values.address}
              onChange={handleChange("address")}
            />
          </div>
          <div className={Sing.form__up}>
            <CssTextField
              className={Sing.text__field}
              label="Email Address"
              type="email"
              onBlur={resetMailError}
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
              onBlur={resetPhError}
              required
              className={Sing.text__field}
              variant="outlined"
              id="custom-css-outlined-input"
              helperText={phError}
              error={phError != null}
              value={values.phoneNumber}
              onChange={handleChange("phoneNumber")}
            />
          </div>
        </form>
        <button className={Sing.custom__button__up} onClick={doSubmit}>
          CREATE ACCOUNT
        </button>
        <div className={Sing.details__up}>
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
