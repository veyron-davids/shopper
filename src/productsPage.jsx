import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CarouselComponent from "./CarouselComponent";
import Catgory from "./Catgory";
import CurrentUserContext from "./context/current-user-context";
import LeftBbar from "./leftBbar";
import Load from "./load";
import Products from "./Products";
import RightBar from "./rightBar";
import { getProducts } from "./services/movieService";
import SpinnerLoader from "./spinnerLoader";

const ProductsPage = () => {
  const currentUser = useContext(CurrentUserContext);
  const [Items, setItems] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(4);
  const [PostSize, setPostSize] = useState();

  const [loader, showLoader, hideLoader] = SpinnerLoader();
  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getItems(variables);
  }, []);

  const getItems = async (variables) => {

    showLoader();
    try {
      const response = await getProducts(variables);
       if (response.data.success) {
        setItems([...Items, ...response.data.products]);
        setPostSize(response.data.postSize);
        // toast.success("welcome back");
        hideLoader();
      } else {
        // toast.error("Failed to fectch product data");
        window.location = "/logout";
      }
    } catch (error) {
      
    }
  };
     
  // console.log(Items)

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
    };
    getItems(variables);
    setSkip(skip);
  };

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value });
  // };

  // const filteredProducts = products.filter((product) => {
  //   return product.pname.toLowerCase().includes(searchfield.toLowerCase());
  // });
  return (
    <div className="product-page">
      <div className="hero-outline">
        <RightBar />
        <CarouselComponent />
        <LeftBbar />
      </div>
      <Catgory />
      <Products products={Items} />
      {PostSize >= Limit && <Load onLoadMore={onLoadMore} />}
      {loader}
    </div>
  );
};

export default ProductsPage;
