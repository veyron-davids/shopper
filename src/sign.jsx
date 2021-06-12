import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import auth from "./services/authService";
import classes from "./signin.module.css";

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
const CssChecked = withStyles({
  root: {
    "& label": {
      fontSize: "10px",
    },
    "& body1": {
      fontSize: "10px",
    },
  },
})(FormControlLabel);

const GreenCheckbox = withStyles({
  root: {
    color: "rgb(119, 24, 24)",
    fontSize: "0.875px",
    "&$checked": {
      color: "rgb(119, 24, 24)",
      fontSize: "0.875px",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiTypography: {
      body1: {
        fontSize: "0.875rem",
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: "1.2rem",
      },
    },
    PrivateSwitchBase: {
      root: {
        padding: "4px",
      },
    },
  },
});

const Sign = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    checker: true,
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeCheck = (event) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const resetPassError = () => {
    setPasswordError(null);
  };
  const resetMailError = () => {
    setEmailError(null);
  };

  const getloginDetails = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    console.log(storedEmail, storedPassword);
    if (!storedEmail && storedPassword) {
      return;
    } else {
      setValues({
        email: storedEmail,
        password: storedPassword,
      });
    }
  };

  useEffect(() => {
    getloginDetails();
  }, []);

  const doSubmit = async (event) => {
    event.preventDefault();
    if (values.checker == true) {
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);
    }
    setLoading(true);
    setEmailError(null);
    setPasswordError(null);
    try {
      if (
        values.email.trim().length === 0 ||
        values.password.trim().length === 0
      ) {
        setEmailError("This field is required");
        setPasswordError("This field is required");
        return;
      } else {
        const response = await auth.login(values.email, values.password);
        console.log(response);
        if (!response) {
          setLoading(false);
          setEmailError("Invalid email or password");
          return;
        }
        history.replace("/products");
        window.location.reload();
        setLoading(false);
      }
    } catch (err) {
      // setValidationError();
    }
  };

  return (
    <div className={classes.signin}>
      {/* {loading && <Loader />} */}
      <div className={classes.signin__cont}>
        <div className={classes.sign__title}>
          <span>Account Login </span>
        </div>
        <div className={classes.sign__in__container}>
          <form className={classes.form}>
            <CssTextField
              className={classes.field}
              autoFocus
              label="Email Address"
              variant="outlined"
              required
              id="custom-css-outlined-input"
              onBlur={resetMailError}
              value={values.email}
              onChange={handleChange("email")}
              helperText={emailError}
              error={emailError != null}
            />
            <br />
            {/* <FormControl>
              <CssTextField
              className={classes.field}
              required
              variant="outlined"
              label="Password"
                type={values.showPassword ? "text" : "password"}
                id="custom-css-outlined-input"
                value={values.password}
                onChange={handleChange("password")}
                helperText={emailError}
                error={emailError != null}
                endAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl> */}
            <CssOutline variant="outlined" required>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                className={classes.field}
                required
                onBlur={resetPassError}
                helperText={passwordError}
                error={passwordError != null}
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
            </CssOutline>
          </form>
          <div className={classes.reset}>
            <ThemeProvider theme={theme}>
              <CssChecked
                control={
                  <GreenCheckbox
                    checked={values.checker}
                    onChange={handleChangeCheck}
                    name="checker"
                  />
                }
                label="Remember me"
              />
            </ThemeProvider>
            <Link
              to="/reset"
              style={{ textDecoration: "none", color: "#dc143c" }}
            >
              <span>Forgot password?</span>
            </Link>
          </div>
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
