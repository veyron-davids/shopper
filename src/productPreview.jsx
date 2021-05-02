import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductImageGallery from "./productImageGallery"
import PreviewDetails from "./previewDetails";
import classes from "./Styles.module.css";

const ProductPreview = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();

  console.log(params.productId);

  return (
    <div className={classes.productPreview}>
      <div>
        <h2 className={classes.preview__text}>{`More --- Pictures`}</h2>
      </div>
      <div className={classes.product__outline}>
        {/* <ProductImageGallery detail={product} /> */}
        <PreviewDetails />
      </div>
    </div>
  );
};

export default ProductPreview;
