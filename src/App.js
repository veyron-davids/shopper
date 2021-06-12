import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./adminDashboard";
import "./App.css";
import BottomNav from "./bottomNav";
import CartPage from "./cartPage";
import CheckoutPage from "./CheckoutPage";
import Deals from "./dealsPage";
import Footer from "./Footer";
import Help from "./help";
import Logout from "./logout";
import Navbar from "./navbar";
import NotFound from "./notFound";
import ProductEdit from "./ProductEdit";
import ProductPreview from "./productPreview";
import ProductsPage from "./productsPage";
import ProductUpload from "./productUpload";
import Profile from "./profile";
import ProtectedRoute from "./protectedRoute";
import ResetPassword from "./resetPassword";
import auth from "./services/authService";
import Sign from "./sign";
import SignUp from "./sign-up";
import { selectUser } from "./store/auth-slice";
import { fetchProducts } from "./store/product-slice";

// const Admin = React.lazy(() => import("./adminDashboard"));

// const CheckoutPage = React.lazy(() => import("./CheckoutPage"));
// const Help = React.lazy(() => import("./help"));
// const CartPage = React.lazy(() => import("./cartPage"));
// const Deals = React.lazy(() => import("./dealsPage"));
// const Logout = React.lazy(() => import("./logout"));
// const NotFound = React.lazy(() => import("./notFound"));
// const ProductEdit = React.lazy(() => import("./ProductEdit"));
// const ProductPreview = React.lazy(() => import("./productPreview"));
// const ProductsPage = React.lazy(() => import("./productsPage"));
// const ProductUpload = React.lazy(() => import("./productUpload"));
// const Profile = React.lazy(() => import("./profile"));
// const Sign = React.lazy(() => import("./sign"));
// const SignUp = React.lazy(() => import("./sign-up"));

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const refreshPage = () => {
    window.location.reload();
  };
  useEffect(() => {
    dispatch(fetchProducts());
    if (user) {
      auth.autoLogout();
    } 
  }, []);

  return (
    <div>
      <Navbar />
      {/* {loading && <Loader />} */}
      {/* <Suspense fallback={<Loader />}> */}
      <Switch>
        <ProtectedRoute path="/admin" component={Admin} />
        <Route path="/help" component={Help} />
        <ProtectedRoute path="/checkoutPage" component={CheckoutPage} />
        <ProtectedRoute path="/deals-page" component={Deals} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/cart" component={CartPage} />
        <Route path="/productPreview/:productId" component={ProductPreview} />
        <Route path="/newproduct" component={ProductUpload} />
        <ProtectedRoute path="/editproduct" component={ProductEdit} />
        <Route path="/sign" component={Sign} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={SignUp} />
        <Route path="/reset" component={ResetPassword} />
        <Route path="/products" component={ProductsPage} />
        <Redirect from="/" exact to="/Products" />
        <Redirect to="/not-found" component={NotFound} />
      </Switch>
      {/* </Suspense> */}
      <ToastContainer />
      <BottomNav />
      <Footer />
    </div>
  );
}

export default App;
