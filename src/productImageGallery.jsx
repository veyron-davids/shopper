import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { SERVER_IMAGE } from "./config";
import Styles from "./Styles.module.css";

function ProductImageGallery({ detail }) {
 
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (detail) {
      let images = [];
      detail.images &&
        detail.images.map((item) => {
          images.push({
            original: `${SERVER_IMAGE}/${item}`,
            thumbnail: `${SERVER_IMAGE}/${item}`,
          });
        });
      setImages(images);
    }
  }, [detail]);

  return (
    <div className={Styles.productGallery}>
      <ImageGallery
        items={Images}
        autoPlay
        showNav={false}
        showPlayButton={false}
      />
    </div>
  );
}

export default ProductImageGallery;
