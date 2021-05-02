import React, { Suspense, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Admin from "./adminDashboard";
// import Cart from "./cart";
// import CheckoutPage from "./CheckoutPage";
import CurrentUserContext from "./context/current-user-context";
import Footer from "./Footer";
// import Help from "./help";
// import Logout from "./logout";
import Navbar from "./navbar";
import Loader from "./loader";
// import NotFound from "./notFound";
// import ProductEdit from "./ProductEdit";
// import ProductPreview from "./productPreview";
// import ProductsPage from "./productsPage";
// import ProductUpload from "./productUpload";
// import Profile from "./profile";
import ProtectedRoute from "./protectedRoute";
import auth from "./services/authService";
// import Signin from "./signin";
// import Signup from "./signup";
import SpinnerLoader from "./spinnerLoader";
import Crumb from "./crumb";

const Admin = React.lazy(() => import("./adminDashboard"));
const Cart = React.lazy(() => import("./cart"));
const CheckoutPage = React.lazy(() => import("./CheckoutPage"));
const Help = React.lazy(() => import("./help"));
const Logout = React.lazy(() => import("./logout"));
const NotFound = React.lazy(() => import("./notFound"));
const ProductEdit = React.lazy(() => import("./ProductEdit"));
const ProductPreview = React.lazy(() => import("./productPreview"));
const ProductsPage = React.lazy(() => import("./productsPage"));
const ProductUpload = React.lazy(() => import("./productUpload"));
const Profile = React.lazy(() => import("./profile"));
const Signin = React.lazy(() => import("./signin"));
const Signup = React.lazy(() => import("./signup"));


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = auth.getCurrentUser();
    setCurrentUser(user);
  }, []);

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Navbar />
        {/* <Crumb /> */}
        <Suspense
          fallback={
              <Loader />
          }
        >
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
            <ProtectedRoute path="/editproduct" component={ProductEdit} />
            <Route path="/signin" component={Signin} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={Signup} />
            <Route path="/products" component={ProductsPage} />
            <Redirect from="/" exact to="/Products" />
            <Redirect to="/not-found" component={NotFound} />
          </Switch>
        </Suspense>
      </CurrentUserContext.Provider>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
