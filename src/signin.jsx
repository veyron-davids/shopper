import Joi from "joi-browser";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import Form from "./Form";
import auth from "./services/authService";
import "./signin.css";

class Signin extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const response = await auth.login(data.email, data.password);
      console.log(response);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/products";
      // toast.success("sign in success")
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;

        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="signin">
        <div className="signin-cont">
          <div className="sign-in-container">
            <form>
              <div className="sign-title">
                <span>Account Login </span>
              </div>
              <div className="form-down-signin">
                {this.renderInput("email", "Email")}
              </div>
              <div className="form-down-signin">
                {this.renderInput("password", "Password", "password")}
              </div>
              {/* <input
                type="checkbox"
                id="remember"
                name="remember"
                value="Bike"
              />
              <label for="remember" className="sign-title">
                Remember Me
              </label>
              <br></br> */}
              <div className="button-downest" onClick={this.handleSubmit}>
                {this.renderButtonSignIn("Login")}
              </div>
              <div className="details">
                <span>Don't have an account? </span>
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "#dc143c" }}
                >
                  Sign Up Now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
