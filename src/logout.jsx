import { toast } from "react-toastify";
import auth from "./services/authService";

const Logout = () => {
  const logout = () => {
    toast.info("Logout Successful 👋");
    auth.logout();
    window.location = "/products";
  };
  // componentDidMount() {
  //   toast.info("Logout Successful 👋");
  //   auth.logout();
  //   window.location = "/productsPage";
  // }
  logout();
};

export default Logout;
