import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function ProductImageGallery(props) {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    if (props.detail.images && props.detail.images.length > 0) {
      let images = [];
      props.detail.images &&
        props.detail.images.map((item) => {
          images.push({
            original: `http://localhost:3900/${item}`,
            thumbnail: `http://localhost:3900/${item}`,
          });
        });
      setImages(images);
    }
  }, [props.detail]);
  console.log(Images)

  return (
    <div className="productGallery">
      <ImageGallery items={Images} />
    </div>
  );
}

export default ProductImageGallery;
