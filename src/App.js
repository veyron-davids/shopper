import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BottomNav from "./bottomNav";
import Footer from "./Footer";
import Loader from "./loader";
import Navbar from "./navbar";
import ProtectedRoute from "./protectedRoute";

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
const Sign = React.lazy(() => import("./sign"));
const SignUp = React.lazy(() => import("./sign-up"));

function App() {
  return (
    <div>
      <Navbar />
      {/* <Crumb /> */}
      <Suspense fallback={<Loader />}>
        <Switch>
          <ProtectedRoute path="/admin" component={Admin} />
          <Route path="/help" component={Help} />
          <ProtectedRoute path="/cart" component={Cart} />
          <ProtectedRoute path="/checkoutPage" component={CheckoutPage} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/productPreview/:productId" component={ProductPreview} />
          <ProtectedRoute path="/newproduct" component={ProductUpload} />
          <ProtectedRoute path="/editproduct" component={ProductEdit} />
          <Route path="/sign" component={Sign} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={SignUp} />
          <Route path="/products" component={ProductsPage} />
          <Redirect from="/" exact to="/Products" />
          <Redirect to="/not-found" component={NotFound} />
        </Switch>
      </Suspense>
      <ToastContainer />
      <BottomNav />
      <Footer />
    </div>
  );
}

export default App;
