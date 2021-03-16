import axios from "axios";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { GoCloudUpload } from "react-icons/go";

const DropZone = (props) => {
  const [Images, setImages] = useState([]);

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    //save the Image we chose inside the Node Server

    axios
      .post(
        "https://stormy-sands-49205.herokuapp.com/api/products/uploadImage",
        formData,
        config
      )
      .then((response) => {
        if (response.data.success) {
          setImages([...Images, response.data.image]);

          props.refreshFunction([...Images, response.data.image]);
        } else {
          alert("Failed to save the Image in Server");
        }
      });
  };

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div className="drop-zone-container">
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div className="drop-zone" {...getRootProps()}>
            {/* {console.log("getRootProps", { ...getRootProps() })}
            {console.log("getInputProps", { ...getInputProps() })} */}
            <input {...getInputProps()} />
            <GoCloudUpload className="upload-icon" />
          </div>
        )}
      </Dropzone>

      <div className="render-Image-upload">
        {Images.map((image, index) => (
          <div onClick={() => onDelete(image)}>
            <img
              className="selected-image"
              src={`https://stormy-sands-49205.herokuapp.com/${image}`}
              alt={`productImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropZone;
