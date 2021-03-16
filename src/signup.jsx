import Joi from "joi-browser";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "./Form";
import auth from "./services/authService";
import * as userService from "./services/userService";
import "./signup.css";

class Signup extends Form {
  state = {
    data: {
      FirstName: "",
      LastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    FirstName: Joi.string().min(2).max(50).label("First Name"),
    LastName: Joi.string().min(2).max(50).label("Last Name"),
    email: Joi.string().required().email().label("Email"),
    phoneNumber: Joi.string().min(11).max(11).label("Phone Number"),
    password: Joi.string().min(5).label("Password"),
    // confirmPassword: Joi.string().required().min(5).label("confirmPassword"),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      toast.success("Registration Successful");
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/products";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
       toast.error(`${ex.response.data}`);
      }
    }
  };

  render() {
    return (
      <div className="signup">
        <div className="sign-up-container">
          <form>
            <div className="sign-title">
              <span className="sign-title">Create Account</span>
            </div>
            <div className="form-up">
              {this.renderInput("FirstName", "First Name")}
              {this.renderInput("LastName", "Last Name")}
            </div>
            <div className="form-down">
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("email", "Email")}
              {/* <div className="one">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name=""
                  onChange=""
                  value=""
                  className="input-general"
                />
              </div> */}
            </div>
            <div className="form-downest">
              {/* <label>Prefix</label>
              <div>+234</div> */}
              {this.renderInput("phoneNumber", "Phone Number")}
              <div className="button" onClick={this.handleSubmit}>
                {this.renderButtonSignUp("Create Account")}
                <div className="details-up">
                  <span>Aleady have an account? </span>
                  <Link
                    to="/signin"
                    style={{ textDecoration: "none", color: "#dc143c" }}
                  >
                    Sign In Now
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
