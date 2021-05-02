import React from "react";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import CarouselComponent from "./CarouselComponent";
import Catgory from "./Catgory";
import Products from "./Products";
import RightBar from "./rightBar";
import classes from "./Styles.module.css";

const ProductsPage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  // const products = useSelector((state) => state.products.products);
  // console.log(products);

  // const currentUser = useContext(CurrentUserContext);
  // const [Items, setItems] = useState([]);
  // const [Skip, setSkip] = useState(0);
  // const [Limit, setLimit] = useState(4);
  // const [PostSize, setPostSize] = useState();
  // const [Images, setImages] = useState(null);

  // const [loader, showLoader, hideLoader] = SpinnerLoader();

  // const getItems = useCallback( async (variables) => {
  //   showLoader();
  //   try {
  //     // const response = await getProducts(variables);
  //     const response = await axios(PRODUCTS_SERVER, variables);
  //     console.log(response);
  //     if (response.data.success) {
  //       setItems([...Items, ...response.data.products]);
  //       setPostSize(response.data.postSize);
  //       // for (let i = 0; i > Items; i++) {
  //       //     let base64Flag = "data:image/jpeg;base64,";
  //       //     let imageStr = arrayBufferToBase64(Items[i].images.data.data);
  //       //   Items[i].images = imageStr + base64Flag;
  //       // }
  //       // toast.success("welcome back");
  //       hideLoader();
  //     } else {
  //       // toast.error("Failed to fectch product data");
  //       window.location = "/logout";
  //     }
  //   } catch (error) {}
  // });

  // useEffect(() => {
  //   const variables = {
  //     skip: Skip,
  //     limit: Limit,
  //   };

  //   getItems(variables);
  // }, []);
  // // console.log(Items)

  // const onLoadMore = () => {
  //   let skip = Skip + Limit;

  //   const variables = {
  //     skip: skip,
  //     limit: Limit,
  //   };
  //   getItems(variables);
  //   setSkip(skip);
  // };

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value });
  // };

  // const filteredProducts = products.filter((product) => {
  //   return product.pname.toLowerCase().includes(searchfield.toLowerCase());
  // });
  return (
    <div className={classes.product__page}>
      <div className={classes.hero__outline}>
        <Bounce left>
          <RightBar />
        </Bounce>
        <Flip>
          <CarouselComponent />
        </Flip>
        {/* <Bounce right>
          <LeftBbar />
        </Bounce> */}
      </div>
      <Catgory />
      <Products />
      {/* {PostSize >= Limit && <Load onLoadMore={onLoadMore} />}
      {loader} */}
    </div>
  );
};

export default ProductsPage;
