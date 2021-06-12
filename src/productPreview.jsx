import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PreviewDetails from "./previewDetails";
import ProductImageGallery from "./productImageGallery";
import Loader from "./loader";
import { selectAllProducts } from "./store/product-slice";
import classes from "./Styles.module.css";

const ProductPreview = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const products = useSelector(selectAllProducts);
  const params = useParams();

  const productIndex = products.findIndex((item) => {
    return item._id.toString() == params.productId.toString();
  });

  useEffect(() => {
    setProduct(products[productIndex]);
    // if (product == null) {
    //   setLoading(true);
    // } else {
    //   setLoading(false)
    // }
  }, [params, products]);


  return (
    <div className={classes.productPreview}>
      {loading && <Loader />}
      <div>
        <h2 className={classes.preview__text}>{`More  Pictures`}</h2>
      </div>
      <div className={classes.product__outline}>
        <ProductImageGallery detail={product} />
        <PreviewDetails />
      </div>
    </div>
  );
};

export default ProductPreview;
