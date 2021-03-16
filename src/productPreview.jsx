import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PreviewDetails from "./previewDetails";
import ProductImageGallery from "./productImageGallery";
import "./Styles.css";

const ProductPreview = (props) => {
  const [product, setProduct] = useState("");

  const productId = props.match.params.productId;

  useEffect(() => {
    try {
      axios
        .get(
          `http://localhost:3900/api/products/product_number?id=${productId}&type=single`
        )
        .then((response) => {
          setProduct(response.data[0]);
          console.log(response);
          console.log(props);
        });
    } catch (ex) {
      if (ex.response && ex.response.status === 400);
      window.location = "/productsPage";
      toast.error("Please login to view this page");
    }
  }, []);

  return (
    <div className="productPreview">
      <div>
        <h2 className="preview-text">{`More ${product.pname} Pictures`}</h2>
      </div>
      <div className="product-outline">
        <ProductImageGallery detail={product} />
        <PreviewDetails />
        
      </div>
    </div>
  );
};

export default ProductPreview;
