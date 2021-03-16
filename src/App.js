import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./adminDashboard";
import Cart from "./cart";
import CheckoutPage from "./CheckoutPage";
import CurrentUserContext from "./context/current-user-context";
import Footer from "./Footer";
import Help from "./help";
import Logout from "./logout";
import Navbar from "./navbar";
import NotFound from "./notFound";
import ProductPreview from "./productPreview";
import ProductsPage from "./productsPage";
import ProductUpload from "./productUpload";
import Profile from "./profile";
import ProtectedRoute from "./protectedRoute";
import auth from "./services/authService";
import Signin from "./signin";
import Signup from "./signup";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ currentUser: user });
  }
  render() {
    // console.log(this.state.currentUser.isAdmin === true );

    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Navbar />
          <Switch>
            <ProtectedRoute path="/admin" component={Admin} />
            <Route path="/help" component={Help} />
            <ProtectedRoute path="/cart" component={Cart} />
            <ProtectedRoute path="/checkoutPage" component={CheckoutPage} />
            <ProtectedRoute path="/profile" component={Profile} />
            <Route
              path="/productPreview/:productId"
              component={ProductPreview}
            />
            <ProtectedRoute path="/newproduct" component={ProductUpload} />
            <Route path="/signin" component={Signin} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={Signup} />
            <Route path="/products" component={ProductsPage} />
            <Redirect from="/" exact to="/Products" />
            <Redirect to="/not-found" component={NotFound} />
          </Switch>
        </CurrentUserContext.Provider>
        <ToastContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
